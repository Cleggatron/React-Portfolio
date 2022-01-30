import React, {useState} from "react"


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