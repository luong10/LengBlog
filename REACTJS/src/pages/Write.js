import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
//import "react-quill/dist/quill.bubble.css";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.descc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(state?.img || "");
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      //console.log("check anh:", res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    var today = new Date();
    e.preventDefault();
    const imgUrl = await upload();
    //alert(imgUrl.filename);
    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            descc: value,
            cat,
            img: imgUrl ? imgUrl : file,
          })
        : await axios.post(`/posts/`, {
            title,
            descc: value,
            cat,
            img: imgUrl ? imgUrl : file,
            date:
              today.getFullYear() +
              "-" +
              (today.getMonth() + 1) +
              "-" +
              today.getDate(),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log("check state", state);

  return (
    <div className="add">
      <div className="content">
        <input
          value={title}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>UpLoad</h1>
          <input
            hidden
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file">Nhấn vào đây để tải ảnh</label>
          <div className="buttons">
            {/* <button>Save</button> */}
            <button onClick={handleClick}>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              checked={cat === "art"}
              type="radio"
              name="cat"
              value="art"
              id="art"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              checked={cat === "science"}
              type="radio"
              name="science"
              value="science"
              id="science"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              checked={cat === "technology"}
              type="radio"
              name="cat"
              value="technology"
              id="technology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input
              checked={cat === "cinema"}
              type="radio"
              name="cat"
              value="cinema"
              id="cinema"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input
              checked={cat === "design"}
              type="radio"
              name="cat"
              value="design"
              id="design"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input
              checked={cat === "food"}
              type="radio"
              name="cat"
              value="food"
              id="food"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
