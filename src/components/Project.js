import React, {useState} from "react"

//import components here
import Header from "./Header"
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"

function Project(){

  const [currentPage, setCurrentPage] =  useState("Home")
  /*
  const renderPage = () => {
    if (currentPage === "Home"){
      return <AboutMe/>
    } else if(currentPage === "CV") {
      return <CV/>
    } else if (currentPage === "Portfolio"){
      return <Portfolio/>
    } else {
      return <Contact/>
    }
  }
  */
    return (
        <>
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            {/*{renderPage()}*/}
            <Portfolio/>
        </>
    )
}

export default Project;