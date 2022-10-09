const { Router } = require("express");
const getPokemonByID = require('../controllers/getPokemonByID')
const router = Router();

// GET /pokemons/{idPokemon}

router.get("/pokemons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const response = await getPokemonByID(id);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router