import React from "react";
import { BsSunFill } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";
import { usePlant } from "../context/PlantContext";

type CardProps = {
  type?: "meteo" | "plant" | "tip" | "suggestion" | "room" | "default";
  title?: string;
  text?: string;
  img?: string;
  tip?: string;
  menu?: string;
  onRemove?: () => void;
  setActive?: (value: string) => void;
};

const Card = ({
  type = "default",
  title,
  text,
  img,
  tip,
  menu,
  onRemove,
  setActive,
}: CardProps) => {

  const { setPlantData } = usePlant();
  const cardStyles = {
    meteo: {
      style:
        "h-20 w- md:w-[32%] md:h-25 lg:w-[24%] lg:h-30 bg-gradient-to-l from-blue-400 to-blue-800",
    },
    plant: {
      style: "h-30 md:w-[32%] md:h-50 lg:w-[24%] lg:h-60",
    },
    tip: {
      style: "max-h-25 w-[48%] md:w-[23%] lg:w-[15%] bg-[#074703]/90",
    },
    suggestion: {
      style: "h-13 w-full bg-[#FF9800]",
    },
    room: {
      style: "h-20 bg-black/80",
    },

    // <Card type="default" title="x" text="x" img="x"/>
    default: {
      style: "h-20 bg-gray/200",
    },
  };

  const currentStyle = cardStyles[type];
  const baseStyle = img ? "bg-gray-100 bg-cover bg-no-repeat w-full" : "";

  return (
    <div
      className={`
        ${baseStyle} ${type === "meteo" ? "flex items-center justify-around" : "p-3"} relative
        rounded-xl text-white mt-4 hover:scale-101 cursor-pointer ${currentStyle.style}`}
      style={img ? { backgroundImage: `url(/assets/img${img})` } : undefined}
      onClick={() => {
        if (type === "plant" && setActive) {
          setPlantData({
            title: title ?? "Unknown plant",
            text: text ?? "",
            img: img ?? "",
          });
          setActive("plant");
        }
      }}
    >
      <div className="flex flex-col justify-center  drop-shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
        {title && (
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        )}
        <span className="flex items-center gap-1">
          {text && <p className="text-sm line-clamp-3">{text}</p>}
          {type === "meteo" && <BsSunFill className="text-yellow-500" />}
        </span>
      </div>
      {type === "meteo" && (
        <span className="text-sm text-center w-1/2">{tip}</span>
      )}
      {type === "plant" && menu === "plant" && (
        <CiCircleRemove
          className="absolute top-0 right-0 text-2xl m-1 cursor-pointer hover:text-red-500"
          onClick={onRemove}
        />
      )}
    </div>
  );
};
export default Card;
