import React from "react";
import { SearchContainer, JobsContainer } from "../../components";

export default function AllJobs() {
  return (
    <div className="p-5 lg:px-16 space-y-8  ">
      <SearchContainer />
      <JobsContainer />
    </div>
  );
}
