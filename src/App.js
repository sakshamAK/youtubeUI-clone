import "./App.css";
import Ham from "./components/hamburger"
import YtLogo from "./components/YtLogo.js"
import Search from "./components/searchbox"
import Side from "./components/SideButtons"
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
// import { Fragment } from "react";

function App() {
  return (
    <Router>
      <header style = {{position:"absolute", top:"0"}}>
        <Ham />
        <a href="#home">
          <YtLogo />
        </a>
        <Search />
        <Side />
      </header>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Video">
          <VideoPlayer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
