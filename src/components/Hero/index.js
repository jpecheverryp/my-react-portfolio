import React from "react";
import "./index.css"
import profile from "../../assets/profile.jpeg";
function Hero() {

    return (
        <div className="hero">
            <div className="hero-text">
            <h1 className="white-text">My Name is <br/> Juan P Echeverry</h1>
            <p className="red-text">Full-Stack Web Developer</p>
            </div>
            <div className="img-container">
                <img className="rounded-img" src={profile} alt="Juan P Echeverry" />
            </div>
        </div>
    )
}

export default Hero