import { useState, useEffect, useRef } from 'react'
import VideoEmbed from "./videoPlayerComponents/VideoEmbed";
import NextVideo from "./videoPlayerComponents/NextVideo";

const VideoPlayer = () => {
    const [currentVideos, setCurrentVideos] = useState(Array.from(Array(15).keys(), n => n += 1));
    const [isFetching, setFetching] = useState(false);
    const infiniteScroll = useRef(null)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true)
        return() => window.removeEventListener("scroll", handleScroll);
    },[])

    useEffect(() => {
        if(!isFetching) return;
        fetchMoreItems();
    }, [isFetching])

    function fetchMoreItems() {
        setTimeout(() => {
            setCurrentVideos(prevState => ([...prevState, ...Array.from(Array(5).keys(), n => n + prevState.length + 1)]))
            setFetching(false)
        }, 2000)
    }

    function handleScroll(){
        if(parseInt(window.innerHeight) + infiniteScroll.current.scrollTop === infiniteScroll.current.scrollHeight + 65){
            setFetching(true);
            console.log( parseInt(window.innerHeight) + Number(infiniteScroll.current.scrollTop), infiniteScroll.current.scrollHeight + 65);
            return;
        }
    }
    return (
        <section id="primary-video-container" ref = {infiniteScroll}>
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
                {currentVideos.map((key) => <NextVideo key = {key}/>)}
                {isFetching && <div className = "loading"></div>}
            </article>
        </section>
    );
};

export default VideoPlayer;
