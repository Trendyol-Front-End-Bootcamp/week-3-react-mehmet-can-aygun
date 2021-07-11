import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppState from "./context/AppState";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import CharacterDetail from "./components/pages/CharacterDetail";
import NotFound from "./components/pages/NotFound";

import "./css/App.css";

const App = () => {
  return (
    <AppState>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:id" component={CharacterDetail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </AppState>
  );
};

export default App;
