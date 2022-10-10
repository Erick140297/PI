const { Router } = require('express')
const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require('uuid');

const router = Router();

// middlewares
const imgID = uuidv4()
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"),
  filename: (req, file, cd) => {
    cd(null, `${imgID}${path.extname(file.originalname)}`);
  },
});

router.use(
  multer({
    storage,
    dest: path.join(__dirname, "public/uploads"),
    limits: { fieldSize: 5000000 },
    fileFilter: (req, file, cb) => {
      const filetypes = /jpeg|jpg|png|gif/;
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname));
      if (mimetype && extname) {
        return cb(null, true);
      }
      cb("Error: tipo de archivo no válido");
    },
  }).single("image")
);

// Route
router.post("/upload", (req, res,) => {
  const name = imgID;
  res.send(name)
});

module.exports = router