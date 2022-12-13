import React from "react";

export default function StatItem({ title, icon, count, color, bcg }) {
  return (
    <div
      style={{
        color,
        borderRadius: "10px",
        borderBottom: `5px solid ${color}`,
      }}
      className="px-8 py-6 text-5xl font-semibold bg-white flex flex-col gap-6
      justify-between "
    >
      <header className="flex items-center justify-around">
        <span className="text-6xl">{count}</span>
        <span
          style={{
            background: bcg,
          }}
          className="p-1.5 rounded-md text-[2.5rem]"
        >
          {icon}
        </span>
      </header>
      {/* StatItem{color} */}
      <h5 className="text-2xl text-center tracking-widest font-extralight  capitalize">
        {title}
      </h5>
    </div>
  );
}
