export const PokemonCard = ({ pokeMon }) => {
  return (
    <>
      <li className="pokemon-card">
        <figure>
          <img
            src={pokeMon.sprites.other.dream_world.front_default}
            alt={pokeMon.name}
            className="pokemon-image"
          />
        </figure>

        <div>
          <h2 className="pokemon-name">{pokeMon.name}</h2>

          <div className="grid-three-cols">
            <p className="pokemon-info">
              <span>Height: {pokeMon.height}</span>
            </p>
            <p className="pokemon-info">
              <span>Weight: {pokeMon.weight}</span>
            </p>
            <p className="pokemon-info">
              <span>Speed: {pokeMon.stats[5].base_stat}</span>
            </p>
          </div>

          <div className="grid-three-cols">
            <p className="pokemon-info">
              <span>Experience: {pokeMon.base_experience}</span>
            </p>
            <p className="pokemon-info">
              <span>Attack: {pokeMon.stats[1].base_stat}</span>
            </p>
            <p className="pokemon-info">
              <span>
                Abilities:{" "}
                {pokeMon.abilities
                  .map((abilityInfo) => abilityInfo.ability.name)
                  .slice(0, 1)
                  .join(", ")}
              </span>
            </p>
          </div>

          <div className="pokemon-info pokemon-highlight">
            <p>
              {pokeMon.types
                .map((curType) => curType.type.name)
                .join(", ")}
            </p>
          </div>
        </div>
      </li>
    </>
  );
};
