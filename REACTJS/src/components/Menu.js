import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [posts, setPosts] = useState([]);

  //const cat = useLocation();

  //console.log(cat);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      try {
        const res = await axios.get(`/posts`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }

      // ...
    }
    fetchData();
  }, [posts]);
  return (
    <div className="menu">
      <h1>Bài viết khác </h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`/upload/${post?.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
