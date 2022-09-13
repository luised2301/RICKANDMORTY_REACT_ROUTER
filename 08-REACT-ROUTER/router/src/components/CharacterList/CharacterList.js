import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "./CharacterList.module.scss";
import { useState, useEffect } from "react";
const CharacterList = () => {
  const [characters, setCharacter] = useState();
  const [error, setError] = useState(false);

  const fetchData = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setCharacter(data.results);
        console.log("data:", data);
        console.log("characters:", characters);
      })

      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, {});

  return !characters ? (
    <div>{error}</div>
  ) : (
    <div id="listContainer" className={styles.characterList}>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          picture={character.image}
          status={character.status}
          species={character.species}
          lastseen={character.location.name}
          firstseen={character.origin.name}
        />
      ))}
    </div>
  );
};

export default CharacterList;
