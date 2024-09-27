import React from "react";
import styles from "./VideoView.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import ViewCard from "../ViewCard/ViewCard";
import banner from "/images/banner-03.jpg";
import frame from "/images/video-frame.jpg";
function VideoView() {
  return (
    <div className={styles.view}>
      <img className={styles.backimg} src={banner} />
      <div className={styles.content}>
        <div className={styles.viewtitle}>
          <SectionTitle title="VIDEO VIEW" />
          <p>Get Closer View & Different Feeling</p>
        </div>
        <div>
          <img className={styles.videoFrame} src={frame} />
        </div>
        <div className={styles.viewcards}>
          <ViewCard number="34" string="Buildings Finished Now" />
          <ViewCard number="12" string="Year Experience" />
          <ViewCard number="24" string="Awwards Won 2023" />
        </div>
      </div>
    </div>
  );
}

export default VideoView;
