import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import CourseManagerContainer from "../containers/CourseManagerContainer";
import CourseEditorComponent from "./CourseEditorComponent";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";
import ProfileComponent from "./ProfileComponent";

export default class WhiteBoardComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Course Manager !!!!</h1>

                    <Route path="/login" exact={true} component={LoginComponent}/>
                    <Route path="/register" exact={true} component={SignUpComponent}/>
                    <Route path="/profile" exact={true} component={ProfileComponent}/>
                    <Route
                        path='/'
                        exact={true}
                        component={HomeComponent}/>

                    <Route
                        path='/:layout/courses'
                        exact={true}
                        component={CourseManagerContainer}/>

                    <Route
                        path='/editor'
                        exact={true}
                        component={CourseEditorComponent}/>

                </div>
            </BrowserRouter>
        )
    }
}
