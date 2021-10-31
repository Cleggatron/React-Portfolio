import React from "react";
import Nav from "./headerComponents/Nav"
function Header({currentPage, setCurrentPage}){
    return (
        <div>
            <div>
                <h1>
                    David Clegg
                </h1>
            </div>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}

export default Header;