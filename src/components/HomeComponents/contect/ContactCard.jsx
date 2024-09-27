import React from "react";
import styles from "./ContectUs.module.css";
function ContactCard({ img, title, des }) {
  return (
    <>
      <div className={styles.phone}>
        <img src={img} alt="" />
        <div className={styles.phonnumber}>
          <h3>{title}</h3>
          <p>{des}</p>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
