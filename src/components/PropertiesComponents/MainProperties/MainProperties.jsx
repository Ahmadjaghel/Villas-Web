import React, { useState } from "react";
import styles from "./MainProperties.module.css";
import { Card } from "./Card";
import { arry2 } from "../../../utils";

const MainProperties = () => {
  const [count, setCount] = useState("1");
  const [data, setData] = useState(arry2);
  const filter = (title) => {
    if (title == "showAll") {
      setData(arry2);
    } else {
      const filterItems = arry2.filter((item) => title === item.title);
      setData(filterItems);
    }
    // console.log(event.target.id);
    setCount(event.target.id);
  };
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button
          id="1"
          style={{
            backgroundColor: count == "1" ? "orangered" : "black",
          }}
          className={styles.btn}
          onClick={() => filter("showAll")}
        >
          Show All
        </button>
        <button
          id="2"
          style={{
            backgroundColor: count == "2" ? "orangered" : "black",
          }}
          className={styles.btn}
          onClick={() => filter("Apartment")}
        >
          Apartment
        </button>
        <button
          id="3"
          style={{
            backgroundColor: count == "3" ? "orangered" : "black",
          }}
          className={styles.btn}
          onClick={() => filter("Luxury Villa")}
        >
          Villa House
        </button>
        <button
          id="4"
          style={{
            backgroundColor: count == "4" ? "orangered" : "black",
          }}
          className={styles.btn}
          onClick={() => filter("Penthouse")}
        >
          Penthouse
        </button>
      </div>
      <div className={styles.grid}>
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <div className={styles.numbers}>
        <div className={styles.number}>1</div>
        <div className={(styles.number, styles.active)}>2</div>
        <div className={styles.number}>3</div>
        <div className={styles.number}>&gt;&gt;</div>
      </div>
    </div>
  );
};

export default MainProperties;
