import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon"
import Pokemons from "./components/Pokemons/Pokemons";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import PokemonName from "./components/PokemonName/PokemonName";
import PostImage from "./components/PostImage/PostImage";
import Exito from "./components/Exito/Exito";

function App() {
  return (
    <div>
      <Route exact path={"/"} render={() => <LandingPage />} />
      <Route path={"/home"} render={() => <NavBar />} />
      <Route exact path={"/home/pokemons"} render={() => <Pokemons />} />
      <Route exact path={"/home/pokemons/:id"} component = {PokemonDetail} />
      <Route exact path={"/home/create"} render={() => <CreatePokemon />} />
      <Route exact path={"/home/name/:name"} render={() => <PokemonName />} />
      <Route exact path={"/home/create/img"} render={() => <PostImage />} />
      <Route exact path={"/home/create/exito"} render={() => <Exito />} />
    </div>
  );
}

export default App;
