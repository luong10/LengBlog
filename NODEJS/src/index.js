import express from "express";
import postRoute from "./routes/posts.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();
const port = 8080;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //files khi upload xong sẽ nằm trong thư mục "uploads" này - các bạn có thể tự định nghĩa thư mục này
    cb(null, ".././REACTJS/public/upload");
  },
  filename: function (req, file, cb) {
    // tạo tên file = thời gian hiện tại nối với số ngẫu nhiên => tên file chắc chắn không bị trùng
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  console.log("chcec file: ", file.filename);
  res.status(200).json(file.filename);
});

app.use(cookieParser());
app.use(express.json());
app.use("/api/posts", postRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
