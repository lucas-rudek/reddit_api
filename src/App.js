import React from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const newPosts = res.data.data.children.map(obj => obj.data);
      setPosts(newPosts);
    });
  }, []);

  return (
    <div>
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            Post: <a href={post.url}>{post.title}</a> - User: {post.author} -
            Score: <b>{post.score}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
