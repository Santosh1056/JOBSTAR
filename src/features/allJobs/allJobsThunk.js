import customFetch, { checkForUnauthorizedAuthor } from "../../utils/axios";
import authHeader from "../../utils/authHeader";

export const getAllJobThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().allJob;
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const resp = await customFetch.get(url, authHeader(thunkAPI));
    return resp.data;
  } catch (error) {
    checkForUnauthorizedAuthor(error, thunkAPI);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get("/jobs/stats", authHeader(thunkAPI));

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.msg);
  }
};
