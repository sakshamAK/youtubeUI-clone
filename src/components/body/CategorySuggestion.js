import VideoComponent from "./VideoComponent";

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
                <VideoComponent />
            </main>
        </div>
    )
}

export default CategorySuggestion
