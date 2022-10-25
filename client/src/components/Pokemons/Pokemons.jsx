import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../Redux/actions";
import Pokemon from "../Pokemon/Pokemon";
import s from './Pokemons.module.css'


const Pokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  if(!pokemons){
    return <h2>No hay pokemones disponibles para mostrar</h2>
  }
  return (
    <div className={s.container}>
      {pokemons.map((pokemon) => {
        return (
          <div className={s.item} key={pokemon.id}>
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
