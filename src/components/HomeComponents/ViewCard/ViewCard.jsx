import React from "react";
import styles from "./ViewCard.module.css";
function ViewCard(props) {
  return (
    <div className={styles.viewcard}>
      <p className={styles.number}>{props.number}</p>
      <p className={styles.string}>{props.string}</p>
    </div>
  );
}

export default ViewCard;
