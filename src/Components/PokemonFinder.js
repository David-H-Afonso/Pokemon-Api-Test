import React, { useState } from "react";
import { colorPokemonType } from "../utils/utils";
import "./PokemonFinder.css";
import axios from "axios";

export const PokemonFinder = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);

  const fetchPokeapiJSON = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonData(toArray);
      const values = {
        name: res.data.name,
        id: res.data.id,
      };
      return values;
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pokemon.trim()) {
      return;
    }
    fetchPokeapiJSON();
    setPokemon("");
  };

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  return (
    <center>
      <div className={`pfContainer`}>
        <form onSubmit={handleSubmit} className={`pfForm`}>
          <label className="pfLabel">
            Find your{" "}
            <span className="font-family-pokemon" style={{ color: "#222" }}>
              Pokemon
            </span>
            !
          </label>
          <input
            className="pfInput"
            type="text"
            value={pokemon}
            onChange={handleChange}
            placeholder="Enter Pokemon name"
          ></input>

          {pokemonData.map((data) => {
            const name = data.name;
            const height = data.height;
            const weight = data.weight;
            const type1 = data.types[0].type.name;
            let pfPokemonInfoContainerColor = colorPokemonType(type1);
            let type2 = null;
            if (data.types.length > 1) {
              type2 = data.types[1].type.name;
            }
            return (
              <div
                key={data.id}
                className={`pfPokemonInfoContainer`}
                style={{
                  backgroundColor: pfPokemonInfoContainerColor,
                  borderRadius: "10px",
                }}
              >
                <div className="pfPokemonInfo">
                  <div>
                    <img src={data.sprites["front_default"]} alt={data.name} />
                  </div>
                  <p>
                    <strong>Name</strong>:{" "}
                    <span style={{ textTransform: "capitalize" }}>{name}</span>
                  </p>
                  <p>
                    <strong>Type</strong>:{" "}
                    <span style={{ textTransform: "capitalize" }}>
                      {type1} {type2 ? `/ ${type2}` : null}
                    </span>
                  </p>
                  <p>
                    <strong>Height</strong>: {height / 10} m /{" "}
                    {((height / 10) * 3.28084).toFixed(2)} feet
                  </p>
                  <p>
                    <strong>Weight</strong>: {weight / 10} kg /{" "}
                    {((weight / 10) * 2.20462).toFixed()} lbs
                  </p>
                </div>
              </div>
            );
          })}
        </form>
      </div>
    </center>
  );
};
