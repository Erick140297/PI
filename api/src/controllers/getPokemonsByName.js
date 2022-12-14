const axios = require("axios");
const { Pokemon, Tipo } = require("../db");

const getPokemonByName = async (name) => {
  const pokemon = await Pokemon.findOne({
    where: {nombre: name},
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
  if (pokemon) {
    let tipos = []
    for (let i = 0; i < pokemon.dataValues.tipos.length; i++) {
      tipos.push(pokemon.dataValues.tipos[i].name)
    }
    let newPokemon = { ...pokemon.dataValues, tipos: tipos };
    console.log(newPokemon)
    return newPokemon;
  } else {
    const tipos = [];
    const pokeData = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    for (let i = 0; i < pokeData.data.types.length; i++) {
      tipos.push(pokeData.data.types[i].type.name);
    }
    const pokemon = {
      id: pokeData.data.id,
      nombre: pokeData.data.name,
      vida: pokeData.data.stats[0].base_stat,
      ataque: pokeData.data.stats[1].base_stat,
      defensa: pokeData.data.stats[2].base_stat,
      velocidad: pokeData.data.stats[5].base_stat,
      altura: pokeData.data.height,
      peso: pokeData.data.weight,
      img:
        pokeData.data.sprites.other["official-artwork"].front_default ||
        pokeData.data.sprites.front_default,
      tipos: tipos,
    };
    return pokemon
  }
};

module.exports = getPokemonByName