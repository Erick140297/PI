import React from "react";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
  return (
    <div >
      <img src={props.img} alt={props.nombre} />
      <Link to = {`/home/pokemons/${props.id}`}>
        <p>{props.nombre}</p>
      </Link>
      <p>Tipos: </p>
      {props.tipos.map((tipo, index) => {
        return <p key={index}>{tipo}</p>;
      })}
    </div>
  );
};

export default Pokemon;
