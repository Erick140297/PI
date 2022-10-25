import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={s.fondo}>
      <h2 className={s.h2}>Bienvenido a Pokémon Henry</h2>
      <Link to={"/home/pokemons"} style={{textDecoration: 'none'}}>
        <button className={s.boton}>
          Home
        </button>
      </Link>
    </div>
  );
};

export default LandingPage