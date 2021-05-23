import React from "react";
import Project from "../components/Project"
import exmployeeDirectoryPic from "../assets/projects/employee-directory.png";
import employeeManagementPic from "../assets/projects/employee-management.png";
import fitnessTrackerPic from "../assets/projects/fitness-tracker.png";
import movnexPic from "../assets/projects/movnex.png";
import passMeTheAuxPic from "../assets/projects/pass-me-the-aux.png";

function Projects() {

    const projectData = [
        {
            projectName: "React Employee Directory",
            imgsrc: exmployeeDirectoryPic,
            liveSite: "https://jpecheverryp.github.io/react-employee-directory/",
            repo: "https://github.com/jpecheverryp/react-employee-directory"
        },
        {
            projectName: "Node Employee Management System",
            imgsrc: employeeManagementPic,
            liveSite: "https://github.com/jpecheverryp/employee-management-system",
            repo: "https://github.com/jpecheverryp/employee-management-system"
        },
        {
            projectName: "Mongo Fitness Tracker",
            imgsrc: fitnessTrackerPic,
            liveSite: "https://arcane-dusk-38060.herokuapp.com/?id=60aad420b036d70015c37daa",
            repo: "https://github.com/jpecheverryp/mongo-fitness-tracker"
        },
        {
            projectName: "MovNex",
            imgsrc: movnexPic,
            liveSite: "https://tranquil-escarpment-78206.herokuapp.com/",
            repo: "https://github.com/Kyle7286/MovNex"
        },
        {
            projectName: "Pass me the Aux",
            imgsrc: passMeTheAuxPic,
            liveSite: "https://jpecheverryp.github.io/pass-me-the-aux/index.html",
            repo: "https://github.com/jpecheverryp/pass-me-the-aux"
        },
    ]

    return (
        <section>
            <h2 className="white-text">My Projects</h2>
            {projectData.map((project, index) => <Project projectData={project} key={index}/>)}
        </section>
    )
}

export default Projects