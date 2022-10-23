export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
export const CLEAN_NAME = "CLEAN_NAME";

export const getPokemons = () => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/pokemons`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_POKEMONS, payload: data });
      });
  };
};

export const getPokemonDetail = (id) => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_POKEMON_DETAIL, payload: data });
      });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const getPokemonName = (name) => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/pokemons/${name}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_POKEMON_NAME, payload: data });
      });
  };
};

export const cleanName = () => {
  return { type: CLEAN_NAME };
};
