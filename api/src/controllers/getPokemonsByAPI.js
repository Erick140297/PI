const axios = require("axios");

const getPokemonsByAPI = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0"
    );

    const promises = await response.data.results.map((e) => {
      return axios.get(e.url);
    });

    const pokeData = await Promise.all(promises);

    const pokemons = pokeData.map((e) => {
      return {
        id: e.data.id,
        nombre: e.data.name,
        vida: e.data.stats[0].base_stat,
        ataque: e.data.stats[1].base_stat,
        defensa: e.data.stats[2].base_stat,
        velocidad: e.data.stats[5].base_stat,
        altura: e.data.height,
        peso: e.data.weight,
        img:
          e.data.sprites.other["official-artwork"].front_default ||
          e.data.sprites.front_default,
      };
    });
    console.log(pokemons);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getPokemonsByAPI