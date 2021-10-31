import React from "react";
import Nav from "./headerComponents/Nav"
function Header({currentPage, setCurrentPage}){
    return (
        <div className="flex-horizontal spaceAround padding1REM borderBottom">
            <div className="width100">
                <h1>
                    David Clegg
                </h1>
            </div>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}

export default Header;