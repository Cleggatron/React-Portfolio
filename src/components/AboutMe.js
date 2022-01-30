import React from "react"

//import mui components
import {Grid} from "@mui/material"

//import images
import Me from "../assets/me.jpg"

import HTML from "../assets/logos/html5"
import CSS from "../assets/logos/css3"

function AboutMe(){
    
    return (<>
    <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2, md:3}}>
        <Grid item xs={12}>
            <h1>David Clegg</h1>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
            <img src={Me}></img>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
            <p>Full stack web developer with a background in resource planning. This has taught me excellent communication, forward thinking, and workload balancing. Recently completed a Certificate in full stack web development through a bootcamp with the University of Birmingham. I am someone with a passion for learning new skills and applying them to solve new problems. This is something that has been useful in recent group projects where we have leveraged our newly developed skills, along with agile working practises, to create a product with real world application, adhering to the MVC organisational paradigm. Below are some of the technologies I am familiar with.</p>
        </Grid>
        <Grid item xs={12} container rowSpacing={1} columnSpacing={{xs:1}}>
            <Grid item xs={4} sm={2} md={1}>
                <img src={HTML}></img>
            </Grid>
            <Grid item xs={4} sm={2} md={1}>
                <img src={CSS}></img>
            </Grid>            

        </Grid>



    </Grid>
    </>)
}

export default AboutMe