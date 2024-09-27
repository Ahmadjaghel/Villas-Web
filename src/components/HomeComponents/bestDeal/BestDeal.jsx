// import "./BestDeal.css";
import styles from "./BestDeal.module.css";
import Schedule from "../NavBar/Schedule/Schedule";
import SectionTitle from "../SectionTitle/SectionTitle";
import deal1 from "/images/deal-01.jpg";
import deal2 from "/images/deal-02.jpg";
import deal3 from "/images/deal-03.jpg";
import { useState } from "react";
const BestDeal = () => {
  const content = [
    {
      id: "1",
      space: "185",
      floorNumber: "26",
      roomNumber: "4 ",
      parking: "Yes",
      payment: "Bank",
      img: deal1,
    },
    {
      id: "2",
      space: "250",
      floorNumber: "26",
      roomNumber: "5 ",
      parking: "Yes",
      payment: "Bank",
      img: deal2,
    },
    {
      id: "3",
      space: "320",
      floorNumber: "34",
      roomNumber: "6",
      parking: "Yes",
      payment: "Bank",
      img: deal3,
    },
  ];
  const [cont, setCont] = useState(content[0]);

  return (
    <div className={styles.bestDeal}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <SectionTitle title="BEST DEAL" />
            <h1>Find Your Best Deal Right Now!</h1>
          </div>
          <div>
            <button
              style={{
                backgroundColor: cont.id == "1" ? "orangered" : "black",
              }}
              className={styles.btn}
              onClick={() => setCont(content[0])}
            >
              Appartment
            </button>
            <button
              style={{
                backgroundColor: cont.id == "2" ? "orangered" : "black",
              }}
              className={styles.btn}
              onClick={() => setCont(content[1])}
            >
              Villa House
            </button>
            <button
              style={{
                backgroundColor: cont.id == "3" ? "orangered" : "black",
              }}
              className={styles.btn}
              onClick={() => setCont(content[2])}
            >
              penthouse
            </button>
          </div>
        </div>
        <div className={styles.midlle}>
          <div className={styles.card}>
            <div>
              <p>Total Flat Space:</p>
              <span>{cont.space} m2</span>
            </div>
            <div>
              <p>Floor number:</p>
              <span>{cont.floorNumber}th</span>
            </div>
            <div>
              <p>Number of rooms:</p>
              <span>{cont.roomNumber}</span>
            </div>
            <div>
              <p>Parking available:</p>
              <span>{cont.parking}</span>
            </div>
            <div>
              <p>Payment process:</p>
              <span>{cont.payment}</span>
            </div>
          </div>
          <div className={styles.imgs}>
            <img src={cont.img} alt="deal..." />
          </div>
          <div className={styles.description}>
            <h4>Extra Info About Property</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              numquam, voluptates est laboriosam provident reiciendis mollitia
              placeat illo deleniti eius molestias error vel maiores corrupti.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              numquam, voluptates est laboriosam provident reiciendis mollitia
              placeat illo deleniti eius molestias error vel maiores corrupti.
            </p>
            <div>
              <div>
                <Schedule />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
