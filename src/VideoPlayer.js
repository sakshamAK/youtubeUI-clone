// import {Fragment} from 'react'
import VideoEmbed from './videoPlayerComponents/VideoEmbed'
import NextVideo from './videoPlayerComponents/NextVideo'

const VideoPlayer = () => {
    return (
        <div style = {{backgroundColor: "#181818", height: "100vh"}}>
            <VideoEmbed />
            <NextVideo />
        </div>
    )
}

export default VideoPlayer
