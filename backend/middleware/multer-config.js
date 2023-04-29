const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Set up middleware to handle file uploads
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB file size limit
}).single("file");

// Handle POST request to /api/upload
app.post("/api/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(req.file);
      res.sendStatus(200);
    }
  });
});

