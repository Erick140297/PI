import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon"
import Pokemons from "./components/Pokemons/Pokemons";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";

function App() {
  return (
    <div>
      <Route exact path={"/"} render={() => <LandingPage />} />
      <Route path={"/home"} render={() => <NavBar />} />
      <Route exact path={"/home/pokemons"} render={() => <Pokemons />} />
      <Route exact path={"/home/pokemons/:id"} component = {PokemonDetail} />
      <Route exact path={"/home/create"} render={() => <CreatePokemon />} />
    </div>
  );
}

export default App;
