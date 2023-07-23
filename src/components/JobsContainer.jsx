import { useEffect } from "react";
import { Jobs, Loading, PageBtnContainer } from "./index";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/JobsContainer";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
function JobsContainer() {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((state) => state.allJob);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center={"center"} />
      </Wrapper>
    );
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to Display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Jobs key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
}

export default JobsContainer;
