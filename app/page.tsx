"use client";
import React, { useState } from "react";
import Nav from "./Nav/Nav";
import Ad from "./Ad/Ad";
import Content from "./Content/Content";
import Menu from "./Menu/Menu";
import Discover from "./Discover/Discover";

export default function Home() {
  const [active, setActive] = useState("home");
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState("");
  return (
    <>
      <Nav setSearch={setSearch} location={`Rouen, France`} />
      <Ad
      title="Upgrade to Premium 🪴"
      text="Get access to private rooms, more suggestions & tips, and additional AI requests"
      action="Upgrade Now"
      img="/background/ad-1.png"
      />
      {/* <Discover/> */}
      <Content type={active} searchQuery={search} />
      <Menu active={active} setActive={setActive} setSearch={setSearch} />
    </>
  );
}
