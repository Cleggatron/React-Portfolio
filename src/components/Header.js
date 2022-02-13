import React from "react";
import {Link} from "@mui/material"

function Header ({currentPage, setCurrentPage}) {

    return (
        <nav className="Header">
            <Link href="#AboutMe"
                onClick={() => setCurrentPage("AboutMe")}
            >AboutMe
            </Link>
            <Link href="#Portfolio"
                onClick={() => setCurrentPage("Portfolio")}
            >Portfolio
            </Link>
            <Link href="#Contact"
                onClick={() => setCurrentPage("Contact")}
            >Contact
            </Link>
            <Link href="#CV">
                CV
            </Link>
        </nav>
    )

}

export default Header