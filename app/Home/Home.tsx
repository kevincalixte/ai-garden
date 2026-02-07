import React from "react";
import Card from "../Card/Card";

const Home = () => {
  return (
    <>
     <Card type="meteo" title="Weather" text="25°C - Sunny" />
      
     <div className="flex flex-wrap justify-between">
      <Card type="plant" title="Fern" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/background/ad-1.png" />
      <Card type="plant" title="Fern" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/background/ad-1.png" />
      <Card type="plant" title="Fern" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/background/ad-1.png" />
      <Card type="plant" title="Fern" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/background/ad-1.png" />
      <Card type="plant" title="Fern" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/background/ad-1.png" />
      <Card type="plant" title="Fern" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/background/ad-1.png" />
      <Card type="plant" title="Fern" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/background/ad-1.png" />
      <Card type="plant" title="Fern" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/background/ad-1.png" />
      <Card type="plant" title="Fern" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/background/ad-1.png" />
     </div>

     <div className="flex flex-wrap justify-between">
      <Card type="tip" title="How to water your plant?" />
      <Card type="tip" title="Best light for succulents" />
      <Card type="tip" title="When to repot a plant" />
      <Card type="tip" title="How to prune leaves" />
      <Card type="tip" title="Fertilizing tips" />
      <Card type="tip" title="Dealing with pests" />
     </div>

     <div className="flex flex-wrap justify-between">
      <Card type="suggestion" title="Discover - Japanese maple"/>
      <Card type="suggestion" title="Discover - Japanese maple"/>
      <Card type="suggestion" title="Discover - Japanese maple"/>
     </div>

     <div className="flex flex-wrap justify-between">
      <Card type="room" title="#bugs problems" text="4 people in" />
      <Card type="room" title="#can someone help me?" text="1 people in"/>
      <Card type="room" title="#hi everyone! " text="53 people in" />
     </div>

    </>
  );
};

export default Home;
