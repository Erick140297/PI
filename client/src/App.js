import React, {useState} from "react";
import s from "./App.module.css";
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards";

function App() {
  
  const [pokemons, setPokemons] = useState([])

  function searchPokemon(name){
    fetch(`http://localhost:3001/pokemons?name=${name}`)
      .then(response => response.json())
      .then(data =>{
        setPokemons(data)
      })
  }

  function getPokemons(){
    fetch(`http://localhost:3001/pokemons`)
      .then(response => response.json())
      .then(data =>{
        setPokemons(data)
      })
  }

  // getPokemons()

  return (
    <div className={s.App}>
      <LandingPage toHome={getPokemons} />
      <Nav searchPokemon = {searchPokemon} getPokemons = {getPokemons}/>
      <Cards pokemons={pokemons}/>
    </div>
  );
}

export default App;
