import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
      <form>
        <input
          type="text"
          placeholder="Buscar..."
          value={name}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={(e) => handleClick(e)}>BUSCAR</button>
      </form>
    </div>
  );
};

export default SearchBar;
