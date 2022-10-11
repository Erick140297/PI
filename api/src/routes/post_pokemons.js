const { Router } = require("express");
const createPokemonForDB = require("../controllers/createPokemonForDB");
const { Pokemon } = require("../db");

const router = Router();

// POST /pokemons:

router.post("/pokemons", async (req, res) => {
  try {
    const {
      nombre,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
      arrayTipos,
    } = req.body;
    let pokemon = await createPokemonForDB(
      nombre,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
      arrayTipos
    );

    res.status(200).send(pokemon);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
