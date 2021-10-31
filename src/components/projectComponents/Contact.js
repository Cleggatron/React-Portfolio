import React, {useState} from "react"
import validateEmail from "../../utils/utils"

function Contact(){

    //Create all our state for the form
    //All initial values at blank
    const [name, setName] =  useState("");
    const [message, setMessage] =  useState("");
    const [email, setEmail] =  useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        //Destructure event for variables
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        //update state, and check for blank changes, updating error message
        if(inputType === "name"){
            setName(inputValue)
        } else if (inputType === "message"){
            setMessage(inputValue)
        } else {
            setEmail(inputValue)
            if(!validateEmail(email))
            setErrorMessage("You must enter a valid email address!")
        }
    }

    const handleFormSubmit = (e) => {
        //Prevent refresh
        e.preventDefault();

        setName("");
        setMessage("");
        setEmail("");
        setErrorMessage("");
    }

    const blankInput = (inputName) => {
        setErrorMessage(`You must input a value for ${inputName}`)
    }

    //handle people leaving elements without a value
    const mouseLeave = (e) => {
        const {target} = e;
        const exitType = target.name;
        const exitValue = target.value;

        if(!exitValue){
            blankInput(exitType);
        }
    }

    return(
        <div className="padding1REM borderBottom lightBackground">
            <h2> Contact Me:</h2>
            <form>
                <label>Name:</label>
                <br/>
                <input
                value={name}
                onChange={handleInputChange}
                onMouseLeave={mouseLeave}
                type="text"
                placeholder="Your name here"
                name="name"
                >
                </input>
                <br/>
                <label>Email address:</label>
                <br/>
                <input
                value={email}
                onChange={handleInputChange}
                onMouseLeave={mouseLeave}
                type="text"
                placeholder="Your email address here"
                name="email"
                >
                </input>
                <br/>
                <label>Message: </label>
                <br/>
                <textarea
                value={message}
                onChange={handleInputChange}
                onMouseLeave={mouseLeave}
                type="text"
                placeholder="Your message here"
                name="message"
                rows="10"
                columns="20"
                />
                <br/>
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

export default Contact;
