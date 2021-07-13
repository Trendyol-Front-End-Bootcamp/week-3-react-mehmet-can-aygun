import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/appContext";

const NotFound = () => {
  const appContext = useContext(AppContext);
  const { error, setError, setIsSearching } = appContext;

  return (
    <main className="not-found-page">
      <div className="not-found-container">
        <h1>404</h1>
        <p>{error || "Paga you are looking for could not be found."}</p>
        <Link
          to="/"
          onClick={() => {
            setError("");
            setIsSearching(false);
          }}
        >
          &#8592; Go back
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
