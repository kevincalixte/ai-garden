import React from "react";

type AdProps = {
  title: string;
  text: string;
  action: string;
  img?: string;
};
const Ad = ({ title, text, action, img }: AdProps) => {
  return (
    <div
      className={`bg-black/50 bg-blend-darken bg-cover bg-no-repeat flex justify-between items-center p-4 text-white rounded-lg mt-4`}
      style={{ backgroundImage: `url(/assets/img${img})` }}
    >
      <span className="flex flex-col w-2/3">
        <span className="text-sm font-semibold">{title}</span>
        <span className="text-xs pt-2">{text}</span>
      </span>
      <span className="bg-[#074703] cursor-pointer rounded-sm text-xs p-1">{action}</span>
    </div>
  );
};

export default Ad;
