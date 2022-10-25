import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postPokemon } from "../../Redux/actions";
import { useHistory } from "react-router-dom";


const CreatePokemon = () => {

  let history = useHistory();
  const dispatch = useDispatch();

  let dataTipos = [
    "",
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow",
  ];

  const diccionario = {
    "normal":1,
    "fighting":2,
    "flying":3,
    "poison":4,
    "ground":5,
    "rock":6,
    "bug":7,
    "ghost":8,
    "steel":9,
    "fire":10,
    "water":11,
    "grass":12,
    "electric":13,
    "psychic":14,
    "ice":15,
    "dragon":16,
    "dark":17,
    "fairy":18,
    "unknown":19,
    "shadow":20,
  }

  const [form, setForm] = useState({
    nombre: "",
    vida: "",
    ataque: "",
    defensa: "",
    velocidad: "",
    altura: "",
    peso: "",
    img: "http://localhost:3001/uploads/default.jpg",
    arrayTipos: [],
  });

  const [tipos, setTipos] = useState({
    tipo1: "",
    tipo2: "",
  });

  const [error, setError] = useState({
    string: "",
    rango: "",
    tipo: "",
  });

  const [dato, setDato] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    dispatch(postPokemon(form))
    history.push(`/home/create/img`);
    setForm({
      nombre: "",
      vida: "",
      ataque: "",
      defensa: "",
      velocidad: "",
      altura: "",
      peso: "",
      img: "http://localhost:3001/uploads/default.jpg",
      arrayTipos: [],
    });
  };

  const evaluateString = (e) => {
    let value = e.target.value;
    if (value === "") {
      setError({ ...error, string: "El nombre es obligatorio" });
    } else {
      setError({ ...error, string: "" });
    }
  };

  const evaluateNumber = (e) => {
    let value = e.target.value;
    if (!/^[0-9]+$/.test(value)) {
      console.log("Tipo de dato no válido");
      setDato("Tipo de dato no válido");
    } else {
      setDato("");
    }
    if (parseInt(value) <= 0 || parseInt(value) >= 101) {
      console.log("El valor debe ser mayor a 0 y menor o igual a 100");
      setError({
        ...error,
        rango: "El valor debe ser mayor a 0 y menor o igual a 100",
      });
    } else {
      setError({ ...error, rango: "" });
    }
  };

  const handlerChange = {
    nombre: (e) => {
      evaluateString(e);
      setForm({ ...form, nombre: e.target.value });
    },

    vida: (e) => {
      evaluateNumber(e);
      setForm({ ...form, vida: e.target.value });
    },

    ataque: (e) => {
      evaluateNumber(e);
      setForm({ ...form, ataque: e.target.value });
    },
    defensa: (e) => {
      evaluateNumber(e);
      setForm({ ...form, defensa: e.target.value });
    },
    velocidad: (e) => {
      evaluateNumber(e);
      setForm({ ...form, velocidad: e.target.value });
    },
    altura: (e) => {
      evaluateNumber(e);
      setForm({ ...form, altura: e.target.value });
    },
    peso: (e) => {
      evaluateNumber(e);
      setForm({ ...form, peso: e.target.value });
    },
    tipo1: (e) => {
      setTipos({ ...tipos, tipo1: diccionario[e.target.value] });
    },
    tipo2: (e) => {
      setTipos({ ...tipos, tipo2: diccionario[e.target.value] });
    },
  };

  useEffect(() => {
    if(tipos.tipo2 === ""){
      setForm({ ...form, arrayTipos: [tipos.tipo1] });
    } else if(tipos.tipo2 !== ""){
      setForm({ ...form, arrayTipos: [tipos.tipo1, tipos.tipo2] });
    }
  }, [tipos]);

  return (
    <div>
      <h2>Crea tu propio Pokemon</h2>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            onChange={handlerChange.nombre}
            value={form.nombre}
          />
          {!form.nombre && <p>{error.string}</p>}
        </div>

        <div>
          <label>Vida: </label>
          <input type="text" onChange={handlerChange.vida} value={form.vida} />
        </div>

        <div>
          <label>Ataque: </label>
          <input
            type="number"
            onChange={handlerChange.ataque}
            value={form.ataque}
          />
        </div>

        <div>
          <label>Defensa: </label>
          <input
            type="number"
            onChange={handlerChange.defensa}
            value={form.defensa}
          />
        </div>

        <div>
          <label>Velocidad: </label>
          <input
            type="number"
            onChange={handlerChange.velocidad}
            value={form.velocidad}
          />
        </div>

        <div>
          <label>Altura: </label>
          <input
            type="number"
            onChange={handlerChange.altura}
            value={form.altura}
          />
        </div>

        <div>
          <label>Peso: </label>
          <input
            type="number"
            onChange={handlerChange.peso}
            value={form.peso}
          />
        </div>

        <div>
          <p>Status: </p>
          <p>Rango</p>
          {error.rango ? <p>{error.rango}</p> : <p>Ok</p>}
          <p>Tipo de dato</p>
          {dato ? <p>{dato}</p> : <p>Ok</p>}
        </div>

        <label>Tipos: </label>
        <p>Selecciona al menos un tipo</p>
        <select name="tipo1" onChange={handlerChange.tipo1}>
          {dataTipos?.map((tipo, index) => {
            return (
              <option value={tipo} key={index}>
                {tipo}
              </option>
            );
          })}
        </select>

        <select name="tipo2" onChange={handlerChange.tipo2}>
          {dataTipos?.map((tipo, index) => {
            return (
              <option value={tipo} key={index}>
                {tipo}
              </option>
            );
          })}
        </select>

        <button
          type="submit"
          disabled={
            !form.nombre ||
            !form.vida ||
            !form.ataque ||
            !form.defensa ||
            !form.velocidad ||
            !form.altura ||
            !form.peso ||
            !tipos.tipo1 ||
            error.string ||
            error.rango ||
            error.tipo ||
            dato
          }
        >
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreatePokemon;
