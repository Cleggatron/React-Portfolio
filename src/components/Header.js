import React from "react";
import {Link} from "@mui/material"

function Header ({currentPage, setCurrentPage}) {

    return (
        <nav className="Header">
            <Link href="#AboutMe"
                onClick={() => setCurrentPage("Home")}
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
            <Link href="https://drive.google.com/uc?export=download&id=12qJAnQR4K95eHKvLNCPsZ2HNtq1ZOZWN">
                CV
            </Link>
        </nav>
    )

}

export default Header