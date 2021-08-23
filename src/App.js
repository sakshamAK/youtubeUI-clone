import "./App.css";
import Ham from "./components/hamburger"
import YtLogo from "./components/YtLogo.js"
import Search from "./components/searchbox"
import Side from "./components/SideButtons"
import SideBar from "./components/sideBar/GeneralButtons"
import SuggestionBox from "./components/body/CategorySuggestion"
import { Fragment } from "react";

function App() {

  return (
    <Fragment>
      <header>
        <Ham />
        <YtLogo />
        <Search />
        <Side />
      </header>
      <SideBar />
      <SuggestionBox />
    </Fragment>
  );
}

export default App;
