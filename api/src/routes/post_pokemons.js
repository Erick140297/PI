const { Router } = require("express");
const createPokemonForDB = require("../controllers/createPokemonForDB");

const router = Router();

// POST /pokemons:

router.post("/pokemons", async (req, res) => {
  try {
    const { nombre, vida, ataque, defensa, velocidad, altura, peso } = req.body;
    const response = await createPokemonForDB(nombre, vida, ataque, defensa, velocidad, altura, peso)
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router
