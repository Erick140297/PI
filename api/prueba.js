const axios = require("axios");
const { Pokemon } = require("./src/db");

const getPokemonClient = async (id) => {
  const pokemon = await Pokemon.findByPk(id);
  return pokemon
}

const getPokemonAPI = async (id) => {
  const tipos = [];
  const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
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
};

const getPokemonByID = async (id) => {
  if (id.includes('-')){
    await getPokemonClient(id)
  } else {
    await getPokemonAPI(id)
  }
}

module.exports = getPokemonByID