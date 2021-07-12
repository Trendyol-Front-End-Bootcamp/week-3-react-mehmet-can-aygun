import { useContext } from "react";
import AppContext from "../../context/appContext";

const Pagination = () => {
  const appContext = useContext(AppContext);
  const { getCharacters, pagination, currentPage, setCurrentPage } = appContext;

  if (pagination) {
    return (
      <div className="pagination">
        <div className="page-btns-container">
          {pagination.prev && (
            <button
              className="page-btn"
              onClick={() => {
                getCharacters(pagination.prev);
                setCurrentPage(currentPage - 1);
              }}
            >
              Previous
            </button>
          )}

          <span>
            {currentPage} / {pagination.pages}
          </span>

          {pagination.next && (
            <button
              className="page-btn"
              onClick={() => {
                getCharacters(pagination.next);
                setCurrentPage(currentPage + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return <div className="pagination">Loading...</div>;
  }
};

export default Pagination;
