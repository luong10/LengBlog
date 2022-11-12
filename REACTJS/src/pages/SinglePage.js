import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Edit from "../images/icons8-pencil-60.png";
import Delete from "../images/icons8-trash-64.png";
import Menu from "../components/Menu";
import axios from "axios";
import { AuthContext } from "../context/userContext.js";

const SinglePage = () => {
  const [post, setPost] = useState({});

  const cat = useLocation();

  const postId = cat.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  //console.log(postId);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      try {
        const res = await axios.get(`/posts/${postId}`);

        setPost(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }

      // ...
    }
    fetchData();
  }, [postId]);

  const handleDel = async () => {
    try {
      navigate("/");
      await axios.delete(`/posts/${postId}`);
      //console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  const getDate = (date) => {
    return date.slice(0, 10);
  };

  //console.log("check date,", post.date.slice(0, 10));

  return (
    <div className="single">
      <div className="content">
        <img src={`/upload/${post?.img}`} alt="" />
        <div className="user">
          {/* {post.userImg ? <img src={post.userImg} alt="" /> : ""} */}
          <img
            src="https://img.icons8.com/plasticine/100/null/user-male-circle.png"
            alt=""
          />

          <div className="info">
            <span>{post?.username}</span>
            {post.date ? <p>{getDate(post.date)}</p> : ""}
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img
                  src="https://img.icons8.com/arcade/55/null/edit.png"
                  alt=""
                />
                {/* <img src={Edit} alt="" /> */}
              </Link>
              <img onClick={handleDel} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: post.descc }}></p>
      </div>
      <Menu />
    </div>
  );
};

export default SinglePage;
