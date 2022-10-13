export const bulbasaur = {
  id: 1,
  nombre: "bulbasaur",
  vida: 45,
  ataque: 49,
  defensa: 49,
  velocidad: 45,
  altura: 7,
  peso: 69,
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  tipos: ["grass", "poison"],
};

export const ivysaur = {
  id: 2,
  nombre: "ivysaur",
  vida: 60,
  ataque: 62,
  defensa: 63,
  velocidad: 60,
  altura: 10,
  peso: 130,
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  tipos: ["grass", "poison"],
};

export const venusaur = {
  id: 3,
  nombre: "venusaur",
  vida: 80,
  ataque: 82,
  defensa: 83,
  velocidad: 80,
  altura: 20,
  peso: 1000,
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
  tipos: ["grass", "poison"],
};

let pokemons = [bulbasaur, ivysaur, venusaur];

console.log(pokemons);

export default pokemons;
