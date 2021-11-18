import React, { Fragment, useState } from 'react'

const InfoComment = () => {
    let [myStyle, setMyStyle] = useState({ gridColumnStart: "2", maxWidth: "650px", letterSpacing: "0", margin:"15px 0", color: "white", height: "85px", overflow: "hidden" });
    let [showButton, setButtonStat] = useState("SHOW MORE")
    function showMore() {
        if(showButton === "SHOW MORE"){
            setMyStyle({
                ...myStyle,
                height: ""
            })
            setButtonStat("SHOW LESS")
        } else {
            setMyStyle({gridColumnStart: "2", maxWidth: "650px", letterSpacing: "0", margin: "15px 0", color: "white", height: "85px", overflow: "hidden" })
            setButtonStat("SHOW MORE")
        }
    }
    return (
        <Fragment>
            <section>
                <div id="video-details">
                    <h2>Step up your front-end skills with these 5 resources</h2>
                    <div id="views-and-buttons">
                        <p>210,429 views • May 6, 2021</p>
                        <span style={{ display: "flex", marginBottom: "-10px" }}>
                            <svg viewBox="0 0 24 24" focusable="false" style={{ marginRight: "8px", pointerEvents: "none", display: "block", width: "25px" }}><g><path stroke="white" stroke-width="0.1" fill="white" d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></g></svg>
                            <h4>15K</h4>
                            <svg viewBox="0 0 24 24" focusable="false" style={{ margin: "0 5px 0 20px", pointerEvents: "none", display: "block", width: "25px" }}><g><path stroke="white" stroke-width="0.1" fill="white" d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path></g></svg>
                            <h4>53</h4>
                            <svg viewBox="0 0 24 24" focusable="false" style={{ margin: "0 5px 0 20px", pointerEvents: "none", display: "block", width: "25px" }}><g><path stroke="white" stroke-width="0.1" fill="white" d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z"></path></g></svg>
                            <h4>SHARE</h4>
                            <svg viewBox="0 0 24 24" focusable="false" style={{ margin: "0 5px 0 20px", pointerEvents: "none", display: "block", width: "25px" }}><g><path stroke="white" stroke-width="0.1" fill="white" d="M16.5,3C19.02,3,21,5.19,21,7.99c0,3.7-3.28,6.94-8.25,11.86L12,20.59l-0.74-0.73l-0.04-0.04C6.27,14.92,3,11.69,3,7.99 C3,5.19,4.98,3,7.5,3c1.4,0,2.79,0.71,3.71,1.89L12,5.9l0.79-1.01C13.71,3.71,15.1,3,16.5,3 M16.5,2c-1.74,0-3.41,0.88-4.5,2.28 C10.91,2.88,9.24,2,7.5,2C4.42,2,2,4.64,2,7.99c0,4.12,3.4,7.48,8.55,12.58L12,22l1.45-1.44C18.6,15.47,22,12.11,22,7.99 C22,4.64,19.58,2,16.5,2L16.5,2z M11.33,10.86c0.2,0.14,0.53,0.26,1,0.36c0.47,0.1,0.86,0.22,1.18,0.35 c0.99,0.4,1.49,1.09,1.49,2.07c0,0.7-0.28,1.27-0.83,1.71c-0.33,0.26-0.73,0.43-1.17,0.54V17h-2v-1.16 c-0.18-0.05-0.37-0.1-0.53-0.19c-0.46-0.23-0.92-0.55-1.18-0.95C9.15,14.48,9.06,14.24,9,14h2c0.05,0.09,0.07,0.18,0.15,0.25 c0.23,0.19,0.54,0.29,0.92,0.29c0.36,0,0.63-0.07,0.82-0.22s0.28-0.35,0.28-0.59c0-0.25-0.11-0.45-0.34-0.6s-0.59-0.27-1.1-0.39 c-1.67-0.39-2.51-1.16-2.51-2.34c0-0.68,0.26-1.26,0.78-1.71c0.28-0.25,0.62-0.43,1-0.54V7h2v1.12c0.46,0.11,0.85,0.29,1.18,0.57 C14.59,9.05,14.9,9.48,15,10h-2c-0.04-0.09-0.1-0.17-0.16-0.24c-0.17-0.19-0.44-0.29-0.81-0.29c-0.32,0-0.56,0.08-0.74,0.24 c-0.17,0.16-0.26,0.36-0.26,0.6C11.03,10.53,11.13,10.72,11.33,10.86z"></path></g></svg>
                            <h4>THANKS</h4>
                            <svg viewBox="0 0 24 24" focusable="false" style={{ margin: "0 5px 0 20px", pointerEvents: "none", display: "block", width: "25px" }}><g><path stroke="white" stroke-width="0.1" fill="white" d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z"></path></g></svg>
                            <h4>SAVE</h4>
                        </span>
                    </div>
                    <hr style={{ backgroundColor: "#3e3e3e", color: "#3e3e3e", border: "none", height: "1px" }} />
                    <section id="videoInfo">
                        <img class="profileImage" style={{ height: "50px", width: "50px" }} alt="" src="https://yt3.ggpht.com/ytc/AKedOLT1tLx7BgAa7_SHaXE0hDRjQu1BRihsEDZ3lmUUcg=s68-c-k-c0x00ffffff-no-rj" />
                        <div id="video-info-profile">
                            <span>
                                <h4 style={{ margin: "5px 0 0 0", fontWeight: "500" }}>Kevin Powell</h4>
                                <p style={{ margin: "0", fontSize: "13px" }}>359K subscribers</p>
                            </span>
                            <button id="subscribe-button">SUBSCRIBE</button>
                        </div>
                        <p style={myStyle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            <p className="infoDetails">🔗 Links </p>
                            ✅ Lorem ipsum dolor sit amet<br />
                            ✅ Lorem ipsum dolor sit amet<br />
                            ✅ Lorem ipsum dolor sit amet<br />
                            ✅ Lorem ipsum dolor sit amet<br />
                            ✅ Lorem ipsum dolor sit amet<br />
                            ✅ Lorem ipsum dolor sit amet<br />

                            <p className="infoDetails">⌚ Timestamps</p>
                            00:00 - Introduction<br />
                            01:39 - Acknowledgement<br />
                            03:50 - Project Details<br />
                            06:06 - Language Used<br />
                            07:38 - Conclusion<br />
                            10:01 - Reward<br /><br />

                            #css<br /><br />

                            --<br /><br />

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p style={{ gridColumnStart: "2", margin: "0", cursor: "pointer" }} onClick={showMore}>{showButton}</p>
                    </section>
                    <hr style={{ backgroundColor: "#3e3e3e", color: "#3e3e3e", border: "none", height: "1px" }} />
                </div>
            </section>
        </Fragment>
    )
}

export default InfoComment