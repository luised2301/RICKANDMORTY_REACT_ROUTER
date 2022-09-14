import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardTitle from "../CardTitle/CardTitle";
import CardInfo from "../CardInfo/CardInfo";
import styles from "../CharacterCard/CharacterCard.module.scss";

const CharacterDetail = () => {
  const [character, setCharacter] = useState();
  const [error, setError] = useState(false);
  const params = useParams();
  const url = `https://rickandmortyapi.com/api/character/${params.characterId}`;

  const fetchData = () => {
    fetch(url)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setCharacter(data);
        console.log("data:", data);
        console.log("characters:", character);
      })

      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    fetchData(url);
  }, {});

  return !character ? (
    <div>{error}</div>
  ) : (
    <div className={styles.characterCard}>
      <div className="pictureContainer">
        <img className={styles.picture} src={character.image}></img>
      </div>
      <div id="infoContainer">
        <CardTitle
          name={character.name}
          status={character.status}
          species={character.species}
          id={character.id}
        />
        <CardInfo
          title="last known location:"
          anchore={character.location.name}
        />
        <CardInfo title="First seen in:" anchore={character.origin.name} />
      </div>
    </div>
  );
};
export default CharacterDetail;

// {styles.characterList}
