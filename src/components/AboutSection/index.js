import React from "react";
import "./index.css"

function AboutSection() {
    return (
        <section>
            <h2 className="white-text">About Me</h2>
            <article className="white-text about-article">
                Hey There!
                <br/>
                My name is 
                <span className="red-text"> Juan P Echeverry </span>
                <br/>
                Living in 
                <span className="red-text"> Atlanta </span>
                right now
                <br/>
                I have been learning <span className="red-text">Full-stack Dev</span>
                <br/>
                Went to Georgia Tech Coding Bootcamp
                <br/>
                I want to help you create the most
                <br/>
                awesome website in the web!
            </article>
        </section>
    )
}

export default AboutSection;