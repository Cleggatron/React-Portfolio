import React, {useState} from "react"

import AboutMe from "./projectComponents/AboutMe";
import CV from "./projectComponents/CV";
import Portfolio from "./projectComponents/Portfolio";
import Contact from "./projectComponents/Contact";
import Header from "./header";
import Footer from "./footer";

function Project(){

  const [currentPage, setCurrentPage] =  useState("Home")

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

    return (
        <>
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            {renderPage()}
          <Footer/>
        </>
    )
}

export default Project;