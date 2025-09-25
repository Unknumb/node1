import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container">
            <Link className="navbar-brand" to="/">Logo web</Link>

            <div className="navbar-nav d-flex flex-row gap-3">
                <Link className="navbar-link" to="/">Inicio</Link>

                <Link className="navbar-link" to="/nosotros">About</Link>
            </div>
        </div>


        </nav>


    );
}
export default Navbar;