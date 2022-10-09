const axios = require("axios");
const { Tipo } = require("../db");

const getTypes = async () => {
  const types = await Tipo.findAll();
  if (types.length === 0) {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    let Types = [];
    for (let i = 0; i < response.data.results.length; i++) {
      Types.push(response.data.results[i]);
    }
    const newTypes = await Tipo.bulkCreate(Types);
    console.log("Datos mostrados desde la API");
    return newTypes;
  } else {
    console.log("Datos mostrados desde la db");
    return types;
  }
};

module.exports = getTypes
