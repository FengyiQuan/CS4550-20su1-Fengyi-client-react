import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import CourseManagerContainer from "../containers/CourseManagerContainer";
import CourseEditorComponent from "./CourseEditorComponent";
import HomeComponent from "./HomeComponent";

export default class WhiteBoardComponent extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <h1>Course Manager !!!!</h1>

                    <Route
                        path='/'
                        exact={true}
                        component={HomeComponent}/>

                    <Route
                        path='/courses'
                        exact={true}
                        component={CourseManagerContainer}/>

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
