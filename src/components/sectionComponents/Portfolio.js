import React from "react";
import FiveStarLocal from "../../assets/FiveStarLocal.png"
import ClearSky from "../../assets/ClearSky.png"
import EmployeeTracker from "../../assets/EmployeeTracker.png"
import NoteTaker from "../../assets/NoteTaker.png"
import PasswordGenerator from "../../assets/PasswordGenerator.png"
import TeamProfileGenerator from "../../assets/TeamProfileGenerator.png"


function Portfolio(){
    return(
        <div>
            <div>
                <h3>
                    Five Star Local
                </h3>
                <a href="https://vast-journey-10843.herokuapp.com/login" alt="Screenshot of the working page"><img src={FiveStarLocal}/></a>
                <p>Technologies Used: Node, Express, MySQL, Sequelize, Handlebars, Bootstrap</p>
                <p><a href="https://github.com/Cleggatron/My-5-Star-Local">Github Repo</a></p>
            </div>
            <div>
                <h3>
                    Clear Sky
                </h3>
                <a href="https://cleggatron.github.io/ClearSky/" alt="Screenshot of the working page"><img src={ClearSky}/></a>
                <p>Technologies Used: HTML, CSS, Javascript, Semantic UI</p>
                <p><a href="https://github.com/Cleggatron/ClearSky">Github Repo</a></p>
            </div>
            <div>
                <h3>
                    Employee Tracker
                </h3>
                <a href="https://github.com/Cleggatron/Employee-Tracker" alt="Screenshot of the working page"><img src={EmployeeTracker}/></a>
                <p>Technologies Used: Node, MYSQL, Inquirer.js</p>
                <p><a href="https://github.com/Cleggatron/Employee-Tracker">Github Repo</a></p>
            </div>
            <div>
                <h3>
                    Note Taker
                </h3>
                <a href="https://vast-everglades-18367.herokuapp.com/" alt="Screenshot of the working page"><img src={NoteTaker}/></a>
                <p>Technologies Used: Node, Express, uuid.js</p>
                <p><a href="https://github.com/Cleggatron/Note_Taker">Github Repo</a></p>
            </div>
            <div>
                <h3>
                    Random Password Generator
                </h3>
                <a href="https://cleggatron.github.io/RandomPasswordGenerator/" alt="Screenshot of the working page"><img src={PasswordGenerator}/></a>
                <p>Technologies Used: HTML, CSS, Javascript</p>
                <p><a href="https://github.com/Cleggatron/RandomPasswordGenerator">Github Repo</a></p>
            </div>
            <div>
                <h3>
                    Team Profile Generator
                </h3>
                <a href="https://github.com/Cleggatron/TeamProfileGenerator" alt="Screenshot of the working page"><img src={TeamProfileGenerator}/></a>
                <p>Technologies Used: Node, Inquirer.js, Jest.js</p>
                <p><a href="https://github.com/Cleggatron/TeamProfileGenerator">Github Repo</a></p>
            </div>
        </div>
    )
}

export default Portfolio;