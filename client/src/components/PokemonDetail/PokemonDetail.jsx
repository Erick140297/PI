import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail, cleanDetail } from "../../Redux/actions";

const PokemonDetail = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonDetail(id));
    return function () {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  return (
    <div>
      <img src={pokemonDetail.img} alt={pokemonDetail.nombre} />
      <p>Nombre: </p>
      <p>{pokemonDetail.nombre}</p>
      <p>Tipos: </p>
      <ul>
        {pokemonDetail.tipos?.map((tipo, index) => {
          return <li key={index}>{tipo}</li>;
        })}
      </ul>
      <p>id: </p>
      <p>{pokemonDetail.id}</p>
      <p>Vida: </p>
      <p>{pokemonDetail.vida}</p>
      <p>Ataque: </p>
      <p>{pokemonDetail.ataque}</p>
      <p>Defensa: </p>
      <p>{pokemonDetail.defensa}</p>
      <p>Velocidad: </p>
      <p>{pokemonDetail.velocidad}</p>
      <p>Altura: </p>
      <p>{pokemonDetail.altura}</p>
      <p>Peso: </p>
      <p>{pokemonDetail.peso}</p>
    </div>
  );
};

export default PokemonDetail;
