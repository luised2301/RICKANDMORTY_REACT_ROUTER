import React from "react";
import styles from "./GenericCard.module.scss";
import CardTitle from "../CardTitle/CardTitle";
import CardInfo from "../CardInfo/CardInfo";

const GenericCard = (character) => {
  const characterName = character.name;
  const characterStatus = character.status;
  const characterSpecies = character.species;
  const created = character.created.slice(0, 10);
  const season = character.episode.slice(1, 3);

  return (
    <div className={styles.genericCard}>
      <div id="infoContainer">
        <CardTitle
          name={characterName}
          status={characterStatus}
          species={characterSpecies}
        />
        <CardInfo title="Created:" anchore={created} />
        <CardInfo title="Season:" anchore={season} />
      </div>
    </div>
  );
};

export default GenericCard;
