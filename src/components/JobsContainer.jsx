import React, { useEffect } from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import Job from "./Job";
import Loading from "./Loading";
import PageButton from "./PageButton";

export default function JobsContainer() {
  const {
    jobs,
    isLoading,
    totalJobs,
    numOfPages,
    page,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, [sort, searchStatus, searchType, search, page]);

  if (isLoading) {
    return <Loading center />;
  }
  return (
    <section className="text-lg lg:text-xl space-y-3">
      {jobs.length === 0 ? (
        <h2 className=" tracking-wider text-blue-600 font-semibold">
          No Jobs To Display...
        </h2>
      ) : (
        <>
          <h2 className=" tracking-wider text-blue-600 font-semibold">
            {totalJobs} job{jobs.length > 1 && "s"} Found
          </h2>
          <div
            className="w-auto grid
         sm:grid-cols-2 gap-4
            "
          >
            {jobs.map((job) => (
              <Job key={job.id} {...job} />
            ))}
          </div>
        </>
      )}
      {numOfPages > 1 && <PageButton numOfPages={numOfPages} page={page} />}
    </section>
  );
}
