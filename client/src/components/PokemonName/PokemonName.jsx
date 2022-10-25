import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { cleanName, getPokemonName } from "../../Redux/actions";

const PokemonName = () => {
  const { name } = useParams();
  console.log(useParams());
  console.log(name);
  const dispatch = useDispatch();
  const pokemonName = useSelector((state) => state.pokemonName);

  useEffect(() => {
    dispatch(getPokemonName(name));
    return function () {
      dispatch(cleanName());
    };
  }, [dispatch, name]);

  return (
    <div>
      <img src={pokemonName.img} alt={pokemonName.nombre} />
      <p>Nombre: </p>
      <Link to = {`/home/pokemons/${pokemonName.id}`}>
        <p>{pokemonName.nombre}</p>
      </Link>
      <p>Tipos: </p>
      <ul>
        {pokemonName.tipos?.map((tipo, index) => {
          return <li key={index}>{tipo}</li>;
        })}
      </ul>
    </div>
  );
};

export default PokemonName;
