import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css"

function Navbar() {
    const location = useLocation();
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;