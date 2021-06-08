import React, { useEffect, useState } from "react";
import "./App.css";
import PokemonCard from "./PokemonCard";

function App() {
  const [pokenames, setPokenames] = useState(null);
  // useEffect -> api pokemon -> [{ name: "bulbasaur"}, { name: "ivysaur"}]

  useEffect(() => {
    console.log("fetch names here");
  }, []);

  return (
    <div>
      {pokenames ? (
        <div>
          {/* pokemons.map =>  <PokemonCard nameOfPokemon={pokemon.name} />*/}
          <PokemonCard nameOfPokemon="jigglypuff" />
          <PokemonCard nameOfPokemon="diglett" />
          <PokemonCard nameOfPokemon="drowzee" />
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
}

export default App;
