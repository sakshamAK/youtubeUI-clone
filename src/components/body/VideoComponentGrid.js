import VideoComponent from "./VideoComponent";

const VideoComponentGrid = () => {
    let countIt = ["1","2","3","4"];
    return (
        countIt.map(() => {
            return(
                <article className = "flexboxContainer">
                    {countIt.map(() => {
                        return (
                            <VideoComponent />
                        )
                    })}
                </article>
            )
        })
    )
}

export default VideoComponentGrid
