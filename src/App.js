import React from "react";
import "./App.css";
import PokemonCard from "./PokemonCard";

function App() {
  // useEffect -> api pokemon -> [{ name: "bulbasaur"}, { name: "ivysaur"}]
  return (
    <div>
      {/* pokemons.map =>  <PokemonCard nameOfPokemon={pokemon.name} />*/}
      <PokemonCard nameOfPokemon="jigglypuff" />
      <PokemonCard nameOfPokemon="diglett" />
      <PokemonCard nameOfPokemon="drowzee" />
    </div>
  );
}

export default App;
