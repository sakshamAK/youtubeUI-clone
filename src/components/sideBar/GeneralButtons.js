import sideMenuItems from "./dictionary";
const GeneralButtons = () => {

    let menuArray = Object.values(sideMenuItems);
    return (
        <ul className = "sideMenu">
            {
                menuArray.slice(0,3).map(item => {
                    return (
                        <li className = "adjustItems" tabIndex = {item.index}>
                            <svg preserveAspectRatio="xMidYMid meet" focusable="false"  style={{pointerEvents: "none", display: "block"}}><g><path d ={item.path} fill = "#ffffff"></path></g></svg>
                            <span>{item.name}</span>
                        </li>
                    )
                })
            }
            <hr />
            {
                menuArray.slice(3,5).map(item => {
                    return (
                        <li className = "adjustItems" tabIndex = {item.index}>
                            <svg preserveAspectRatio="xMidYMid meet" focusable="false"  style={{pointerEvents: "none", display: "block"}}><g><path d ={item.path} fill = "#ffffff"></path></g></svg>
                            <span>{item.name}</span>
                        </li>
                    )
                })
            }
            <hr />
            <span className = "subHeadings">BEST OF YOUTUBE</span>
            {
                menuArray.slice(5,15).map(item => {
                    return (
                        <li className = "adjustItems" tabIndex = {item.index}>
                            <img className = "extraIcons" alt="" src={item.path} />
                            <span>{item.name}</span>
                        </li>
                    )
                })
            }
            <hr />
            {
                menuArray.slice(15,16).map(item => {
                    return (
                        <li className = "adjustItems" tabIndex = {item.index}>
                            <svg preserveAspectRatio="xMidYMid meet" focusable="false"  style={{pointerEvents: "none", display: "block"}}><g><path d ={item.path} fill = "#ffffff"></path></g></svg>
                            <span>{item.name}</span>
                        </li>
                    )
                })
            }
            <hr />
            <span className = "subHeadings">MORE FROM YOUTUBE</span>
            {
                menuArray.slice(16,18).map(item => {
                    return (
                        <li className = "adjustItems" tabIndex = {item.index}>
                            <svg preserveAspectRatio="xMidYMid meet" focusable="false"  style={{pointerEvents: "none", display: "block"}}><g><path d ={item.path} fill = "#ffffff"></path></g></svg>
                            <span>{item.name}</span>
                        </li>
                    )
                })
            }
            <hr />
            {
                menuArray.slice(18,22).map(item => {
                    return (
                        <li className = "adjustItems" tabIndex = {item.index}>
                            <svg preserveAspectRatio="xMidYMid meet" focusable="false"  style={{pointerEvents: "none", display: "block"}}><g><path d ={item.path} fill = "#ffffff"></path></g></svg>
                            <span>{item.name}</span>
                        </li>
                    )
                })
            }
            <hr />
            <span className = "subHeadings" id = "sideFooter">About Press Copyright<br /> Contact us Creators Advertise Developers <br /><br /> Terms Privacy <span style = {{wordSpacing : "2px"}}>Policy &amp; Safety</span> <br />How YouTube works Test new features<br /><br /> <span style = {{fontWeight: "100", wordSpacing: "0"}}>© 2021 Google LLC</span></span>
            
        </ul>
    )
}

export default GeneralButtons
