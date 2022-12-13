import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FormRow, FormRowSelect } from "../../components";
import { toast } from "react-toastify";
import {
  clearValues,
  createJob,
  editJob,
  handleChange,
} from "../../features/job/jobSlice";
export default function AddJob() {
  const dispatch = useDispatch();
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("please fill out all fields");
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { position, company, jobLocation, jobType, status },
        })
      );
      return;
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: "jobLocation", value: user?.location }));
    }
  }, [dispatch, isEditing, user?.location]);
  return (
    <div className="p-5 lg:px-16 lg:py-8">
      <form
        onSubmit={handleSubmit}
        className="w-auto   bg-white p-4 lg:py-8 text-black   rounded-lg shadow-lg "
      >
        <fieldset className="grid sm:grid-cols-2 lg:grid-cols-3  grid-rows-none  gap-3 lg:gap-5 ">
          <legend className="text-4xl capitalize mb-4 text-sky-600 ">
            {isEditing ? "edit job" : "add job"}
          </legend>
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="Job Location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* status */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          ></FormRowSelect>
          {/* job type */}
          <FormRowSelect
            name="jobType"
            labelText="Job Type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          ></FormRowSelect>

          <div className="self-end text-xl flex items-center justify-around gap-3 text-slate-300  ">
            <button
              className=" p-1 flex-1 bg-slate-500 rounded"
              type="button"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              className="p-1 flex-1 bg-blue-500 rounded"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "loading..." : "submit"}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
