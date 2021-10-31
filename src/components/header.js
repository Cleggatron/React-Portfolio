import React from "react";

function Header( {currentPage, handlePageChange}){
    return (
        <div>
            <div>
                <h1>
                    David Clegg
                </h1>
            </div>
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
        </div>
    )
}

export default Header;