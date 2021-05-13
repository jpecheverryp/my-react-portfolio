import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Button from "../components/Button"
function About() {
    
    return (
        <section>
            <Hero/>
            <AboutSection/>
            <Button text="See my Work" path="/projects" />
        </section>
    )
};

export default About;