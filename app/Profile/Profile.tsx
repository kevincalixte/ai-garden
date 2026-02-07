import Link from "next/link";
import {
  MdEmail,
  MdLock,
  MdLanguage,
  MdDarkMode,
  MdUpgrade,
  MdLogout,
} from "react-icons/md";
import Switch from "../Switch/Switch";

const Profile = () => {
  return (
    <div className="flex flex-col">
      <h2>My Profile</h2>
      <form
        action=""
        method="post"
        className="flex flex-col gap-3 mt-3 
      [&_input]:border [&_input]:rounded [&_input]:px-2 [&_input]:py-1 [&_input]:w-full [&_input]:outline-none
      [&_select]:border [&_select]:rounded [&_select]:px-2 [&_select]:py-1"
      >
        <div className="flex items-center gap-2">
          <MdEmail className="text-[#074703]" />
          <input type="text" placeholder="Email address" />
        </div>
        <div className="flex items-center gap-2">
          <MdLock className="text-[#074703]" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="flex items-center gap-2">
          <MdDarkMode className="text-[#074703]" />
          <Switch value="Dark Mode :" />
        </div>
        <div className="flex items-center gap-2">
          <MdLanguage className="text-[#074703]" />
          <label htmlFor="lang">Lang :</label>
          <select name="lang" id="lang" className="cursor-pointer">
            <option value="">English</option>
            <option value="">French</option>
          </select>
        </div>
        <input
          type="submit"
          name="submit"
          value="Save"
          className="bg-[#074703] text-white rounded px-4 py-2 cursor-pointer mt-2"
        />
      </form>
      <Link
        href={""}
        className="flex items-center gap-2 bg-gray-200 text-gray-700 rounded px-4 py-2 mt-4"
      >
        <MdLogout /> Logout
      </Link>
    </div>
  );
};

export default Profile;
