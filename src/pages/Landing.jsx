import React from "react";
import { Logo } from "../components";
import main from "../assets/main.svg";
import { useNavigate } from "react-router-dom";
export default function Landing() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col min-h-screen bg-neutral-900">
      <nav className=" p-6 container max-w-6xl mx-auto">
        <div className="w-48">
          <Logo />
        </div>
      </nav>
      <div className=" p-6 container max-w-6xl mx-auto grid md:grid-cols-2 place-items-center text-neutral-300 ">
        <div className="my-20 flex flex-col w-auto   items-start  ">
          <h1 className=" sm:text-5xl text-[2.5rem] font-semibold indent-1  capitalize  ">
            job
            <span className="text-blue-500 relative">
              <span className="blur-2xl bg-blue-800 w-36 h-36 absolute inset-0 m-auto animate-blue-pulse"></span>
              tracking
            </span>
            app
          </h1>
          <p className="text-lg my-6 ">
            Chillwave man braid selfies, heirloom flannel etsy skateboard tofu
            Brooklyn artisan seitan scenester hashtag leggings. YOLO plaid
            actually, scenester bodega boys wayfarers leggings fit hell of sus
            readymade gatekeep.
          </p>
          <button
            className="bg-gradient-to-r tracking-wide  from-blue-400 via-slate-900 to-blue-600   hover:bg-gradient-to-l rounded px-6 py-3 ease-linear duration-150"
            onClick={() => navigate("/register")}
          >
            Login/Register
          </button>
        </div>
        <img
          loading="lazy"
          src={main}
          alt="job hunt"
          className="hidden md:block "
        />
      </div>
    </main>
  );
}
