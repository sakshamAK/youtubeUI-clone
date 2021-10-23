import SideBar from "./components/sideBar/GeneralButtons"
import SuggestionBox from "./components/body/CategorySuggestion"
import { Fragment } from "react";


const Home = () => {
    return (
        <Fragment>
            <SideBar />
            <SuggestionBox />
        </Fragment>
    );
};

export default Home;
