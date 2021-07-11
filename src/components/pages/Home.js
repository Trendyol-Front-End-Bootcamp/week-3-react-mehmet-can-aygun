import React, { useEffect, useContext } from "react";
import AppContext from "../../context/appContext";
import Search from "../search/Search";
import Loading from "../layout/Loading";
import CharacterList from "../characters/CharacterList";

const Home = () => {
  const appContext = useContext(AppContext);
  const { getCharacters, characters, loading } = appContext;

  useEffect(() => {
    // Make initial call
    getCharacters();

    // eslint-disable-next-line
  }, []);

  return (
    <main className="home-page">
      <Search />
      {loading ? <Loading /> : <CharacterList characters={characters} />}
    </main>
  );
};

export default Home;
