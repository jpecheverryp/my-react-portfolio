import React from "react";
import "./index.css"
function Hero() {

    return (
        <div className="hero">
            <div className="hero-text">
            <h1 className="white-text">My Name is <br/> Juan P Echeverry</h1>
            <p className="red-text">Full-Stack Developer</p>
            </div>
            <div className="img-container">
                <img src="https://via.placeholder.com/150" alt="Juan P Echeverry Picture" />
            </div>
        </div>
    )
}

export default Hero