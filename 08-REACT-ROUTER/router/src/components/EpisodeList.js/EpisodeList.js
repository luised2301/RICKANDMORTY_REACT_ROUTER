import React from "react";
import GenericCard from "../GenericCard/GenericCard";
import styles from "./EpisodeList.module.scss";
import { useState, useEffect } from "react";
const EpisodeList = () => {
  const [episodes, setEpisode] = useState();
  const [error, setError] = useState(false);

  const fetchData = () => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setEpisode(data.results);
        console.log("data:", data.results[0]);
      })

      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, {});

  return !episodes ? (
    <div>{error}</div>
  ) : (
    <div id="listContainer" className={styles.episodeList}>
      {episodes.map((episode) => (
        <GenericCard
          key={episode}
          name={episode.name}
          //picture="{episode.image}"
          status={episode.air_date}
          species=""
          created={episode.created}
          episode={episode.episode}
        />
      ))}
    </div>
  );
};

export default EpisodeList;
