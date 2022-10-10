const { Router } = require('express')
const uploadFile = require('../middleware/multer')

const router = Router();

router.post("/upload/:id", uploadFile(), (req, res) => {
  console.log(req.file.filename)
  res.send('ok');
});

module.exports = router