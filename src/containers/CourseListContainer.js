import React from "react";
// import CourseGridComponent from "../components/CourseGridComponent";
import courseService from "../services/CourseService";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";

class CourseListContainer
    extends React.Component {
    state = {
        layout: this.props.match.params.layout,
        courses: [],
        newCourseTitle: 'New Title'
    };

    componentDidMount() {
        courseService.findAllCourses()
            .then(actualArrayOfCourses =>
                      this.setState({
                                        courses: actualArrayOfCourses
                                    }))
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.layout !== this.props.match.params.layout) {
            this.setState({
                              layout: this.props.match.params.layout
                          })
        }
    };

    setLayout = (layout) => {
        this.props.history.push(`/${layout}/courses`)
    };

    deleteCourse = (courseToDelete) =>
        courseService.deleteCourse(courseToDelete._id)
            .then(status => this.setState(prevState => ({
                courses: prevState
                    .courses.filter(course => course !== courseToDelete)
            })));

    addCourse = (title) =>
        courseService.createCourse({
                                       title: title,
                                       owner: 'me',
                                       modified: (new Date()).toDateString()
                                   })
            .then(theActualNewCourse =>
                      this.setState((prevState) => {
                          return {
                              courses: [
                                  ...prevState.courses,
                                  theActualNewCourse
                              ]
                          }
                      }));

    render() {
        return (
            <div>
                <h2>Course List {this.state.courses.length}</h2>
                <input
                    onChange={(event) => this.setState({
                                                           newCourseTitle: event.target.value
                                                       })}
                    value={this.state.newCourseTitle}
                    placeholder="Course Title"/>
                <button onClick={
                    () => this.addCourse(this.state.newCourseTitle)}>
                    Add Course
                </button>
                <br/>
                {
                    this.state.layout === 'table' &&
                    <div>
                        <button
                            onClick={() =>
                                this.setLayout('grid')}>
                            Grid
                        </button>
                        <CourseTableComponent
                            setLayout={this.setLayout}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </div>
                }
                {
                    this.state.layout === 'grid' &&
                    <div>
                        <button
                            onClick={() =>
                                this.setLayout('table')}>
                            Table
                        </button>
                        <CourseGridComponent setLayout={this.setLayout}
                                             deleteCourse={this.deleteCourse}
                                             courses={this.state.courses}/>
                    </div>
                }
            </div>
        );
    }
}

export default CourseListContainer;