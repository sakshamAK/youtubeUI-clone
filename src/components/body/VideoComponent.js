import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import VideoPlayer from "../../VideoPlayer";

const VideoComponent = () => {
    return (
        <BrowserRouter>
            <Link style = {{
                textDecoration: "none"
            }} to = "Video">
            <section className="videoCard">
                <img
                    className="coverImage"
                    alt=""
                    src="https://i.ytimg.com/vi/QqDH5sYzDS8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhtDegucxKBZcFqD8yRaByyowqYA"
                />
                <section className="textInfo">
                    <img
                        className="profileImage"
                        alt=""
                        src="https://yt3.ggpht.com/ytc/AKedOLT1tLx7BgAa7_SHaXE0hDRjQu1BRihsEDZ3lmUUcg=s68-c-k-c0x00ffffff-no-rj"
                    />
                    <section className="textCont">
                        <span className="titleText">
                            Step up your front-end skills with these 5 resources
                        </span>
                        <a href="#S" className="author">
                            Kevin Powell
                        </a>
                        <span className="views">150K views &#8226; 4 months ago</span>
                    </section>
                </section>
            </section>
            </Link>
            <Switch>
                <Route path = "/Video">
                    <VideoPlayer />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default VideoComponent;
