import sideMenuItems from "./dictionary";

const svgButtons = (props) => {
    let menuArray = Object.values(sideMenuItems);
    return (
        menuArray.slice(props.a,props.b).map(item => {
            return (
                <li className = "adjustItems" tabIndex = {item.index}>
                    <svg preserveAspectRatio="xMidYMid meet" focusable="false"  style={{pointerEvents: "none", display: "block"}}><g><path d ={item.path} fill = "#ffffff"></path></g></svg>
                    <span>{item.name}</span>
                </li>
            )
        })
    )
}

export default svgButtons
