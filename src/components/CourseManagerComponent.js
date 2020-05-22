import React from 'react';
import CourseTableComponent from "CourseTableComponent";
import CourseGridComponent from "CourseGridComponent";
import courseService from "../services/CourseService"

import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";

class WhiteBoard extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <h1>WhiteBoard !!!!</h1>

                    <Route path="/login" exact={true} component={LoginComponent}/>

                    {/*TODO: port over registraion, profile components*/}

                    <Route
                        path='/'
                        exact={true}
                        component={HomeComponent}
                    />

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
                        component={CourseEditor}/>

                </div>
            </BrowserRouter>
        )
    }
}

export default WhiteBoard