import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { cleanName, getPokemonName } from "../../Redux/actions";
import s from "./PokemonName.module.css";

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
    <Link
      to={`/home/pokemons/${pokemonName.id}`}
      style={{ textDecoration: "none" }}
    >
      <div className={s.container}>
        <img
          className={s.imagen}
          src={pokemonName.img}
          alt={pokemonName.nombre}
        />
        <div className={s.texto}>
          <div>
            <p>Nombre: </p>
            <p className={s.tipo}>{pokemonName.nombre}</p>
          </div>
          <div>
            <p>Tipos: </p>
            <ul>
              {pokemonName.tipos?.map((tipo, index) => {
                return (
                  <>
                    <li className={s.tipo} key={index}>
                      {tipo}
                    </li>
                    <br />
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonName;
