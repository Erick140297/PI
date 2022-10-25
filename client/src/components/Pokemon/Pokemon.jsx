import React from "react";
import { Link } from "react-router-dom";
import s from "./Pokemon.module.css";

const Pokemon = ({ id, img, nombre, tipos }) => {
  return (
    <Link to={`/home/pokemons/${id}`} style={{ textDecoration: "none" }}>
      <div className={s.pokebola}>
        <div className={s.superior}>
          <img className={s.img} src={img} alt={nombre} />
        </div>
        <div className={s.inferior}>
          <h2 className={s.nombre}>{nombre.toUpperCase()}</h2>
          <h3>Tipos:</h3>
          <div className={s.tipos}>
            {tipos.map((tipo, index) => {
              return (
                <p className={s.tipo} key={index}>
                  {tipo}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
