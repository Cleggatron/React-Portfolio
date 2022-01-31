import React from "react"

//import mui components
import {Grid} from "@mui/material"

//import images
import Me from "../assets/me.jpg"

import HTML from "../assets/logos/html5.png"
import CSS from "../assets/logos/css3.png"
import Javascript from "../assets/logos/javascript.png"
import MySQL from "../assets/logos/mysql.png"
import MongoDB from "../assets/logos/mongodb.png"
import ReactJS from "../assets/logos/react.png"
import ExpressJs from "../assets/logos/expressjs.png"
import Git from "../assets/logos/git.png"
import Github from "../assets/logos/github.png"
import Node from "../assets/logos/NodeJs.png"



function AboutMe(){
    
    return (<>
    <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2, md:3}}>
        <Grid item xs={12}>
            <h1>David Clegg</h1>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
            <img src={Me} alt="David Clegg"/>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
            <p>Full stack web developer with a background in resource planning. This has taught me excellent communication, forward thinking, and workload balancing. Recently completed a Certificate in full stack web development through a bootcamp with the University of Birmingham. I am someone with a passion for learning new skills and applying them to solve new problems. This is something that has been useful in recent group projects where we have leveraged our newly developed skills, along with agile working practises, to create a product with real world application, adhering to the MVC organisational paradigm. Below are some of the technologies I am familiar with.</p>
        </Grid>
        <Grid item xs={12} container rowSpacing={2} columnSpacing={{xs:2, sm: 4, md: 8}}>
            <Grid item xs={4} sm={3} md={2}>
                <img src={HTML} className="badge" alt="HTML5 Badge"/>
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
                <img src={CSS} className="badge" alt="CSS3 Badge"/>
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
                <img src={Javascript} className="badge" alt="Javascript Badge"/>
            </Grid>            
            <Grid item xs={4} sm={3} md={2}>
                <img src={Node} className="badge" alt="Node Badge"/>
            </Grid>            
            <Grid item xs={4} sm={3} md={2}>
                <img src={ExpressJs} className="badge" alt="Express.js Badge"/>
            </Grid>            
            <Grid item xs={4} sm={3} md={2}>
                <img src={ReactJS} className="badge" alt="React Badge"/>
            </Grid>            
            <Grid item xs={4} sm={3} md={2}>
                <img src={MongoDB} className="badge" alt="MongoDB Badge"/>
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
                <img src={MySQL} className="badge" alt="MySQL Badge"/>
            </Grid>            
            <Grid item xs={4} sm={3} md={2}>
                <img src={Git} className="badge" alt="Git Badge"/>
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
                <img src={Github} className="badge" alt="Github Badge"/>
            </Grid>            
        </Grid>
    </Grid>
    </>)
}

export default AboutMe