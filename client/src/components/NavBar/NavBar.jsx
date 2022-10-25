import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import s from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div className={s.NavBar}>
        <Link to={"/home/pokemons"} style={{textDecoration: 'none'}}>
          <button className={s.boton}>Home</button>
        </Link>
        <Link to={"/home/create"} style={{textDecoration: 'none'}}>
          <button className={s.boton}>Create</button>
        </Link>
        <SearchBar />
    </div>
  );
};

export default NavBar;
