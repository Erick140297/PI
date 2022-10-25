import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import s from "./SearchBar.module.css";


const SearchBar = () => {
  const [name, setName] = useState("");
  let history = useHistory();


  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault()
    history.push(`/home/name/${name}`);
    setName("");
  };

  return (
    <div>
      <form className={s.search}>
        <input
          type="text"
          placeholder="Buscar..."
          value={name}
          onChange={(e) => handleChange(e)}
          className={s.text}
        />
        <button className={s.boton} onClick={(e) => handleClick(e)}>BUSCAR</button>
      </form>
    </div>
  );
};

export default SearchBar;
