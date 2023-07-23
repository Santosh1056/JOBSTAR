import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../features/allJobs/allJobsSlice";

function PageBtnContainer() {
  const dispatch = useDispatch();
  const { numOfPages, page } = useSelector((store) => store.allJob);

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
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
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft /> prev
      </button>
      <div className="btn-container">
        {pages.map((pageNum) => {
          return (
            <button
              key={pageNum}
              type="button"
              className={pageNum === page ? "pageBtn active" : "pageBtn"}
              onClick={() => dispatch(changePage(pageNum))}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
}

export default PageBtnContainer;
