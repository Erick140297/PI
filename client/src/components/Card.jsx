import React from "react";
import s from "./styles/Card.module.css";

const Card = ({ imagen, nombre, tipos, onClose }) => {
  return (
    <div className={s.pokebola}>
      <div className={s.superior}>
        <button className={s.btn} onClick={onClose}>
          X
        </button>
        <img className={s.img} src={imagen} alt={nombre} />
      </div>
      <div className={s.inferior}>
        <h2 className={s.nombre}>{nombre.toUpperCase()}</h2>
        <h3>Tipos:</h3>
        <div className={s.tipos}>
          {tipos.map((e, i) => (
            <p className={s.tipo} key={i}>
              {e}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
