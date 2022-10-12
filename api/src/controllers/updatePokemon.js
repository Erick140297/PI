const { Pokemon } = require("../db");

const updatePokemon = async (id) => {
  await Pokemon.update({img: `http://localhost:3001/uploads/${id}.jpg`},{
    where: {
      id: id
    }
  })

  const pokemon = await Pokemon.findByPk(id);
  return pokemon
}

module.exports = updatePokemon