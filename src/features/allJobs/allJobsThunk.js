import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import authHeader from "../../utils/authHeader";

export const getAllJobsThunk = async (_, thunkAPI) => {
  const { page, searchStatus, searchType, sort, search } =
    thunkAPI.getState().allJobs;

  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const res = await customFetch.get(url, authHeader(thunkAPI));

    return res.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const res = await customFetch.get("/jobs/stats", authHeader(thunkAPI));

    return res.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
