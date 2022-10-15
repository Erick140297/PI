const getPokemonsFromAPI = require("../controllers/getPokemonsFromAPI");
const getPokemonsFromDB = require("../controllers/getPokemonsFromDB");
const getPokemonsByName = require("../controllers/getPokemonsByName");

const getAll = async (name) => {
  if (name === undefined) {
    let pokemonsAPI = await getPokemonsFromAPI();
    let pokemonsDB = await getPokemonsFromDB();
    let pokemons = pokemonsDB.concat(pokemonsAPI);
    return pokemons;
  } else {
    let pokemon = []
    const response = await getPokemonsByName(name);
    pokemon.push(response)
    return pokemon;
  }
};

module.exports = getAll;
