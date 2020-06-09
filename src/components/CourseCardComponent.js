import React from "react";
import courseService from "../services/CourseService";
import {Link} from "react-router-dom";

export default class CourseCardComponent extends React.Component {
    state = {
        editing: false,
        course: this.props.course
    };

    setEditing = (editing) =>
        this.setState({editing: editing});

    ok = () =>
        courseService.updateCourse(
            this.state.course._id,
            this.state.course)
            .then(status => this.setEditing(false));

    updateCourseTitle = (newTitle) =>
        this.setState(prevState => ({
            course: {
                ...prevState.course,
                title: newTitle
            }
        }));

    render() {
        return (
            <div className="col mb-4">
                <div className={this.state.editing ? 'card border-primary' : 'card'}>
                    <img
                        src="https://cdn.pixabay.com/photo/2014/11/18/20/27/elections-536656_1280.png"
                        className="card-img-top" alt={this.state.course.title}/>
                    <div className="card-body">
                        <h5 className="card-title">
                            {
                                !this.state.editing &&
                                <Link to={`/editor/course/${this.state.course._id}`}>
                                    {this.state.course.title}
                                </Link>
                            }

                            {
                                this.state.editing &&
                                <input
                                    className="form-control"
                                    onChange={(event) => this.updateCourseTitle(event.target.value)}
                                    value={this.state.course.title}/>
                            }
                        </h5>
                        <p className="card-text">
                            <small className="text-muted">
                                {this.state.course.owner + " " +
                                 this.state.course.modified}
                            </small>
                        </p>


                        {
                            !this.state.editing &&
                            <button
                                className="btn btn-primary"
                                onClick={() => this.setEditing(true)}>
                                <i className="fa fa-pencil"/>
                            </button>
                        }
                        {
                            this.state.editing &&
                            <span className="btn-group">
                              <button className="btn btn-success"
                                      onClick={this.ok}>
                                  <i className="fa fa-check"/> </button>
                              <button
                                  className="btn btn-danger"
                                  onClick={
                                      () => this.props.deleteCourse(this.props.course)}>
                                  <i className="fa fa-trash"/></button>
                            </span>
                        }
                    </div>
                </div>
            </div>
        );
    }
}