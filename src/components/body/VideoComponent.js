const VideoComponent = () => {
    let countIt = ["1","2","3","4"];
    return (
        countIt.map(() => {
            return(
                <article className = "flexboxContainer">
                    {countIt.map(() => {
                        return (
                            <section className = "videoCard">
                                <img className = "coverImage" alt = "" src = "https://i.ytimg.com/vi/QqDH5sYzDS8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhtDegucxKBZcFqD8yRaByyowqYA"/>
                                <section className = "textInfo">
                                    <img className = "profileImage" alt = "" src = "https://yt3.ggpht.com/ytc/AKedOLT1tLx7BgAa7_SHaXE0hDRjQu1BRihsEDZ3lmUUcg=s68-c-k-c0x00ffffff-no-rj" />
                                    <section className = "textCont">
                                        <span className = "titleText">Step up your front-end skills with these 5 resources</span>
                                        <span className = "author">Kevin Powell</span>
                                        <span className = "views">150K views &#8226; 4 months ago</span>
                                    </section>
                                </section>
                            </section>
                        )
                    })}
                </article>
            )
        })
    )
}

export default VideoComponent
