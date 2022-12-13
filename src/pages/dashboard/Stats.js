import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ChartsContainer from "../../components/ChartsContainer";
import Loading from "../../components/Loading";
import StatsContainer from "../../components/StatsContainer";
import { showStats } from "../../features/allJobs/allJobsSlice";

export default function Stats() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);
  const { monthlyApplications, isLoading } = useSelector(
    (store) => store.allJobs
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-5 lg:px-16  space-y-8">
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </div>
  );
}
