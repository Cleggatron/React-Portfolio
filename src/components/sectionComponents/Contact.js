import React from "react"

function Contact(){
    return(
        <div>
            <h2> Contact Me:</h2>
            <form>
                <label>Name:</label>:
                <br/>
                <input
                type="text"
                placeholder="Your name here"
                name="nameText"
                >
                </input>
                <br/>
                
                <label>Email address:</label>
                <br/>
                <input
                type="text"
                placeholder="Your email address here"
                name="emailText"
                >
                </input>
                <br/>

                <label>Message: </label>
                <br/>
                <textarea
                type="text"
                placeholder="Your message here"
                name="messageText"
                />
                
            </form>
        </div>
    )
}

export default Contact;
