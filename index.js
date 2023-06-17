import express from "express";
import authRoutes from "./routes/auth.js";
import placeRoutes from "./routes/place_to_visit.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client2/my-app/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });


app.post("/api/upload", upload.array('files', 20), function (req, res) {
  const files = req.files;
  
  if (files.length === 1) {
    const file = files[0];
    res.status(200).json(file.filename);
  } else {
    const filenames = files.map((file) => file.filename);
    res.status(200).json(filenames);
  }
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/places" , placeRoutes);


app.listen(8800, () => {
  console.log("Connected!");
});