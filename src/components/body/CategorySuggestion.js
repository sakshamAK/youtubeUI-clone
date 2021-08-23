const CategorySuggestion = () => {
    let suggestionList = ["All","Computer Science", "Courses", "Stock Markets", "3D printing", "Tanmay Bhat", "Comedies", "WordPress", "TED", "History", "Conversation", "Chords", "Electric Guitars", "Recently Uploaded", "New to you"];
    return (
        <div id = "contentBox">
            <hr id = "bodyStarts" />
            <nav id = "containerDiv">
                <ul id = "suggestionBar">
                    {suggestionList.map(item => {
                        return(<li class = "suggestItems">{item}</li>);
                    })}
                </ul>
                <hr />
            </nav>
            <main id = "containsMain">
                <article className = "flexboxContainer">
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
                </article>
                <article className = "flexboxContainer">
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
                </article>
                <article className = "flexboxContainer">
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
                </article>
            </main>
        </div>
    )
}

export default CategorySuggestion
