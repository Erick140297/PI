import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonDetail, cleanDetail } from "../../Redux/actions";
import s from "./PokemonDetail.module.css";

const PokemonDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonDetail(id));
    return function () {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  return (
    <div className={s.pantalla}>
      <div className={s.container}>
        <div className={s.imgDatos}>
          <img
            className={s.imagen}
            src={pokemonDetail.img}
            alt={pokemonDetail.nombre}
          />
          <div className={s.datos}>
            <div className={s.nombreTipos}>
            <div className={s.dato}>
              <p>Nombre: </p>
              <p className={s.tipo}>{pokemonDetail.nombre}</p>
            </div>
            <div className={s.dato}>
              <p>Tipos: </p>
              <ul>
                {pokemonDetail.tipos?.map((tipo, index) => {
                  return (
                    <li className={s.tipo} key={index}>
                      {tipo}
                    </li>
                  );
                })}
              </ul>
            </div>
            </div>
            <div>
              <p >id: </p>
              <p className={s.tipo}>{pokemonDetail.id}</p>
            </div>
          </div>
        </div>
        <div className={s.containerEstadisticas}>
          <p>Estadistícas: </p>
          <div className={s.estadisticas}>
            <div className={s.dato}>
              <p>Vida: </p>
              <p className={s.tipo}>{pokemonDetail.vida}</p>
            </div>
            <div className={s.dato}>
              <p>Ataque: </p>
              <p className={s.tipo}>{pokemonDetail.ataque}</p>
            </div>
            <div className={s.dato}>
              <p>Defensa: </p>
              <p className={s.tipo}>{pokemonDetail.defensa}</p>
            </div>
            <div className={s.dato}>
              <p>Velocidad: </p>
              <p className={s.tipo}>{pokemonDetail.velocidad}</p>
            </div>
            <div className={s.dato}>
              <p>Altura: </p>
              <p className={s.tipo}>{pokemonDetail.altura}</p>
            </div>
            <div className={s.dato}>
              <p>Peso: </p>
              <p className={s.tipo}>{pokemonDetail.peso}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
