const axios = require("axios");

// fetch('https://pokeapi.co/api/v2/type')
//   .then(response => response.json())
//   .then(json => console.log(json))

const getTipos = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154");

    let Pokemons = [];

    for (let i = 0; i < response.data.results.length; i++) {
      Pokemons.push(response.data.results[i])
    }
    console.log(Pokemons)
  } catch (error) {
    console.log(error);
  }
};

getTipos();
