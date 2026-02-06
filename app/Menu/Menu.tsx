"use client";
import React from "react";
import { HiHeart, HiHome, HiMail } from "react-icons/hi";
import { TbPlant2, TbUser } from "react-icons/tb";

type MenuProps = {
  active: string;
  setActive: (value: string) => void;
  setSearch: (value: string) => void;
};

const Menu = ({ active, setActive, setSearch }: MenuProps) => {
  const handleMenuClick = (page: string) => {
    setActive(page);
    setSearch("");
  };
  
  return (
    <nav
      className="flex justify-around fixed w-full bottom-0 left-0 p-5 text-2xl 
    rounded-t-3xl bg-white
    [&_span]:text-sm [&_div]:flex [&_div]:flex-col [&_div]:items-center"
    >
      <div
        className={active === "home" ? "text-[#36C778]" : "text-gray-400"}
        onClick={() => handleMenuClick("home")}
      >
        <HiHome />
        <span>Home</span>
      </div>
      <div
        className={active === "messages" ? "text-[#36C778]" : "text-gray-400"}
        onClick={() => handleMenuClick("messages")}
      >
        <HiMail />
        <span>Messages</span>
      </div>
      <div
        className={active === "plants" ? "text-[#36C778]" : "text-gray-400"}
        onClick={() => handleMenuClick("plants")}
      >
        <TbPlant2 />
        <span>Plants</span>
      </div>
      <div
        className={active === "profile" ? "text-[#36C778]" : "text-gray-400"}
        onClick={() => handleMenuClick("profile")}
      >
        <TbUser />
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default Menu;
