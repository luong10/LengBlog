import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
// const posts = [
//   {
//     id: 1,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://i.pinimg.com/originals/79/4f/c6/794fc659b025e44256077d2751fe0cdd.jpg",
//   },
//   {
//     id: 2,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-FLamDrKNFyBzDAgZFRO4Ra2sx_mD1GVqQ&usqp=CAU",
//   },
//   {
//     id: 3,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FRAKwLxcRvdqCUeJxZnBXka-MRAWthSicQ&usqp=CAU",
//   },
//   {
//     id: 4,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FRAKwLxcRvdqCUeJxZnBXka-MRAWthSicQ&usqp=CAU",
//   },
// ];

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation();

  //console.log(cat);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      try {
        const res = await axios.get(`/posts${cat.search}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }

      // ...
    }
    fetchData();
  }, [cat.search]);

  //console.log("check:", posts);
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`/upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/single-page/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p dangerouslySetInnerHTML={{ __html: post.descc }}></p>
              <button className=".read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
