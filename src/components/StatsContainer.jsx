import React from "react";
import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";
import { useSelector } from "react-redux";
import StatItem from "./StatItem";

export default function StatsContainer() {
  const { stats } = useSelector((store) => store.allJobs);
  const defaultStats = [
    {
      title: "pending application",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },

    {
      title: "interview scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];
  return (
    <section className="grid lg:grid-cols-3 gap-x-8 gap-y-6 ">
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </section>
  );
}
