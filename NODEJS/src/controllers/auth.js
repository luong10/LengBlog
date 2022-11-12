import { db } from "../config/connectDB.js";
import jwt from "jsonwebtoken";

export const singUp = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("Người dùng đã tồn tại!");

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, req.body.password];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Tao thanh cong");
    });
  });
};

export const logIn = (req, res) => {
  const q = "SELECT * FROM users WHERE  username = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0)
      return res.status(404).json("Người dùng không tồn tại!");
    if (req.body.password !== data[0].password)
      return res.status(404).json("Sai mật khẩu hoặc tên đăng nhập!");

    const { password, ...other } = data[0];

    const token = jwt.sign({ id: data[0].id }, "jwttoken");
    res.cookie("auth", token, { httpOnly: true }).json(other);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("auth", {
      sameSite: "none",
      secure: true,
    })
    .json(":>>>>>>");
};
