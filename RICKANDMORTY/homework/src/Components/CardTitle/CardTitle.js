import React from "react";
import styles from "./CardTitle.module.scss";

const CardTitle = (character) => {
  const characterName = character.name;
  const characterStatus = character.status;
  const characterSpecies = character.species;

  return (
    <div>
      <div className={styles.CardTitle}>
        <h1>{characterName}</h1>
      </div>
      <div id="status">
        <div class={characterStatus}></div>
        <h3>{characterStatus + "-" + characterSpecies}</h3>
      </div>
    </div>
  );
};

export default CardTitle;
