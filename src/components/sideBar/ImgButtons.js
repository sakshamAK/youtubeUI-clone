import sideMenuItems from "./dictionary";

const ImgButtons = (props) => {
    let menuArray = Object.values(sideMenuItems);

    return (
        menuArray.slice(props.a, props.b).map(item => {
            return (
                <li className = "adjustItems" tabIndex = {item.index}>
                    <img className = "extraIcons" alt="yt icons" src={item.path} />
                    <span>{item.name}</span>
                </li>
            )
        })
    )
}

export default ImgButtons
