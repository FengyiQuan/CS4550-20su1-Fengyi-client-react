import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import CourseListContainer from "../containers/CourseListContainer";
import CourseEditorComponent from "./CourseEditorComponent";
import HomeComponent from "./HomeComponent";

export default class CourseManagerComponent extends React.Component {
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
                        component={CourseListContainer}/>

                    <Route
                        path='/:layout/courses'
                        exact={true}
                        component={CourseListContainer}/>

                    <Route
                        path='/editor'
                        exact={true}
                        component={CourseEditorComponent}/>

                </div>
            </BrowserRouter>
        )
    }
}
