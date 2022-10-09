const { Router } = require("express");
const getPokemonsByAPI = require("../controllers/getPokemonsByAPI");
const router = Router();

// GET /pokemons:

router.get("/pokemons", async(req, res) => {
  try {
    const response = await getPokemonsByAPI()
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;