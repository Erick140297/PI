const getPokemonsFromAPI = require("../controllers/getPokemonsFromAPI");
const getPokemonsByName = require("../controllers/getPokemonsByName");

const getAll = async (name) =>{
  if (name === undefined) {
    const pokemons = await getPokemonsFromAPI();
    return pokemons
  } else{
    const pokemon = await getPokemonsByName(name)
    return pokemon
  }
}

module.exports = getAll