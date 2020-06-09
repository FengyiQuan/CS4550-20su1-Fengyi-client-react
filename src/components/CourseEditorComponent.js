import React from "react";
import {Link} from "react-router-dom";
import ModuleListContainer from "../containers/ModuleListContainer";
import LessonTabsContainer from "../containers/LessonTabsContainer";
import TopicPillsContainer from "../containers/TopicPillsContainer";
import CourseService from "../services/CourseService";

export default class CourseEditorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    componentDidMount() {
        CourseService.findCourseById(this.props.match.params.courseId)
            .then(result =>
                      this.setState({
                                        title: result.title
                                    }));
    }

    render() {
        return (
            <div>
                <div className="form-inline">
                    <Link to="/table/courses">
                        <i className="fa fa-times fa-2x pr-2"/>
                    </Link>
                    <h2>Course Editor</h2>
                </div>

                <h1>{this.state.title}</h1>
                {/*{this.props.match.params.courseId}*/}

                <div className="row">
                    <div className="col-4">
                        <ModuleListContainer {...this.props.match}/>
                    </div>
                    <div className="col-8">
                        <LessonTabsContainer {...this.props.match}/>
                        <TopicPillsContainer {...this.props.match}/>
                        <h3>Widget List</h3>
                    </div>
                </div>
            </div>
        )
    }
}
