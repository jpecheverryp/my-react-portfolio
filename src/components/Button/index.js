import React from "react";
import { Link } from "react-router-dom";
import "./index.css"
function Button({ text, path }) {
    return (
        <Link to={path} className="btn white-text">
            {text}
        </Link>

    )
}

export default Button;