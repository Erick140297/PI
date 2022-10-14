import React from "react";
import Logo from "../Galeria/Logo.png";
import SearchBar from "./SearchBar";
import s from './styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={s.nav}>
      <div className={s.logoYtitulo}>
        <img className={s.img} src={Logo} alt="Logo" />
        <span className={s.titulo} >Pokémon Henry</span>
      </div>
      <button className={s.boton}>¡Crea tu propio Pokémon!</button>
      <SearchBar />
    </div>
  );
};

export default Nav;
