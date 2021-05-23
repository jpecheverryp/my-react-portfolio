import React from "react";
import "./index.css";


function Project(props) {
    const { projectName, imgsrc, liveSite, repo } = props.projectData;
    return (
        <article className="project-container">
            <h3 className="white-text project-heading">{projectName}</h3>
            <div className="img-project-container">
                <img src={imgsrc} alt={projectName} />
            </div>
            <div className="btn-container">
                <a
                    href={liveSite}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                >Live Site</a>

                <a
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                >Repository</a>
            </div>
        </article>
    )
}

export default Project