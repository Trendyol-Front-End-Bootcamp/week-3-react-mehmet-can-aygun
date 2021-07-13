import { useContext } from "react";
import AppContext from "../../context/appContext";

const Pagination = () => {
  const appContext = useContext(AppContext);
  const {
    getCharacters,
    pagination,
    currentPage,
    setCurrentPage,
    isSearching,
    setIsSearching,
  } = appContext;

  if (pagination) {
    return (
      <div className="pagination">
        {isSearching && (
          <button
            className="clear-search-btn"
            onClick={() => {
              setIsSearching(false);
              getCharacters();
              setCurrentPage({
                pageNumber: 1,
                pageUrl: "https://rickandmortyapi.com/api/character/?page=1",
              });
            }}
          >
            Clear
          </button>
        )}

        <div className="page-btns-container">
          {pagination.prev && (
            <button
              className="page-btn"
              onClick={() => {
                getCharacters(pagination.prev);
                setCurrentPage({
                  pageNumber: currentPage.pageNumber - 1,
                  pageUrl: pagination.prev,
                });
              }}
            >
              Previous
            </button>
          )}

          <span>
            {currentPage.pageNumber} / {pagination.pages}
          </span>

          {pagination.next && (
            <button
              className="page-btn"
              onClick={() => {
                getCharacters(pagination.next);
                setCurrentPage({
                  pageNumber: currentPage.pageNumber + 1,
                  pageUrl: pagination.next,
                });
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
