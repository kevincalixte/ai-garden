import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
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
            <span className="text-[#36C778]">
              {location ? <MdGpsFixed /> : <MdGpsNotFixed />}
            </span>
            <select
              name="location"
              id="location"
              className="outline-none text-[0.9rem] font-semibold"
            >
              <option value="Select your location">
                {location ? location : "Select your location"}
              </option>
            </select>
          </span>
        </span>
        <span className="border rounded-md p-0.5">
          <IoMdNotifications />
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
