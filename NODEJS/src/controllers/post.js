import { db } from "../config/connectDB.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts limit 5";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
  //res.json("from controller");
};

export const getPost = (req, res) => {
  const q =
    "SELECT p.id, `username`, `title`, `descc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.auth;
  if (!token) return res.status(401).json("ko co quyen");

  jwt.verify(token, "jwttoken", (err, userInfo) => {
    if (err) return res.status(403).json("ko co quyen");

    const q =
      "INSERT INTO posts(`title`, `descc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.descc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("them thanh cong");
    });
  });
};

export const deletePost = (req, res) => {
  const q = "delete from posts WHERE id =?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.json("Post has been deleted!");
  });
};

export const updatePost = (req, res) => {
  const token = req.cookies.auth;
  if (!token) return res.status(401).json("ko co quyen");

  jwt.verify(token, "jwttoken", (err, userInfo) => {
    if (err) return res.status(403).json("ko co quyen");

    const postId = req.params.id;
    const q =
      "UPDATE posts SET `title`=?,`descc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

    const values = [req.body.title, req.body.descc, req.body.img, req.body.cat];

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("sua thanh cong");
    });
  });
};
