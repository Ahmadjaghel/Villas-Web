import { Card } from "./Card";
import styles from "./Properties.module.css";
import { arry1 } from "../../../utils";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useState } from "react";
const Properties = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(arry1);
  const filter = (title) => {
    if (title == "showAll") {
      setData(arry1);
    } else {
      const filterItems = arry.filter((item) => title === item.title);
      setData(filterItems);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>
          <SectionTitle title="PROPERTIES" />
          <h1>We Provide The Best Property You Like</h1>
        </div>
      </div>

      <div className={styles.grid}>
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
export default Properties;
