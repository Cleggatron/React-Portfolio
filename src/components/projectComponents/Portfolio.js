import React from "react";
import FiveStarLocal from "../../assets/FiveStarLocal.PNG"
import ClearSky from "../../assets/ClearSky.PNG"
import CodeShare from "../../assets/codeShare.PNG"
import GoogleBooks from "../../assets/GoogleBooks.PNG"
import BudgetTracker from "../../assets/BudgetTracker.PNG"
import TechBlog from "../../assets/TechBlog.PNG"

function Portfolio() {
    return (
        <div className="padding1REM flex-horizontal flex-wrap spaceAround alignCenter lightBackground">
            <div className="width45 wrap borderBottom">
                <h3>
                    Code Share
                </h3>
                <a className="max-width100" href="https://mighty-ridge-50767.herokuapp.com/" ><img src={CodeShare} className="max-width100" alt="Screenshot of the working page" /></a>
                <p>A social site to allow users to chare code fragements and comment on other users' posts.</p>
                <p>My Role: GraphQL Implementation, Model Design, Component Creation</p>
                <p>Technologies Used: Node, Express, MongoDB, Mongoose, React, GraphQL, Material UI</p>
                <p><a href="https://github.com/Cleggatron/code-sharers">Github Repo</a></p>
            </div>

            <div className="width45 wrap borderBottom">
                <h3>
                    Five Star Local
                </h3>
                <a className="max-width100" href="https://vast-journey-10843.herokuapp.com/login" ><img src={FiveStarLocal} className="max-width100" alt="Screenshot of the working page" /></a>
                <p>A restaurant posting and review site, using logging tecnology to track http requests to check site use.</p>
                <p>My Role: Handlebars creation, frontend Javascript, implemented logging with Morgan and Winston</p>
                <p>Technologies Used: Node, Express, MySQL, Sequelize, Handlebars, Bootstrap, Morgan, Winston</p>
                <p><a href="https://github.com/Cleggatron/My-5-Star-Local">Github Repo</a></p>
            </div>

            <div className="width45 wrap borderBottom">
                <h3>
                    Clear Sky
                </h3>
                <a className="max-width100" href="https://cleggatron.github.io/ClearSky/"><img src={ClearSky} className="max-width100" alt="Screenshot of the working page" /></a>
                <p>A site that allows the user to check what astonomical bodies are in the sky, as well as check the weather</p>
                <p>My Role: Frontend Javascript, dynamically building page elements</p>
                <p>Technologies Used: HTML, CSS, Javascript, Semantic UI</p>
                <p><a href="https://github.com/Cleggatron/ClearSky">Github Repo</a></p>
            </div>

            <div className="width45 wrap borderBottom">
                <h3>
                    Google Book Search
                </h3>
                <a className="max-width100" href="https://lit-island-86967.herokuapp.com/"><img src={GoogleBooks} className="max-width100" alt="Screenshot of the working page" /></a>
                <p>A site that allows users to search for books using a Google API, and save them to the user's favourites.</p>
                <p>My Role: Refactor front and backend to use GraphQL rather than REST.</p>
                <p>Technologies Used: Node, Express, MongoDB, Mongoose, React, GraphQL, BootStrap</p>
                <p><a href="https://github.com/Cleggatron/GoogleBooks-GraphQL-Refactor">Github Repo</a></p>
            </div>

            <div className="width45 wrap borderBottom">
                <h3>
                    Budget Tracker PWA
                </h3>
                <a className="max-width100" href="https://protected-eyrie-17990.herokuapp.com/"><img src={BudgetTracker} className="max-width100" alt="Screenshot of the working page" /></a>
                <p>A site that allows the user to track their budget with offline support.</p>
                <p>My Role: Refactor to allow the offline support in the manner of a PWA</p>
                <p>Technologies Used: Node, Express, Webpack, IndexedDB, MongoDB, Mongoose</p>
                <p><a href="https://github.com/Cleggatron/Track-Your-Budget">Github Repo</a></p>
            </div>

            <div className="width45 wrap borderBottom">
                <h3>
                    Tech Blog
                </h3>
                <a className="max-width100" href="https://whispering-dawn-83042.herokuapp.com/"><img src={TechBlog} className="max-width100" alt="Screenshot of the working page" /></a>
                <p>A full stack blogging website.</p>
                <p>My Role: Sole creator</p>
                <p>Technologies Used: Node, Express, HTML, CSS, Javscript, MySQL, Sequelize, Handlebars</p>
                <p><a href="https://github.com/Cleggatron/Tech-Blog">Github Repo</a></p>
            </div>
        </div>
    )
}

export default Portfolio;