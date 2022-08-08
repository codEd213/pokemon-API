import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ width: "200px", margin: "auto" }}>
      <h1>Using Pokemon API</h1>
      <ul>
        {pokemon.map((pokemonObj, index) => (
          <li key={index}>{pokemonObj.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
