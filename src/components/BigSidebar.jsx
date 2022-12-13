import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
import Logo from "./Logo";
export default function BigSidebar() {
  return (
    <div className="bg-neutral-100  flex flex-col relative ">
      <div className="w-40 mx-auto mt-2">
        <Logo />
      </div>
      <ul className="text-blue-600 my-12 text-3xl flex flex-col gap-2 relative  ">
        {links.map((link) => {
          return (
            <NavLink
              to={link.path}
              key={link.id}
              className={({ isActive }) =>
                isActive ? "bg-slate-300/60 pl-14  " : ""
              }
            >
              <li className="flex items-center  gap-6 px-10 py-3 whitespace-nowrap  hover:pl-14 hover:bg-slate-300/60 ">
                <span>{link.icon}</span>
                <span>{link.text}</span>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}
