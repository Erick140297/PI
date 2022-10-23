import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

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
        <SearchBar />
      </ul>
    </div>
  );
};

export default NavBar;
