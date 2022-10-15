import React from "react";
import Logo from "../Galeria/Logo.png";
import SearchBar from "./SearchBar";
import s from './styles/Nav.module.css'

const Nav = ({searchPokemon, onCreate, getPokemons}) => {
  return (
    <div className={s.nav}>
      <div className={s.logoYtitulo} onClick={() => getPokemons()}>
        <img className={s.img} src={Logo} alt="Logo" />
        <span className={s.titulo} >Home-Pokémon Henry</span>
      </div>
      <button className={s.boton} onClick={() => onCreate()} >¡Crea tu propio Pokémon!</button>
      <SearchBar searchPokemon = {searchPokemon}/>
    </div>
  );
};

export default Nav;
