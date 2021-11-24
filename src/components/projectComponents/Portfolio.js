import React from "react";
import FiveStarLocal from "../../assets/FiveStarLocal.PNG"
import ClearSky from "../../assets/ClearSky.PNG"
import EmployeeTracker from "../../assets/EmployeeTracker.png"
import NoteTaker from "../../assets/NoteTaker.PNG"
import PasswordGenerator from "../../assets/PasswordGenerator.png"
import TeamProfileGenerator from "../../assets/TeamProfileGenerator.png"


function Portfolio(){
    return(
        <div className="padding1REM flex-horizontal flex-wrap spaceAround alignCenter lightBackground">
            <div className="width45 wrap borderBottom">
                <h3>
                    Five Star Local
                </h3>
                <a className="max-width100" href="https://vast-journey-10843.herokuapp.com/login" ><img src={FiveStarLocal} className="max-width100" alt="Screenshot of the working page"/></a>
                <p>Technologies Used: Node, Express, MySQL, Sequelize, Handlebars, Bootstrap</p>
                <p><a href="https://github.com/Cleggatron/My-5-Star-Local">Github Repo</a></p>
            </div>

            <div className="width45 wrap borderBottom">
                <h3>
                    Clear Sky
                </h3>
                <a className="max-width100" href="https://cleggatron.github.io/ClearSky/"><img src={ClearSky} className="max-width100" alt="Screenshot of the working page"/></a>
                <p>Technologies Used: HTML, CSS, Javascript, Semantic UI</p>
                <p><a href="https://github.com/Cleggatron/ClearSky">Github Repo</a></p>
            </div>

            <div className="width45 wrap borderBottom">
                <h3>
                    Employee Tracker
                </h3>
                <a className="max-width100" href="https://github.com/Cleggatron/Employee-Tracker"><img src={EmployeeTracker} className="max-width100" alt="Screenshot of the working page"/></a>
                <p>Technologies Used: Node, MYSQL, Inquirer.js</p>
                <p><a href="https://github.com/Cleggatron/Employee-Tracker">Github Repo</a></p>
            </div>

            <div className="width45 wrap borderBottom">
                <h3>
                    Note Taker
                </h3>
                <a className="max-width100" href="https://vast-everglades-18367.herokuapp.com/"><img src={NoteTaker} className="max-width100" alt="Screenshot of the working page"/></a>
                <p>Technologies Used: Node, Express, uuid.js</p>
                <p><a href="https://github.com/Cleggatron/Note_Taker">Github Repo</a></p>
            </div>

            <div className="width45 wrap borderBottom">
                <h3>
                    Random Password Generator
                </h3>
                <a className="max-width100" href="https://cleggatron.github.io/RandomPasswordGenerator/"><img src={PasswordGenerator} className="max-width100" alt="Screenshot of the working page"/></a>
                <p>Technologies Used: HTML, CSS, Javascript</p>
                <p><a href="https://github.com/Cleggatron/RandomPasswordGenerator">Github Repo</a></p>
            </div>

            <div className="width45 wrap borderBottom">
                <h3>
                    Team Profile Generator
                </h3>
                <a className="max-width100" href="https://github.com/Cleggatron/TeamProfileGenerator"><img src={TeamProfileGenerator} className="max-width100" alt="Screenshot of the working page"/></a>
                <p>Technologies Used: Node, Inquirer.js, Jest.js</p>
                <p><a href="https://github.com/Cleggatron/TeamProfileGenerator">Github Repo</a></p>
            </div>
        </div>
    )
}

export default Portfolio;