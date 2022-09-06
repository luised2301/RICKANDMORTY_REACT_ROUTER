import React from "react";
import characters from "../../data/Characters";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "./CharacterList.module.scss";

const CharacterList = () => {
  return (
    <div id="listContainer" className={styles.characterList}>
      {characters.map((character) => (
        <CharacterCard
          key={character}
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
