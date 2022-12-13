import React, { useState } from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteJob, setEditJob } from "../features/job/jobSlice";

export default function Job({
  _id: id,
  company,
  position,
  jobLocation,
  status,
  jobType,
  createdBy,
  createdAt,
  upDatedAt,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <article className="bg-white rounded p-2">
      <div className="flex w-full gap-6 items-center justify-start">
        <div className="h-12 w-12 bg-blue-600 rounded grid place-content-center text-3xl text-white uppercase">
          {company.charAt(0)}
        </div>
        <div className="capitalize">
          <h3 className="text-xl font-semibold ">{position}</h3>
          <p className="text-gray-400  ">{company}</p>
        </div>
      </div>
      <hr />
      <div className=" grid grid-cols-2 place-items-start  p-2 gap-2 capitalize   ">
        <div className="flex gap-3 items-center   ">
          <FaLocationArrow className="text-gray-400" />
          <p className=" break-all">{jobLocation}</p>
        </div>
        <div className="flex gap-3 items-center  ">
          <FaCalendarAlt className="text-gray-400" />
          <p>{moment(createdAt).format("MMM Do, YYYY")}</p>
        </div>
        <div className="flex gap-3 items-center  ">
          <FaBriefcase className="text-gray-400" />
          <p>{jobType}</p>
        </div>
        <div className={`${status} font-medium px-2 py-0.5 rounded capitalize`}>
          {status}
        </div>
        <div className="flex items-center gap-3 ">
          <button
            onClick={() => {
              navigate("/add-job");
              dispatch(
                setEditJob({
                  editJobId: id,
                  position,
                  company,

                  jobLocation,
                  status,
                  jobType,
                })
              );
            }}
            className="bg-green-200 rounded p-0.5 px-2 hover:scale-105 ease-in-out duration-300 text-green-800 tracking-wide"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteJob(id))}
            className="text-red-800 bg-red-200 rounded py-0.5 px-2 hover:scale-105 ease-in-out duration-300 tracking-wide"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
