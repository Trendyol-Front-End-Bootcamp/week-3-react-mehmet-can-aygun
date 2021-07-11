import React from "react";
import Search from "../search/Search";
import Loading from "../layout/Loading";
import CharacterList from "../characters/CharacterList";

const Home = () => {
  return (
    <main className="home-page">
      <Search />
    </main>
  );
};

export default Home;
