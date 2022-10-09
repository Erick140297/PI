const { Router } = require("express");


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const get_pokemons = require('./get_pokemons.js');

const post_pokemons = require('./post_pokemons.js');
const get_types = require('./get_types.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', get_pokemons)

router.use('/', post_pokemons)
router.use('/', get_types)

module.exports = router;
