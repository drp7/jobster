import React from "react";
import img from "../assets/not-found.svg";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="flex h-screen bg-slate-900   flex-col items-center  justify-center text-center ">
      <div className="max-w-2xl space-y-3 text-slate-400">
        <img className="" src={img} alt="not found" />
        <h3 className="text-3xl tracking-wider ">Ohh ! Page Not Found</h3>
        <p className="text-lg mb-6 opacity-60">
          We can't seem to find the page you're looking for
        </p>
        <Link
          className="text-blue-500 capitalize font-semibold underline text-xl relative -bottom-3 "
          to="/"
        >
          back home
        </Link>
      </div>
    </div>
  );
}
