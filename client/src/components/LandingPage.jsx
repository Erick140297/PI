import React from "react";
import s from "./styles/LandingPage.module.css";

function App({onHome}) {
  return (
    <div className={s.fondo}>
      <h2 className={s.h2}>Bienvenido a Pokémon Henry</h2>
      <button className={s.boton} onClick={onHome}>
        Home
      </button>
    </div>
  );
}

export default App;
