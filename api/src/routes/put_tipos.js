const { Router } = require("express");
const { Pokemon } = require("../db");

const router = Router();

router.put("/tipos", async (req, res) => {
  try {
    const { id, tipos } = req.body;
    const pokemon = await Pokemon.findByPk(id)
    res.status(200).json(await pokemon.addTipos(tipos));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router