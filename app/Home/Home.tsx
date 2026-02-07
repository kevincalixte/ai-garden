import React from "react";
import Card from "../Card/Card";

const Home = () => {
  return (
    <>
     <Card type="meteo" title="Weather" text="25°C" tip="Time to plant some tomatoes! (April-May)"/>
      
     <h2>Suggestions</h2>
     <div className="flex flex-wrap justify-start gap-3">
      <Card type="plant" title="Round Tomato" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/plants/tomate-ronde.png" />
      <Card type="plant" title="Japanese Maple" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/plants/japanese-maple.png" />
     </div>

     <h2>Tips</h2>
     <div className="flex flex-wrap justify-start gap-3">
      <Card type="tip" title="How to water your plant?" />
      <Card type="tip" title="Best light for succulents" />
      <Card type="tip" title="When to repot a plant" />
      <Card type="tip" title="How to prune leaves" />
      <Card type="tip" title="Fertilizing tips" />
      <Card type="tip" title="Dealing with pests" />
     </div>
    </>
  );
};

export default Home;
