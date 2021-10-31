import React, {useState} from "react"

function Nav({currentPage, setCurrentPage}){
    
    const handlePageChange = page => setCurrentPage(page);
    return (
        <div>
               <ul>
                   <li>
                        <a
                        href="#Home"
                        onClick={() => handlePageChange("Home")}
                        className={currentPage === "Home" ? "activePage" : "inactivePage"}
                        >
                            About Me
                        </a>
                   </li>
                        <a
                        href="#CV"
                        onClick={() => handlePageChange("CV")}
                        className={currentPage === "CV" ? "activePage" : "inactivePage"}
                        >
                            CV
                        </a>
                   <li>
                        <a
                        href="#Portfolio"
                        onClick={() => handlePageChange("Portfolio")}
                        className={currentPage === "Portfolio" ? "activePage" : "inactivePage"}
                        >
                            Portfolio
                        </a>
                   </li>
                        <a
                        href="#Contact"
                        onClick={() => handlePageChange("Contact")}
                        className={currentPage === "Contact" ? "activePage" : "inactivePage"}
                        >
                            Contact
                        </a>
                   <li>
                       
                   </li>
               </ul>
            </div>
    )
}

export default Nav