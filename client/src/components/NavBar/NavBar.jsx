import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <Link to={"/home/pokemons"}>
          <li>Home</li>
        </Link>
        <Link to={"/home/create"}>
          <li>Create</li>
        </Link>
        <li>Buscar</li>
      </ul>
    </div>
  );
};

export default NavBar;
