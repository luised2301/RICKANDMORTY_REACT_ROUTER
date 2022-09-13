import React from "react";
import GenericCard from "../GenericCard/GenericCard";
import styles from "./LocationList.module.scss";
import { useState, useEffect } from "react";
const LocationList = () => {
  const [locations, setLocation] = useState();
  const [error, setError] = useState(false);

  const fetchData = () => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setLocation(data.results);
        console.log("data:", data.results[0].created);
      })

      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, {});

  return !locations ? (
    <div>{error}</div>
  ) : (
    <div id="listContainer" className={styles.locationList}>
      {locations.map((location) => (
        <GenericCard
          key={location.name}
          name={location.name}
          //picture="{episode.image}"
          status={location.type}
          species="   "
          created={location.created}
          location={location.dimension}
          season="       "
          episode="      "
        />
      ))}
    </div>
  );
};

export default LocationList;
