import React from "react";
import Card from "../Card/Card";

type PlantsProps = {
  setActive?: (value: string) => void; 
};

const Plants = ({ setActive }: PlantsProps) => {
  return (
    <>
      <h2>My Plants</h2>
      <div className="flex flex-wrap justify-start gap-3">
      <Card type="plant" title="Japanese Maple" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/plants/japanese-maple.png" menu="plant" setActive={setActive} />
      <Card type="plant" title="Japanese Maple" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/plants/japanese-maple.png" menu="plant" setActive={setActive}/>
      <Card type="plant" title="Fern" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/background/ad-1.png" menu="plant" setActive={setActive}/>
      <Card type="plant" title="Fern" text="Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum" img="/background/ad-1.png" menu="plant" setActive={setActive}/>
      </div>
    </>
  );
};

// Exemple pour back end

// import { useEffect, useState } from "react";

// const [plants, setPlants] = useState([]);

// useEffect(() => {
//   fetch("/data/plants.json")
//     .then(res => res.json())
//     .then(data => setPlants(data));
// }, []);

// plants.map(plant => <Card {...plant} setActive={setActive} />)
export default Plants;
