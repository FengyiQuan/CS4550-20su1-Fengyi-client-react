import React from "react";
import {Link} from "react-router-dom";
import ModuleListContainer from "../containers/ModuleListContainer";
import LessonTabsContainer from "../containers/LessonTabsContainer";
import TopicPillsContainer from "../containers/TopicPillsContainer";

// stateless component
const CourseEditorComponent = ({match}) => {

    return (
        <div>
            {/*TODO:class name*/}

            {match.params.courseId}

            {/*{CourseService.findCourseById(match.params.courseId)}*/}
            <div className="form-inline">
                <Link to="/table/courses">
                    <i className="fa fa-times fa-2x pr-2"/>
                </Link>
                <h2>Course Editor</h2>
            </div>

            <div className="row">
                <div className="col-4">
                    <ModuleListContainer {...match}/>
                </div>
                <div className="col-8">
                    <LessonTabsContainer {...match}/>
                    <TopicPillsContainer {...match}/>
                    <h3>Widget List</h3>
                </div>
            </div>
        </div>
    )
}

export default CourseEditorComponent