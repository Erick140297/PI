import React, { useState } from "react";
import s from "./styles/SearchBar.module.css";

const SearchBar = ({ searchPokemon }) => {
  const [pokemon, setPokemon] = useState("");
  return (
    <form className={s.search} onSubmit = {(e) => {
      e.preventDefault();
      searchPokemon(pokemon)
      setPokemon('')
    }}>
      <input
        className={s.text}
        type="text"
        placeholder="Pokémon..."
        value={pokemon}
        onChange={e => setPokemon(e.target.value)}
      />
      <input className={s.boton} type="submit" value="Buscar" />
    </form>
  );
};
export default SearchBar;
