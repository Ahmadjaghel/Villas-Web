import { useState } from "react";
import styles from "./Slider.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import banner1 from "/images/banner-01.jpg";
import banner2 from "/images/banner-02.jpg";
import banner3 from "/images/banner-03.jpg";
function Slider() {
  const [count, setCount] = useState(0);
  let current = count;
  function moveSlider(dircition) {
    if (dircition == "next") {
      if (current == images.length - 1) current = 0;
      else current++;
    }
    if (dircition == "prev") {
      if (current == 0) current = images.length;
      else current--;
    }
    const slide = document.querySelector(".slider-container");
    let move = -current * 100;
    slide.style.transform = `translateX(${move}%)`;
    setCount(current);
  }
  const changeImg = (ind) => {
    setCount(ind);
    current = ind;
    const slide = document.querySelector(".slider-container");
    let move = -current * 100;
    slide.style.transform = `translateX(${move}%)`;
  };
  const images = [banner1, banner2, banner3];
  return (
    <div className={styles.slider}>
      <div className={`${styles.slidercontainer} slider-container`}>
        {images.map((ele, ind) => (
          <img src={ele} key={ind} />
        ))}
      </div>
      <div className={styles.contentslider}>
        <p>
          Toronto,<span>Canada</span>
        </p>
        <p>HURRY! GET THE BEST VILLA FOR YOU</p>
      </div>
      <div className={styles.arrow}>
        <div onClick={() => moveSlider("prev")}>
          <IoIosArrowBack size={30} />
        </div>
        <div onClick={() => moveSlider("next")}>
          <IoIosArrowForward size={30} />
        </div>
      </div>
      <div className={styles.buts}>
        {images.map((ele, ind) => (
          <button
            key={ind}
            className={count == ind ? styles.butact : styles.but}
            onClick={() => changeImg(ind)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
