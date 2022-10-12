const { Router } = require('express')
const uploadFile = require('../middleware/multer')
const updatePokemon = require('../controllers/updatePokemon')
const router = Router();

router.post("/upload/:id", uploadFile(), async (req, res) => {
  const { id } = req.params
  const pokemon = await updatePokemon(id);
  res.send(pokemon);
});

module.exports = router