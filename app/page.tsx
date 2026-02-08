"use client";
import React, { useState } from "react";
import Nav from "./Nav/Nav";
import Ad from "./Ad/Ad";
import Content from "./Content/Content";
import Menu from "./Menu/Menu";
import { PlantProvider } from "./context/PlantContext";


export default function Home() {
  const [active, setActive] = useState("home"); // Page active (home, plants, messages, etc.)
  const [search, setSearch] = useState(""); // Recherche
  const [messages, setMessages] = useState(""); // Messages
  const [connected, setConnected] = useState(false); // État de connexion

  return (
    <PlantProvider>
      <Nav setSearch={setSearch} setActive={setActive} location={`Rouen, France`} connected={connected} />
      <Ad
        title="Upgrade to Premium 🪴"
        text="Get access to private rooms, more suggestions & tips, and additional AI requests"
        action="Upgrade Now"
        img="/background/ad-1.png"
      />
      <Content type={active} searchQuery={search} setActive={setActive} />
      <Menu active={active} setActive={setActive} setSearch={setSearch} />
    </PlantProvider>
  );
}
