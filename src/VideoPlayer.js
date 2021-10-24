// import {Fragment} from 'react'
import VideoEmbed from "./videoPlayerComponents/VideoEmbed";
import NextVideo from "./videoPlayerComponents/NextVideo";

const VideoPlayer = () => {
    let loopVideo = [1,2,3,4]
    return (
        <section id="primary-video-container">
            <article
                style={{
                    overflow: "auto",
                    display: "flex",
                }}
            >
                <VideoEmbed />
                {/* comments */}
            </article>
            <article style = {{marginTop: "20px"}}>
                <NextVideo />
            </article>
        </section>
    );
};

export default VideoPlayer;
