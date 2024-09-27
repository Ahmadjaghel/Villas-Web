import React, { useState } from "react";
import styles from "./Featured.module.css";
import Card from "./Card/Card";
import SectionTitle from "../SectionTitle/SectionTitle";
import featured from "/images/featured.jpg";
import featuredIcon from "/images/featured-icon.png";
import info1 from "/images/info-icon-01.png";
import info2 from "/images/info-icon-02.png";
import info3 from "/images/info-icon-03.png";
import info4 from "/images/info-icon-04.png";
function Featured() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const Acoord1 = () => {
    setActive1(!active1);
    setActive2(false);
  };
  const Acoord2 = () => {
    setActive2(!active2);
    setActive1(false);
  };
  const data = [
    {
      img: info1,
      title: "250 m2",
      more: "Total Flat Space",
    },
    {
      img: info2,
      title: "Contract",
      more: "Contract Ready",
    },
    {
      img: info3,
      title: "Payment",
      more: "Payment",
      imgTitle: "Process",
    },
    {
      img: info4,
      title: "Safety",
      more: "24/7 Under",
      imgTitle: "Controle",
    },
  ];
  return (
    <div className={styles.featured}>
      <div className={styles.imgs}>
        <img src={featured} />
        <img src={featuredIcon} />
      </div>
      <div className={styles.feattext}>
        <SectionTitle title="Featured" />
        <h1>Best Appartment & Sea View</h1>
        <div className={styles.useful}>
          <p>Best useful links?</p>
          <div>
            <p>
              Get the best villa website template in HTML CSS and Bootstrap for
              your business.TemplateMoprovides you the{" "}
              <span>best free CSS templates</span> in the world.Please tell your
            </p>
            <div>
              <p className={styles.accord} onClick={Acoord1}>
                friends about it. How does this work?
              </p>

              {active1 == true ? (
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Autem eum laboriosam incidunt! Quos, dolores deleniti
                  perspiciatis perferendis ipsa molestiae est, autem quisquam
                  commodi nisi consequatur voluptatem rerum, quis adipisci
                  facere.
                </p>
              ) : null}
            </div>
          </div>
          <div>
            <p className={styles.accord} onClick={Acoord2}>
              Why is Vionlla Agency the best?
            </p>

            {active2 == true ? (
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
                eum laboriosam incidunt! Quos, dolores deleniti perspiciatis
                perferendis ipsa molestiae est, autem quisquam commodi nisi
                consequatur voluptatem rerum, quis adipisci facere.
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <div className={styles.infCard}>
        {data.map((ele, ind) => (
          <Card
            img={ele.img}
            title={ele.title}
            more={ele.more}
            imgTitle={ele?.imgTitle}
          />
        ))}
      </div>
    </div>
  );
}

export default Featured;
