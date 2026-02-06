import React from "react";
import Home from "../Home/Home";

type ContentProps = {
  type?: string;
  searchQuery?: string;
};

const Content = ({ type, searchQuery }: ContentProps) => {
  return (
    <div className="w-full min-h-screen mt-7">
      {searchQuery ? (
        <div>Résultats de recherche pour : {searchQuery}</div>
      ) : (
        <>
          {type === "home" && <Home/>}
          {type === "plants" && <div>plants</div>}
          {type === "messages" && <div>messages</div>}
          {type === "profile" && <div>profile</div>}
        </>
      )}
    </div>
  );
};

export default Content;
