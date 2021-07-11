import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Search from "./components/search/Search";
import Loading from "./components/layout/Loading";
import CharacterList from "./components/characters/CharacterList";

import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  async function getCharacters() {
    setLoading(true);

    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");

      const data = await res.json();

      setLoading(false);

      setCharacters(data.results);  
    } catch (err) {
      console.log(err.message);
    }
  }

  async function getSearchResults(data) {
    console.log(data);
  }

  useEffect(() => {
    // Fetch Characters
    getCharacters();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Search getSearchResults={getSearchResults} />
      { loading ? (
        <Loading />
      ) : (
        <CharacterList characters={characters} />
      )}
    </div>
  );

}

export default App;
