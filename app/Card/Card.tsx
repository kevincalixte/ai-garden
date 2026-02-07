import React from "react";

type CardProps = {
  type?: "meteo" | "plant" | "tip" | "suggestion" | "room";
  title?: string;
  text?: string;
  img?: string;
};

const Card = ({ type = "plant", title, text, img }: CardProps) => {
  const cardStyles = {
    meteo: {
      style: "h-20 md:w-[32%] md:h-25 lg:w-[24%] lg:h-30 bg-gradient-to-l from-blue-400 to-blue-800",
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
  };

  const currentStyle = cardStyles[type];
  const baseStyle= img ? "bg-gray-100 bg-cover bg-no-repeat w-full" : "";

  return (
    <div
      className={`
        ${baseStyle} rounded-xl text-white mt-4 hover:scale-101 cursor-pointer ${currentStyle.style}`}
      style={img ? { backgroundImage: `url(/assets/img${img})` } : undefined}
    >
      <div className="flex flex-col justify-center p-3 drop-shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
        {title && <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>}
        {text && <p className="text-sm line-clamp-3">{text}</p>}
      </div>
    </div>
  );
};

export default Card;
