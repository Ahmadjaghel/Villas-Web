import styles from "./Properties.module.css";
export const Card = ({ item }) => {
  const {
    img,
    title,
    number,
    bedrooms,
    area,
    parking,
    bathrooms,
    floor,
    street,
  } = item;

  return (
    <div className={styles.card}>
      <img src={img} />
      <div className={styles.descripcard}>
        <div className={styles.cardtitle}>{title}</div>
        <div className={styles.salury}>{number}</div>
      </div>
      <p className={styles.street}>{street} </p>
      <div className={styles.areas}>
        <div className={styles.left}>
          <p>
            Bedrooms:{""}
            <span>{bedrooms}</span>
          </p>
          <p>
            Area:{""}
            <span>{area}</span>
          </p>
          <p>
            Parking:{""}
            <span>{parking}</span>
          </p>
        </div>
        <div className={styles.right}>
          <p>
            Bathrooms:{""}
            <span>{bathrooms}</span>
          </p>
          <p>
            Floor:{""}
            <span>{floor}</span>
          </p>
        </div>
      </div>
      <button>Schedule a visit</button>
    </div>
  );
};
