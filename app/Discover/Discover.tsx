import React from "react";
import Card from "../Card/Card";

const Discover = () => {
  return (
    <div>
      <h2>Discover</h2>
      <div className="flex flex-wrap justify-start gap-3">
        <Card type="suggestion" title="Japanese maple" />
        <Card type="suggestion" title="Japanese maple" />
        <Card type="suggestion" title="Japanese maple" />
      </div>
    </div>
  );
};

export default Discover;
