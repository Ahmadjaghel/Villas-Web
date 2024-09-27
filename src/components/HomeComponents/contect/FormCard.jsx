import React from "react";
import styles from "./ContectUs.module.css";
const FormCard = () => {
  return (
    <div className={styles.form}>
      <form>
        <label htmlFor="name">Full Name</label>
        <input type="text" placeholder="Your Name..." />
        <label htmlFor="name">Email Adress</label>
        <input type="text" placeholder="Your Email..." />
        <label htmlFor="name">Subject</label>
        <input type="text" placeholder="Subject..." />
        <label htmlFor="name">Message</label>
        <textarea type="text" placeholder="Your Message..." />
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default FormCard;
