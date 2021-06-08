import axios from "axios";
import React, { useState, useEffect } from "react";

export default function PokemonCard(props) {
  const [pokemon, setPokemon] = useState(null);

  console.log("WHAT ARE THE PROPS:", props);
  console.log("STATE IN CARD:", pokemon);

  useEffect(() => {
    console.log("fetchnig??");
    async function fetchPokemon() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${props.nameOfPokemon}`
      );
      //   console.log(response.data); // error?
      setPokemon(response.data);
    }

    fetchPokemon();
  }, []);

  return (
    <div>
      {pokemon ? (
        <div>
          <h1>{pokemon.name}</h1>
          <div>
            {pokemon.abilities.map((ability) => {
              console.log(ability); // { ability: { name: "stomp" }}
              return <p>{ability.ability.name}</p>;
            })}
          </div>
          <img src={pokemon.sprites.front_default} />
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
}
