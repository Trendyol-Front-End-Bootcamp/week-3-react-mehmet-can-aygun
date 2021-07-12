import { useContext, useState } from "react";
import AppContext from "../../context/appContext";

const Pagination = ({ pagination }) => {
  const appContext = useContext(AppContext);
  const { getCharacters } = appContext;

  const [currentPage, setCurrentPage] = useState(1);

  const printPageButtons = () => {
    let buttons = [];

    for (let i = 1; i <= 5; i++) {
      buttons.push(
        <button
          key={i}
          className={i === currentPage ? "page-btn active" : "page-btn"}
          onClick={() => {
            getCharacters(i);
            setCurrentPage(i);
          }}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="pagination">
      <div className="page-btns-container">{printPageButtons()}</div>
    </div>
  );
};

export default Pagination;
