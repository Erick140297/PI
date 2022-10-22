import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Bienvenido a PokemonApp</h1>

      <Link to={"/home/pokemons"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default LandingPage