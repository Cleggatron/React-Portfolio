import React from "react"

//import mui components
import { Box } from "@mui/material";


function Contact() {
  return (
    <>
      <h1>Contact me at:</h1>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}>
        <Box
          className="card"
          sx={{
            width: "40%",
            height: "Auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}>
          <h2>Email:</h2>
          <p><a href="mailto:david.robert.clegg@gmail.com">david.robert.clegg@gmail.com</a></p>
        </Box>
        <Box
          className="card"
          sx={{
            width: "40%",
            height: "Auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}>
          <h2>Phone:</h2>
          <p>07531-537-845</p>
        </Box>
        <Box
          className="card"
          sx={{
            width: "40%",
            height: "Auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}>
          <h2>Github</h2>
          <p><a href="https://github.com/Cleggatron">My Github profile</a></p>
        </Box>
        <Box
          className="card"
          sx={{
            width: "40%",
            height: "Auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}>
          <h2>LinkedIn:</h2>
          <p><a href="https://www.linkedin.com/in/david-clegg-86b239a6/">My LinkedIn Profile</a></p>
        </Box>
        <Box
          className="card"
          sx={{
            width: "40%",
            height: "Auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}>
          <h2>CV:</h2>
          <p>Or feel free to grab a copy of my CV <a href="https://drive.google.com/uc?export=download&id=12qJAnQR4K95eHKvLNCPsZ2HNtq1ZOZWN">here</a></p>
        </Box>
      </Box>


    </>
  )


}

export default Contact