const { Pokemon } = require("../db");

const createPokemonForDB = async (
  nombre,
  vida,
  ataque,
  defensa,
  velocidad,
  altura,
  peso
) => {
  const newPokemon = await Pokemon.create({
    nombre,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
  });
  return newPokemon;
};

module.exports = createPokemonForDB