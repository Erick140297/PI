import React from "react";
import { Link } from "react-router-dom";
import s from "./Exito.module.css";


export default function Exito() {
  return (
    <div className={s.container}>
      <h2 className={s.h2}>¡Felicidades tu pokemon ha sido creado con Exito!</h2>
      <Link to={"/home/pokemons"} style={{textDecoration: 'none'}}>
        <button className={s.boton} >Home</button>
      </Link>
    </div>
  );
}
