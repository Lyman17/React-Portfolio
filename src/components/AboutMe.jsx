import React from 'react'
import profilePic from "src\assets\images\Headshot-BrianLyman.jpg"
import "../styles/AboutMe.css"

const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className="divWrapper">
                <img src={profilePic} />
            </div>
            <div className="content">
                <p>I live in Sandy, Utah with my wife, daughter and son. I am currently attending the University of
                    Utah Coding Bootcamp for Full-stack Web Development. 
                    I work at Top Equity Realty as a Realtor & Producer for the TV show Real Estate Essentials that airs on our local ABC4 network, Hulu & Telemundo.
                     My hobbies include camping, fishing, cooking, and going
                    to concerts with my family.</p>
            </div>

        </div>
    )
}

export default AboutMe