import React, { useState } from "react";

import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/sectionComponents/AboutMe";
import CV from "./components/sectionComponents/CV";
import Portfolio from "./components/sectionComponents/Portfolio";
import Contact from "./components/sectionComponents/Contact";

function App() {

  const [currentPage, setCurrentPage] = useState("Home");

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
  
  const handlePageChange = page => setCurrentPage(page)

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      
      {renderPage()}

      <Footer />
    </div>
  );
}

export default App;
