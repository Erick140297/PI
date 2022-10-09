const { Router } = require("express");
const { Pokemon, Tipo } = require("../db");
const axios = require("axios");
const getPokemonsByAPI = require('../controllers/getPokemonsByAPI');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// GET /pokemons:
// Obtener un listado de los pokemons desde pokeapi.
// Debe devolver solo los datos necesarios para la ruta principal

router.get("/pokemons", async (req, res) => {
  try {
   
    res.status(200).send(await getPokemonsByAPI())
  } catch (error) {
    
  }
});

// POST /pokemons:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
// Crea un pokemon en la base de datos relacionado con sus tipos.

router.post("/pokemons", async (req, res) => {
  try {
    const { nombre, vida, ataque, defensa, velocidad, altura, peso } = req.body;
    const newPokemon = await Pokemon.create({
      nombre,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
    });
    res.status(201).send(newPokemon);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// GET /types:
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

router.get("/types", async (req, res) => {
  try {
    const types = await Tipo.findAll();
    if (types.length === 0) {
      console.log("Datos mostrados desde la API");
      const response = await axios.get("https://pokeapi.co/api/v2/type");
      let Types = [];
      for (let i = 0; i < response.data.results.length; i++) {
        Types.push(response.data.results[i]);
      }
      const newTypes = await Tipo.bulkCreate(Types);
      return res.status(201).send(newTypes);
    }
    console.log("Datos mostrados desde la db");
    res.status(200).send(types);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
