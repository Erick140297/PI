const { Pokemon, Tipo } = require("../db");

const getPokemonsFromDB = async () => {
  let pokemonsDB = await Pokemon.findAll({
    include: [
      {
        model: Tipo,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  let array = [];
  for (let i = 0; i < pokemonsDB.length; i++) {
    let tipos = [];
    for (let j = 0; j < pokemonsDB[i].dataValues.tipos.length; j++) {
      tipos.push(pokemonsDB[i].dataValues.tipos[j].dataValues.name);
    }
    let newPokemon = { ...pokemonsDB[i].dataValues, tipos: tipos };
    array.push(newPokemon);
  }
  return array;
};

module.exports = getPokemonsFromDB;
