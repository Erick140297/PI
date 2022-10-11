const { Pokemon } = require("../db");

const createPokemonForDB = async (
  nombre,
  vida,
  ataque,
  defensa,
  velocidad,
  altura,
  peso,
  arrayTipos
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

  id = newPokemon.id;
  let pokemon = await Pokemon.findByPk(id);
  let dataTipos = await pokemon.addTipos(arrayTipos);
  let tipos = [];
  dataTipos.forEach((e) => tipos.push(e.tipoId));
  pokemon = { ...pokemon.dataValues, tipos: tipos };

  return pokemon;
};

module.exports = createPokemonForDB;
