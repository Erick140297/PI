import React from "react";
import { Link } from "react-router-dom";

export default function Exito() {
  return (
    <div>
      <h2>¡Felicidades tu pokemon ha sido creado con Exito!</h2>
      <Link to={"/home/pokemons"}>
        <button>Home</button>
      </Link>
    </div>
  );
}
