import React, { useEffect, useContext } from "react";
import AppContext from "../../context/appContext";
import Search from "../search/Search";
import Loading from "../layout/Loading";
import CharacterList from "../characters/CharacterList";
import Pagination from "../layout/Pagination";

const Home = () => {
  const appContext = useContext(AppContext);
  const { getCharacters, characters, loading, pagination } = appContext;

  useEffect(() => {
    // Make initial call
    getCharacters();

    // eslint-disable-next-line
  }, []);

  return (
    <main className="home-page">
      <Search />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Pagination pagination={pagination} />
          <CharacterList characters={characters} />
          <Pagination pagination={pagination} />
        </>
      )}
    </main>
  );
};

export default Home;
