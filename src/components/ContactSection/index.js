import React from "react";
import "./index.css"
function ContactSection() {
    return (
        <article className="contact-section">
            <h2 className="red-text contact-heading">Let's Work Together!!</h2>
            <h3 className="white-text">Email me @ <span className="red-text">jpecheverryp@gmail.com</span></h3>
            <br />
            <h3 className="white-text">Text me @ <span className="red-text">678-789-3207</span></h3>
            <section>
                <h3 className="white-text">Find me on:</h3>
                <a
                    href="https://github.com/jpecheverryp"
                    className="social-link"
                    target="_blank"
                    rel="noreferrer"
                >Github</a>
                <a
                    href="https://www.linkedin.com/in/juan-echeverry-0735631ba/"
                    className="social-link"
                    target="_blank"
                    rel="noreferrer"
                >LinkedIn</a>
                <a
                    href="https://drive.google.com/file/d/1ET5T72QPQGslKkieC_zqQOXeEOIYj4zr/view?usp=sharing"
                    className="social-link"
                    target="_blank"
                    rel="noreferrer"
                >My Resume</a>

            </section>
        </article>
    )
}

export default ContactSection