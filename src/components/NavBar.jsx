import React from "react";
import { useState } from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Logo from "./Logo";
import { toggleSidebar, clearStore } from "../features/user/userSlice";
export default function NavBar() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [toggle, setToggle] = useState(false);
  const logout = () => {
    setToggle(false);
    dispatch(clearStore("Logging out..."));
  };
  return (
    <header className="bg-neutral-100 px-4 gap-3  md:px-10 sm:px-6 py-4 flex justify-between items-center text-blue-500 sticky top-0">
      <button onClick={() => dispatch(toggleSidebar())}>
        <FaAlignLeft className="text-3xl" />
      </button>
      <div className="flex items-center ">
        <div className="lg:hidden h-10 ">
          <Logo />
        </div>
        <h1 className="hidden lg:inline text-3xl font-semibold">Dashboard</h1>
      </div>
      <div className="relative">
        <button
          onClick={() => setToggle((t) => !t)}
          className="flex whitespace-nowrap items-center sm:text-lg gap-1 bg-blue-500 text-white px-1 sm:px-2 py-1   rounded relative"
        >
          <FaUserCircle />
          <span className="capitalize first-letter:text-base">
            {user?.name}
          </span>
          <FaCaretDown />
        </button>
        <button
          onClick={logout}
          className={`${
            toggle
              ? "scale-x-100 opacity-100 duration-300 transition origin-right "
              : "scale-x-50 opacity-0 duration-300 transition origin-right "
          } 
          bg-blue-500/80 text-white w-full rounded absolute top-10 hover:bg-rose-400   p-1.5`}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
