import React from "react";

export default class TopicPillsComponent extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Topic 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 4</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-plus"/>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}