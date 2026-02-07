import React from "react";
import Home from "../Home/Home";
import Messages from "../Messages.tsx/Messages";
import Discover from "../Discover/Discover";
import Profile from "../Profile/Profile";
import Plants from "../Plants/Plants";

type ContentProps = {
  type?: string;
  searchQuery?: string;
};

const Content = ({ type, searchQuery }: ContentProps) => {
  return (
    <div className="w-full min-h-screen mb-30 mt-7 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-5">
      {searchQuery ? (
        <div>Résultats de recherche pour : {searchQuery}</div>
      ) : (
        <>
          {type === "home" && <Home/>}
          {type === "plants" && <Plants/>}
          {type === "messages" && <Messages/>}
          {type === "profile" && <Profile/>}
          {type === "discover" && <Discover/>}
        </>
      )}
    </div>
  );
};

export default Content;
