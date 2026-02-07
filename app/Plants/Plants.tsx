import React from "react";
import Card from "../Card/Card";

const Plants = () => {
  return (
    <>
      <h2>My Plants</h2>
      <div className="flex flex-wrap justify-start gap-3">
      <Card type="plant" title="Japanese Maple" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/plants/japanese-maple.png" menu="plant" />
      <Card type="plant" title="Japanese Maple" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/plants/japanese-maple.png" menu="plant"/>
      <Card type="plant" title="Fern" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/background/ad-1.png" menu="plant"/>
      <Card type="plant" title="Fern" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/background/ad-1.png" menu="plant"/>
      </div>
    </>
  );
};

export default Plants;
