import axios from "axios";
import React, { useState, useEffect } from "react";

export default function PokemonCard() {
  const [pokemon, setPokemon] = useState(null);

  console.log("STATE IN CARD:", pokemon);

  useEffect(() => {
    console.log("fetchnig??");
    async function fetchPokemon() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/jigglypuff"
      );
      //   console.log(response.data); // error?
      setPokemon(response.data);
    }

    fetchPokemon();
  }, []);

  return <div>POKEMON</div>;
}
