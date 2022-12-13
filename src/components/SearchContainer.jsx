import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearFilters, updateFilters } from "../features/allJobs/allJobsSlice";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";

export default function SearchContainer() {
  const {
    searchStatus,
    searchType,
    sort,
    sortOptions,
    search,

    isLoading,
  } = useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // if (isLoading) return;

    dispatch(updateFilters({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <form className="w-auto   bg-white p-4 lg:py-8 text-black   rounded-lg shadow-lg ">
      <fieldset className="grid sm:grid-cols-2 lg:grid-cols-3  grid-rows-none  gap-3 lg:gap-5 ">
        <legend className="text-4xl capitalize mb-4 text-sky-600 ">
          Search Form
        </legend>
        <FormRow
          name="search"
          value={search}
          handleChange={handleChange}
          type="text"
        />

        <FormRowSelect
          name="searchStatus"
          labelText="Status"
          value={searchStatus}
          list={["all", ...statusOptions]}
          handleChange={handleChange}
        />
        <FormRowSelect
          name="searchType"
          labelText="Type"
          value={searchType}
          handleChange={handleChange}
          list={["all", ...jobTypeOptions]}
        />
        <FormRowSelect
          name="sort"
          list={sortOptions}
          value={sort}
          handleChange={handleChange}
        />
        <div className="self-end text-xl flex items-center justify-around gap-2 text-slate-300  ">
          <button
            className=" p-1 flex-1 bg-red-300/80 text-red-800 font-medium rounded disabled:cursor-not-allowed  "
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear Filters
          </button>
        </div>
      </fieldset>
    </form>
  );
}
