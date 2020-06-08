import React from "react";
import {Link} from "react-router-dom";

export default class TopicPillsComponent extends React.Component {
    state = {
        editingTopic: {}
    };

    componentDidMount() {
        this.props.findTopicsForLesson(this.props.params.lessonId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.lessonId !== this.props.params.lessonId) {
            this.props.findTopicsForLesson(this.props.params.lessonId)
        }
    }

    render() {
        return (
            <div>
                <h3>Topic Pills lessonID: {this.props.params.lessonId}</h3>
                <ul className="nav nav-tabs">
                    {this.props.topics.map(
                        topic =>
                            <div key={topic._id}>
                                {this.state.editingTopic._id === topic._id &&
                                 <li
                                     className="nav-item">
                                     <span>

                                     <input
                                         onChange={(e) => {
                                             const newTitle = e.target.value;
                                             this.setState(prevState => ({
                                                 editingTopic: {
                                                     ...prevState.editingTopic,
                                                     title: newTitle
                                                 }
                                             }))
                                         }
                                         }
                                         value={this.state.editingTopic.title}
                                     />
                                        <button className="btn btn-danger"
                                                onClick={() => this.props.deleteTopic(topic._id)}>
                                        <i className="fa fa-trash"/>
                                        </button>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => {
                                                this.props.updateTopic(
                                                    this.state.editingTopic._id,
                                                    this.state.editingTopic);
                                                this.setState({editingTopic: {}})
                                            }
                                            }>
                                        <i className="fa fa-check"/>
                                            </button>
                                     </span>
                                 </li>}


                                {
                                    this.state.editingTopic._id
                                    !== topic._id &&
                                    <li key={topic._id}
                                        className="nav-item">
                                        <span>

                                        <Link
                                            to={`/editor/${this.props.params.courseId}/modules/${this.props.params.moduleId}/lessons/${this.props.params.lessonId}/topics/${topic._id}`}>
                                        {topic.title}
                                        </Link>

                                        <button className="btn btn-primary"
                                                onClick={() => this.setState(
                                                    {editingTopic: topic})}>
                                        <i className="fa fa-pencil"/>
                                        </button>
                                        </span></li>
                                }
                            </div>)}


                </ul>
                <button onClick={() => this.props.createTopic(
                    this.props.params.lessonId,
                    {
                        title: 'New Topic'
                    })}>
                    Add
                </button>
            </div>
        )
    }
}

