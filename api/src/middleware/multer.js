const multer = require("multer");
const path = require("path");

const uploadFile = () => {
  const storage = multer.diskStorage({
    destination: path.join(__dirname, "../public/uploads"),
    filename: (req, file, cb) => {
      let id = req.params.id
      let ext = file.originalname.slice(file.originalname.lastIndexOf("."));
      cb(null, id + ext);
    },
  });

  const upload = multer({
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
  }).single("img")

  return upload;
};

module.exports = uploadFile;