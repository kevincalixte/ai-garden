import React from "react";
import { MdEmail, MdLock, MdPerson, MdQuestionMark } from "react-icons/md";

type SigninProps = {
  login?: boolean;
};
const Signin = ({ login }: SigninProps) => {
  return (
    <>
      <h2>Sign In</h2>
      <form
        action=""
        method="post"
        className="flex flex-col gap-3 mt-3 
      [&_input]:border [&_input]:rounded [&_input]:px-2 [&_input]:py-1 [&_input]:w-full [&_input]:outline-none 
      [&_div]:flex [&_div]:items-center [&_div]:gap-2"
      >
        {login ? (
          <></>
        ) : (
          <>
            <div className="order-1">
              <MdPerson className="text-[#074703]" />
              <input type="text" placeholder="Account Name" />
            </div>

            <div className="order-4">
              <MdQuestionMark className="text-[#074703]" />
              <input type="password" placeholder="Confirm Password" />
            </div>
          </>
        )}
        <div className="order-2">
          <MdEmail className="text-[#074703]" />
          <input type="text" placeholder="Email address" />
        </div>
        <div className="order-3">
          <MdLock className="text-[#074703]" />
          <input type="password" placeholder="Password" />
        </div>
        <input
          type="submit"
          name="submit"
          value="Submit"
          className="order-5 bg-[#074703] text-white rounded px-4 py-2 cursor-pointer mt-2"
        />
      </form>
    </>
  );
};

export default Signin;
