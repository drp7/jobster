import React from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../features/allJobs/allJobsSlice";

export default function PageButton({ page, numOfPages }) {
  const dispatch = useDispatch();
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  return (
    <div
      className={`flex sm:justify-end ${
        page > 1 ? "justify-center" : "justify-end"
      }  pt-3`}
    >
      {page > 1 && (
        <button
          className="px-3 py-1 mx-1 text-gray-500 capitalize bg-white rounded-md hover:bg-blue-500 hover:text-white  "
          onClick={prevPage}
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span className="mx-1">previous</span>
          </div>
        </button>
      )}

      {Array.from({ length: numOfPages }, (_, i) => {
        let pageNumber = i + 1;
        return (
          <button
            onClick={() => dispatch(changePage(pageNumber))}
            type="button"
            key={pageNumber}
            className={`${
              page === pageNumber && "text-neutral-50 bg-blue-500 "
            } hidden px-3 py-1 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline hover:bg-blue-500 hover:text-white `}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        className="px-3 py-1 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md   hover:bg-blue-500  hover:text-white "
        onClick={nextPage}
      >
        <div className="flex items-center -mx-1" type="button">
          <span className="mx-1">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-1 rtl:-scale-x-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
