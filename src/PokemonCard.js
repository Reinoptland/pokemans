import React, { useState, useEffect } from "react";

export default function PokemonCard() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    console.log("fetchnig??");
  }, []);

  return <div>POKEMON</div>;
}
