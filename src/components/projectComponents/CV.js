import React from "react";

function CV(){
    return(
        <div className="padding1REM borderBottom lightBackground">
            <h3>My CV is available <a href="https://docs.google.com/document/d/1hl8R90ub-EuJ8e8Myesh4Btm0MNxuAwhIYJBjvghg48/export?format=pdf">here</a></h3>
            <br/>
            <h3>Front End Proficiencies:</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Material UI</li>
            </ul>
            <br/>
            <h3>Back End Proficiencies:</h3>
            <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>GraphQL</li>
                <li>MYSQL</li>
                <li>Sequelize ORM</li>
                <li>MongoDB</li>
                <li>Mongoose ORM</li>
                <li>Handlebars</li>
                <li>Jest</li>
            </ul>
        </div>
    )
}

export default CV;