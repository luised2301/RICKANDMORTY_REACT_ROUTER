import React from "react";
import styles from "./CardInfo.module.scss";

const CardInfo = (info) => {
  const infoAnchore = info.anchore;
  const infoTitle = info.title;

  return (
    <div className={styles.cardInfo}>
      <div>
        <p>{infoTitle}</p>
      </div>
      <div>
        <a href={infoAnchore}>{infoAnchore}</a>
      </div>
    </div>
  );
};

export default CardInfo;
