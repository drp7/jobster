import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";

export default function ChartsContainer() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  return (
    <section className="text-center text-lg">
      <h4 className="text-2xl">Monthly Applications</h4>
      <button
        className="text-blue-500  text-xl mt-2 mb-5"
        type="button"
        onClick={() => setBarChart(!barChart)}
      >
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </section>
  );
}
