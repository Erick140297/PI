const { Router } = require("express");
const getAll = require("../controllers/getAll");
const router = Router();

// GET /pokemons:
// GET /pokemons?name="..."

router.get("/pokemons", async (req, res) => {
  try {
    const { name } = req.query;
    const response = await getAll(name);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
