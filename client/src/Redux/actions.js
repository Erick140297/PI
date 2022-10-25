import axios from "axios"

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
export const CLEAN_NAME = "CLEAN_NAME";
export const POST_POKEMON = "POST_POKEMON";
export const POST_IMG = "POST_IMG";

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

export const postPokemon = (form) => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/pokemons`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json())
    .then(response => dispatch({ type: POST_POKEMON, payload: response}))
    .catch(error => dispatch({ type: POST_POKEMON, payload: error}))
  };
};

export const postImg = (formData, response) =>{
  return function(dispatch){
    return axios({
      url: `http://localhost:3001/upload/${response.id}`,
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "image/jpeg",
      },
      data: formData,
    })
      .then((res) => res.json())
    .then(response => dispatch({ type: POST_IMG, payload: response}))
    .catch(error => dispatch({ type: POST_IMG, payload: error}))
  }
}