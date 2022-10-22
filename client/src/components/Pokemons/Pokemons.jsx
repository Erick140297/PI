import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../Redux/actions";
import Pokemon from "../Pokemon/Pokemon";

const Pokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div>
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <Pokemon
              id={pokemon.id}
              img={pokemon.img}
              nombre={pokemon.nombre}
              tipos={pokemon.tipos}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Pokemons;
