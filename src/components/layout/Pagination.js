import { useContext } from "react";
import AppContext from "../../context/appContext";

const Pagination = ({ pagination }) => {
  const appContext = useContext(AppContext);
  const { getCharacters } = appContext;

  const printPageButtons = () => {
    let buttons = [];

    for (let i = 1; i <= 5; i++) {
      buttons.push(
        <button key={i} className="page-btn" onClick={() => getCharacters(i)}>
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
