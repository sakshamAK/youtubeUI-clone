import Ham from "./components/hamburger"
import YtLogo from "./components/YtLogo.js"
import Search from "./components/searchbox"
import Side from "./components/SideButtons"
import SideBar from "./components/sideBar/GeneralButtons"
import SuggestionBox from "./components/body/CategorySuggestion"
import { Fragment } from "react";


const Home = () => {
    return (
        <Fragment>
            <header>
                <Ham />
                <a href = "#home"><YtLogo /></a>
                <Search />
                <Side />
            </header>
            <SideBar />
            <SuggestionBox />
        </Fragment>
    );
};

export default Home;
