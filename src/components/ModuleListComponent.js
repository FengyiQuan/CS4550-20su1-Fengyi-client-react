import React from "react";

const ModuleList = () =>
    <div>
        <ul className="list-group">
            <li className="list-group-item list-group-item-dark list-group-item-action active
                           d-flex justify-content-between align-items-center">
                Module 1 - jQuery
                <span className="badge">
                            <i className="fa fa-times fa-lg"/>
                        </span>
            </li>
            <li className="list-group-item list-group-item-dark list-group-item-action
                           d-flex justify-content-between align-items-center">
                Module 2 - React
                <span className="badge"><i
                    className="fa fa-times fa-lg"/>
                        </span>
            </li>
            <li className="list-group-item list-group-item-dark list-group-item-action
                           d-flex justify-content-between align-items-center">
                Module 3 - Redux
                <span className="badge">
                            <i className="fa fa-times fa-lg"/>
                        </span>
            </li>
            <li className="list-group-item list-group-item-dark list-group-item-action
                           d-flex justify-content-between align-items-center">
                Module 4 - Native
                <span className="badge">
                            <i className="fa fa-times fa-lg"/>
                        </span>
            </li>
            <li className="list-group-item list-group-item-dark list-group-item-action
                           d-flex justify-content-between align-items-center">
                Module 5 - Angular
                <span className="badge">
                            <i className="fa fa-times fa-lg"/>
                        </span>
            </li>
            <li className="list-group-item list-group-item-dark list-group-item-action
                           d-flex justify-content-between align-items-center">
                Module 6 - Node
                <span className="badge">
                            <i className="fa fa-times fa-lg"/>
                        </span>
            </li>
            <li className="list-group-item list-group-item-dark list-group-item-action
                           d-flex justify-content-between align-items-center ">
                Module 7 - Mongo
                <span className="badge">
                            <i className="fa fa-times fa-lg"/>
                        </span>
            </li>
            <li className="list-group-item list-group-item-dark list-group-item-action">
                <i className="fa fa-plus fa-lg float-right"/>
            </li>
        </ul>
    </div>;

export default ModuleList;