import React from "react";
import Me from "../../assets/me.jpg"

function AboutMe(){
    return (
    <div>
        <div>
            <img src={Me} alt="A picture of me" />
        </div>
        <div>
            <h2>
                About Me:
            </h2>
            <p>
            Full stack web developer with a background in resource planning. Lending itself to forward thinking and workload balancing. Currently completing a full stack web development bootcamp through the University of Birmingham, gaining skills in Javascript, MYSQL, and CSS. I am someone with a passion for learning new skills and applying them to solve new problems.
            </p>
        </div>
    </div>
    )
}

export default AboutMe;