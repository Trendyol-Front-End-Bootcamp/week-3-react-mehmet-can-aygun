import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppState from "./context/AppState";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import CharacterDetail from "./components/pages/CharacterDetail";
import NotFound from "./components/pages/NotFound";

import "./css/App.css";

const App = () => {
  /*
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

  async function getSearchResults(results) {
    setCharacters(results);
  }

  useEffect(() => {
    // Fetch Characters
    getCharacters();
  }, []);
  */

  return (
    <AppState>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail" component={CharacterDetail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </AppState>
  );
};

export default App;
