import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { BigSidebar, SmallSidebar, NavBar } from "../../components";
export default function SharedLayout() {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <main className="bg-neutral-100 min-h-screen text-neutral-200 flex">
      <aside
        className={` hidden lg:block h-screen max-w-xs w-full shrink-0 transition duration-300 ease-in-out  ${
          isSidebarOpen
            ? "-translate-x-full absolute  opacity-0  "
            : "sticky top-0 "
        } `}
      >
        <BigSidebar />
      </aside>

      <div className="relative flex-auto flex flex-col ">
        <NavBar />

        <div
          className={`fixed top-0 h-screen bg-black/80 lg:hidden w-full transition duration-500 ease-in-out ${
            isSidebarOpen ? "opacity-100" : "-translate-y-full opacity-0"
          } `}
        >
          <SmallSidebar />
        </div>
        <section className="bg-slate-300/60 text-black grow  ">
          <Outlet />
        </section>
      </div>
    </main>
  );
}
