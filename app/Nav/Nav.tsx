import React from "react";
import {  BiLogInCircle } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { MdGpsFixed, MdGpsNotFixed } from "react-icons/md";

type NavProps = {
  location: string;
  setSearch: (query: string) => void;
};
const Nav = ({ location, setSearch }: NavProps) => {
  return (
    <nav className="flex flex-col pt-3">
     
      <div className="flex items-start justify-between">
       
        <span className="flex flex-col items-start">
          <span className="text-xs">Current Location</span>
          <span className="flex items-center">
            <span className="text-[#074703]">
              {location ? <MdGpsFixed /> : <MdGpsNotFixed />}
            </span>
            <select
              name="location"
              id="location"
              className="outline-none font-semibold"
            >
              <option value="Select your location">
                {location ? location : "Select your location"}
              </option>
            </select>
          </span>
        </span>

        <span className="flex items-center text-sm text-white bg-[#074703] px-2 py-1 rounded-md">
          <span className="mr-1 cursor-pointer">Signin</span>
          <BiLogInCircle/>
        </span>
      </div>

      <div className="relative mt-3 shadow-md">
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
          <FiSearch />
        </span>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search plant"
          className="pl-10 py-2 rounded-lg border w-full outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") setSearch(e.currentTarget.value);
          }}
        />
      </div>
    </nav>
  );
};

export default Nav;
