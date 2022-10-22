import { GET_POKEMONS, GET_POKEMON_DETAIL, CLEAN_DETAIL } from "./actions";

const initialState = {
  pokemons: [],
  pokemonDetail: {},
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

    default:
      return { ...state };
  }
};

export default reducer;
