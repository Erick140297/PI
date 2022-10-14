import React from "react";
import s from './styles/SearchBar.module.css'

const SearchBar = () => {
  return (
    <form className={s.search} action="">
      <input className={s.text} type="text" placeholder="Pokémon..." />
      <input className={s.boton} type="submit" value='Buscar'/>
    </form>
  );
};
export default SearchBar;
