import React from "react";

export default class LessonTabsComponent extends React.Component {
    state = {
        editingLesson: {}
    };

    componentDidMount() {
        this.props.findLessonsForModule(this.props.params.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.moduleId !== this.props.params.moduleId) {
            this.props.findLessonsForModule(this.props.params.moduleId)
        }
    }

    render() {
        return (
            <div>
                <h3>Lesson Tabs {this.props.params.moduleId}</h3>
                <ul className="nav nav-tabs">
                    {this.props.lessons.map(
                        lesson =>
                            <div key={lesson._id}>
                                {this.state.editingLesson._id
                                 === lesson._id &&
                                 <li
                                     className="nav-item active">
                                     <span>

                                     <input
                                         onChange={(e) => {
                                             const newTitle = e.target.value;
                                             this.setState(prevState => ({
                                                 editingLesson: {
                                                     ...prevState.editingLesson,
                                                     title: newTitle
                                                 }
                                             }))
                                         }
                                         }
                                         value={this.state.editingLesson.title}
                                     />
                                        <button className="btn btn-danger"
                                                onClick={() => this.props.deleteLesson(lesson._id)}>
                                        <i className="fa fa-trash"/>
                                        </button>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => {
                                                this.props.updateLesson(
                                                    this.state.editingLesson._id,
                                                    this.state.editingLesson);
                                                this.setState({editingLesson: {}})
                                            }
                                            }>
                                        <i className="fa fa-check"/>
                                            </button>
                                     </span>
                                 </li>}


                                {
                                    this.state.editingLesson._id
                                    !== lesson._id &&
                                    <li
                                        className="nav-item">
                                        <span>

                                            <a className={"active"}
                                               href="#">
                                                {lesson.title}
                                            </a>

                                            <button className="btn btn-primary"
                                                    onClick={() => this.setState(
                                                        {editingLesson: lesson})}>
                                                <i className="fa fa-pencil"/>
                                            </button>
                                        </span>
                                    </li>
                                }
                            </div>)}
                </ul>

                <button onClick={() => this.props.createLesson(
                    this.props.params.moduleId,
                    {
                        title: 'New Lesson'
                    })}>
                    Add
                </button>
            </div>
        )
    }
}

