import React, { useEffect, useContext } from "react";
import AppContext from "../../context/appContext";
import Search from "../search/Search";
import Loading from "../layout/Loading";
import CharacterList from "../characters/CharacterList";
import Pagination from "../layout/Pagination";
import NotFound from "../pages/NotFound";

const Home = () => {
  const appContext = useContext(AppContext);
  const { getCharacters, characters, loading, currentPage, error } = appContext;

  useEffect(() => {
    // Make initial call
    getCharacters(currentPage.pageUrl);

    // eslint-disable-next-line
  }, []);

  return (
    <main className="home-page">
      <Search />
      {loading ? (
        <Loading />
      ) : error ? (
        <NotFound />
      ) : (
        <>
          <Pagination />
          <CharacterList characters={characters} />
          <Pagination />
        </>
      )}
    </main>
  );
};

export default Home;
