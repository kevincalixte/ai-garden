import React from "react";
import Home from "../Home/Home";
import Messages from "../Messages.tsx/Messages";
import Profile from "../Profile/Profile";
import Plants from "../Plants/Plants";
import Signin from "../Signin/Signin";
import Plant from "../Plant/Plant";
import { usePlant } from "../context/PlantContext"; 

type ContentProps = {
  type?: string;
  searchQuery?: string;
  setActive?: (value: string) => void; 
};

const Content = ({ type, searchQuery, setActive }: ContentProps) => {
  const { plantData } = usePlant();

  return (
    <div className="w-full min-h-screen mb-30 mt-7 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-5">
      {searchQuery ? (
        <div>Search results for : {searchQuery}</div>
      ) : (
        <>
          {type === "home" && <Home setActive={setActive} />}
          {type === "plants" && <Plants setActive={setActive} />}
          {type === "messages" && <Messages/>}
          {type === "profile" && <Profile/>}
          {type === "signin" && <Signin/>}
          {type === "plant" && plantData && <Plant {...plantData} />}
        </>
      )}
    </div>
  );
};

export default Content;
