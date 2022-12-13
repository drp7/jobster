import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleSidebar } from "../features/user/userSlice";
import links from "../utils/links";
import Logo from "./Logo";

export default function SmallSidebar() {
  const dispatch = useDispatch();
  return (
    <div className="absolute  inset-10 sm:inset-x-[20%] bg-slate-300 grid place-content-center ">
      <button
        className="absolute  left-5 top-5 text-red-600 text-4xl  font-semibold hover:scale-110 duration-150 ease-in-out"
        onClick={() => dispatch(toggleSidebar())}
      >
        X
      </button>
      <nav className="flex flex-col">
        <div className="w-4/5 mx-auto">
          <Logo />
        </div>
        <ul className="text-blue-600/75 my-12 text-3xl flex flex-col gap-2  ">
          {links.map((link) => {
            return (
              <NavLink
                to={link.path}
                key={link.id}
                className={({ isActive }) => (isActive ? "text-blue-900" : "")}
                onClick={() => dispatch(toggleSidebar())}
              >
                <li className="flex items-center  gap-6 px-12  py-3 whitespace-nowrap  group">
                  <span className="group-hover:text-blue-800">{link.icon}</span>
                  <span>{link.text}</span>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
