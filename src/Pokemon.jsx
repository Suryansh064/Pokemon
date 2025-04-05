import { useState, useEffect } from "react";
import { PokemonCard } from "./PokemonCard";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=650";

  const fetchPokemon = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();

      const detailPokemonData = data.results.map(async (pokemondata) => {
        const res = await fetch(pokemondata.url);
        const detailData = await res.json();
        return detailData;
      });

      const pokemonDetails = await Promise.all(detailPokemonData);
      setPokemon(pokemonDetails);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <h1>Loading......</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <section className="container">
        <header>
          <h1>Let's Catch Pokemon</h1>
        </header>

        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <ul className="cards">
            {searchData.length === 0 ? (
              <p className="pookie">No Pokémon found. </p>
            ) : (
              searchData.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokeMon={pokemon}
                />
              ))
            )}
          </ul>
        </div>
      </section>
    </>
  );
};
