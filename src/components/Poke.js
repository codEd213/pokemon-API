import React, { useState, useEffect } from "react";

const Poke = (props) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setState(response.results);
      });
  });
  return (
    <div className="App" style={{ width: "200px", margin: "auto" }}>
      {state.map((poke, index) => {
        return <l1 key={index}>{poke.name}</l1>;
      })}
    </div>
  );
};

export default Poke;
