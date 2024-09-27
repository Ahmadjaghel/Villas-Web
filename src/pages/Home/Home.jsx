import React from "react";
import Slider from "../../components/HomeComponents/Slider/Slider";
import Featured from "../../components/HomeComponents/Featured/Featured";
import VideoView from "../../components/HomeComponents/VideoView/VideoView";
import ContectUs from "../../components/HomeComponents/Contect/ContectUs";
import BestDeal from "../../components/HomeComponents/bestDeal/BestDeal";
import Properties from "../../components/HomeComponents/properties/Properties";
const Home = () => {
  return (
    <div className="container">
      <Slider />
      <Featured />
      <VideoView />
      <BestDeal />
      <Properties />
      <ContectUs />
    </div>
  );
};

export default Home;
