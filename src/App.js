import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DiscoverMoviePage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/Aboutpage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discover" exact={true} component={DiscoverMoviePage} />
        <Route path="/about" exact={true} component={AboutPage} />
        <Route path="/" exact={true} component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
