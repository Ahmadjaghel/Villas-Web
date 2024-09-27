import React from "react";
import styles from "./PageHeading.module.css";
import pagehead from "/images/page-heading-bg.jpg";
const PageHeading = ({ head, title }) => {
  return (
    <div className={styles.pageHeading}>
      <div className={styles.PropCont}>
        <img src={pagehead} />
      </div>
      <div className={styles.content}>
        <p>{head}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default PageHeading;
