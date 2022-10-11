const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const get_pokemons = require("./get_pokemons.js");
const get_pokemons_id = require("./get_pokemons_id.js");
const post_pokemons = require("./post_pokemons.js");
const get_types = require("./get_types.js");
const post_img = require("./post_img.js")
const put_tipos = require("./put_tipos.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", get_pokemons);
router.use("/", get_pokemons_id);
router.use("/", post_pokemons);
router.use("/", get_types);
router.use("/", post_img);
router.use("/", put_tipos);

module.exports = router;
