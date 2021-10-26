import VideoComponent from "./VideoComponent";

const VideoComponentGrid = () => {
    return Array.from(Array(6).keys(), () => {
        return (<article className="flexboxContainer">
            {Array.from(Array(4).keys(), () => (
                <VideoComponent />
            ))}
        </article>
    )})}

export default VideoComponentGrid;
