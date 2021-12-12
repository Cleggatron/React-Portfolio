import React from "react";
import FiveStarLocal from "../../assets/FiveStarLocal.PNG"
import ClearSky from "../../assets/ClearSky.PNG"
import CodeShare from "../../assets/codeShare.PNG"
import GoogleBooks from "../../assets/GoogleBooks.PNG"

function Portfolio() {
    return (
        <div className="padding1REM flex-horizontal flex-wrap spaceAround alignCenter lightBackground">
            <div className="width45 wrap borderBottom">
                <h3>
                    Code Share
                </h3>
                <a className="max-width100" href="https://mighty-ridge-50767.herokuapp.com/" ><img src={CodeShare} className="max-width100" alt="Screenshot of the working page" /></a>
                <p>Technologies Used: Node, Express, MongoDB, Mongoose, React, GraphQL, Material UI</p>
                <p><a href="https://github.com/Cleggatron/code-sharers">Github Repo</a></p>
            </div>

            <div className="width45 wrap borderBottom">
                <h3>
                    Five Star Local
                </h3>
                <a className="max-width100" href="https://vast-journey-10843.herokuapp.com/login" ><img src={FiveStarLocal} className="max-width100" alt="Screenshot of the working page" /></a>
                <p>Technologies Used: Node, Express, MySQL, Sequelize, Handlebars, Bootstrap</p>
                <p><a href="https://github.com/Cleggatron/My-5-Star-Local">Github Repo</a></p>
            </div>

            <div className="width45 wrap borderBottom">
                <h3>
                    Clear Sky
                </h3>
                <a className="max-width100" href="https://cleggatron.github.io/ClearSky/"><img src={ClearSky} className="max-width100" alt="Screenshot of the working page" /></a>
                <p>Technologies Used: HTML, CSS, Javascript, Semantic UI</p>
                <p><a href="https://github.com/Cleggatron/ClearSky">Github Repo</a></p>
            </div>



            <div className="width45 wrap borderBottom">
                <h3>
                    Google Book Search
                </h3>
                <a className="max-width100" href="https://lit-island-86967.herokuapp.com/"><img src={GoogleBooks} className="max-width100" alt="Screenshot of the working page" /></a>
                <p>Technologies Used: Node, Express, MongoDB, Mongoose, React, GraphQL, BootStrap</p>
                <p><a href="https://github.com/Cleggatron/GoogleBooks-GraphQL-Refactor">Github Repo</a></p>
            </div>

            <div className="width45 wrap borderBottom">

            </div>

            <div className="width45 wrap borderBottom">

            </div>
        </div>
    )
}

export default Portfolio;