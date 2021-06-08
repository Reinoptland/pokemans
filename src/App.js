import React from "react";
import "./App.css";
import PokemonCard from "./PokemonCard";

function App() {
  return (
    <div>
      <PokemonCard nameOfPokemon="jigglypuff" />
      <PokemonCard nameOfPokemon="diglett" />
      <PokemonCard nameOfPokemon="drowzee" />
    </div>
  );
}

export default App;
