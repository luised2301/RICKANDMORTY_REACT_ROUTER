import React from "react";
import styles from "./CharacterCard.module.scss";
import CardTitle from "../CardTitle/CardTitle";
import CardInfo from "../CardInfo/CardInfo";

const CharacterCard = (character) => {
  const characterName = character.name;
  const characterPicture = character.picture;
  const characterStatus = character.status;
  const characterSpecies = character.species;
  const characterLastKnownLocation = character.lastseen;
  const characterFirstSeenIn = character.firstseen;
  return (
    <div className={styles.characterCard}>
      <div className="pictureContainer">
        <img className={styles.picture} src={characterPicture}></img>
      </div>
      <div id="infoContainer">
        <CardTitle
          name={characterName}
          status={characterStatus}
          species={characterSpecies}
        />
        <CardInfo
          title="last known location:"
          anchore={characterLastKnownLocation}
        />
        <CardInfo title="First seen in:" anchore={characterFirstSeenIn} />
      </div>
    </div>
  );
};

export default CharacterCard;
