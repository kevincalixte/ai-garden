"use client";
import React, { useState } from "react";
import Nav from "./Nav/Nav";
import Ad from "./Ad/Ad";
import Content from "./Content/Content";
import Menu from "./Menu/Menu";

export default function Home() {
  const [active, setActive] = useState("home");
  const [search, setSearch] = useState("");
  const [notifications, setNotifications] = useState("");
  const [messages, setMessages] = useState("");
  return (
    <>
      <Nav setSearch={setSearch} location={`Rouen, France`} />
      <Ad
        title="Try Premium Features 🪴"
        text="Claim your offer now and get illimited recognation, health, check and more"
        action="GET IT"
        img="/background/ad-1.png"
      />
      <Content type={active} searchQuery={search} />
      <Menu active={active} setActive={setActive} setSearch={setSearch} />
    </>
  );
}
