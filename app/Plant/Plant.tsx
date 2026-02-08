import React from "react";

type PlantProps = {
  title: string; 
  text: string; 
  img: string; 
};

const Plant = ({ title, text, img }: PlantProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2>{title}</h2>
      
      {img && (
        <div 
          className="w-full h-60 bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(/assets/img${img})` }}
        />
      )}
      
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default Plant;
