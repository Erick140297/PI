import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  CLEAN_DETAIL,
  GET_POKEMON_NAME,
  CLEAN_NAME,
  POST_POKEMON
} from "./actions";

const initialState = {
  pokemons: [],
  pokemonDetail: {},
  pokemonName: {},
  postPokemon: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        pokemonDetail: {},
      };

    case GET_POKEMON_NAME:
      return {
        ...state,
        pokemonName: action.payload,
      };

    case CLEAN_NAME:
      return {
        ...state,
        pokemonName: {},
      };

    case POST_POKEMON:
      return {
        ...state,
        postPokemon: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
