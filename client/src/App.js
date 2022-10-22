import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon"
import Pokemons from "./components/Pokemons/Pokemons";

function App() {
  return (
    <div>
      <Route exact path={"/"} render={() => <LandingPage />} />
      <Route path={"/home"} render={() => <NavBar />} />
      <Route path={"/home/pokemons"} render={() => <Pokemons />} />
      <Route path={"/home/create"} render={() => <CreatePokemon />} />
    </div>
  );
}

export default App;
