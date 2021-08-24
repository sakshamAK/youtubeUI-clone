import SvgButtons from "../sideBar/SvgButtons";
import ImgButtons from "../sideBar/ImgButtons";


const GeneralButtons = () => {


    return (
        <ul className = "sideMenu">
            <SvgButtons a="0" b="3" />
            <hr />
            <SvgButtons a="3" b="5" />
            <hr />
            <span className = "subHeadings">BEST OF YOUTUBE</span>
            <ImgButtons a="5" b="15" />
            <hr />
            <SvgButtons a="15" b="16" />
            <hr />
            <span className = "subHeadings">MORE FROM YOUTUBE</span>
            <SvgButtons a="16" b="18" />
            <hr />
            <SvgButtons a="18" b="22" />
            <hr />
            <span className = "subHeadings" id = "sideFooter">About Press Copyright<br /> Contact us Creators Advertise Developers <br /><br /> Terms Privacy <span style = {{wordSpacing : "2px"}}>Policy &amp; Safety</span> <br />How YouTube works Test new features<br /><br /> <span style = {{fontWeight: "100", wordSpacing: "0"}}>© 2021 Google LLC</span></span>
        </ul>
    )
}

export default GeneralButtons
