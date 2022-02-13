import React, {useState} from "react"

//import components here
import Header from "./Header"
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import Contact from "./Contact"

function Project(){

  const [currentPage, setCurrentPage] =  useState("Home")
  
  const renderPage = () => {
    if (currentPage === "Home"){
      return <AboutMe/>
    } 
    if (currentPage === "Portfolio"){
      return <Portfolio/>
    }
    return <Contact/>
    
  }
  
    return (
        <>
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            {renderPage()}
        </>
    )
}

export default Project;