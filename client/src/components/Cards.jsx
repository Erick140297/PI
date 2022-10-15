import React from "react";
import Card from "./Card";
import s from './styles/Cards.module.css'

const Cards = ({ pokemons }) => {
  if (!pokemons) {
    return <h2>No hay pokemones disponibles para mostrar</h2>;
  }
  return (
    <div className={s.container}>
      {pokemons &&
        pokemons.map((e) => (
          <div className={s.item}>
            <Card
            key = {e.id}
            imagen={e.img}
            nombre={e.nombre}
            tipos={e.tipos}
            onClose={() => alert(e.nombre)}
          />
          </div>
          
        ))}
    </div>
  );
};

export default Cards;
