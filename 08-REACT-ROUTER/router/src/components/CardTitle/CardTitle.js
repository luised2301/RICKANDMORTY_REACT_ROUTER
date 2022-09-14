import React from "react";
import styles from "./CardTitle.module.scss";
import { Link } from "react-router-dom";

const CardTitle = (character) => {
  const characterName = character.name;
  const characterStatus = character.status;
  const characterSpecies = character.species;
  const characterId = character.id;

  return (
    <div>
      <div className={styles.CardTitle}>
        <Link to={`/character/${characterId}`}>{characterName}</Link>
      </div>
      <div id="status">
        <div className={characterStatus}></div>
        <h3>{characterStatus + "  " + characterSpecies}</h3>
      </div>
    </div>
  );
};

export default CardTitle;
