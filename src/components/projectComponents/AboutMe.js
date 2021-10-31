import React from "react";
import Me from "../../assets/me.jpg"

function AboutMe(){
    return (
        <div className="width100 flex-vertical alignCenter justifyCenter padding1REM borderBottom">
            <div className="width50">
                <img src={Me} alt="A picture of me" className="borderRad25"/>
            </div>
            <div className="width50">
                <h2>
                    About Me:
                </h2>
                <p>
                I am a junior full stack web developer with a background in Resource Planning looking to bring my problem solving skills to the table. I am currently completing a full stack web development bootcamp hosted through the University of Birmingham. I have knowledge and experience of the MERN stack as well as other technolgies MYSQL and the Jest testing library.  
                </p>
            </div>
        </div>
    )
}

export default AboutMe;