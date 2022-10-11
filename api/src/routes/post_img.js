const { Router } = require('express')
const uploadFile = require('../middleware/multer')

const router = Router();

router.put("/upload/:id", uploadFile(), (req, res) => {
  const { id } = req.params
  console.log(req.file.filename)
  res.send(id);
});

module.exports = router