import React from "react";
import ModelSlider from "../../components/ModelSlider";
import FeaturedAiModels from "../../components/FeaturedAiModels";
import AboutAiModels from "../../components/AboutAiModels";
import GetStarted from "../../components/GetStarted";

const Home = () => {
  return (
    <div>
      <ModelSlider></ModelSlider>
      <div className="my-10">
        <FeaturedAiModels></FeaturedAiModels>
        <AboutAiModels></AboutAiModels>
        <GetStarted></GetStarted>
      </div>
    </div>
  );
};

export default Home;
