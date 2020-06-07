import React from "react";
import {Link} from "react-router-dom";

const NavbarComponent = () =>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <Link to="table/courses">
                        <i className="fa fa-times"/>
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">CS5610 - WebDev</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" href="#">Build</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Pages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Theme</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Store</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Apps</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Settings</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-plus"/>
                    </a>
                </li>
            </ul>

        </div>
    </nav>;

export default NavbarComponent;