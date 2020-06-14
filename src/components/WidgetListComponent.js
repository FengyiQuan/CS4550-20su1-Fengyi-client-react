import React from "react";
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent";
import YouTubeWidgetComponent from "./widgets/YouTubeWidgetComponent";

export default class WidgetListComponent extends React.Component {

    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.params.topicId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.topicId !== this.props.params.topicId) {
            this.props.findWidgetsForTopic(this.props.params.topicId)
        }
    }

    render() {
        return (
            <div>
                <h2>Widget List</h2>
                <ul>
                    {this.props.params.topicId !== undefined &&
                     this.props.widgets.map(widget =>
                                                <li key={widget.id}>{widget.id}
                                                    {
                                                        widget.type === 'HEADING' &&
                                                        <HeadingWidgetComponent widget={widget}/>
                                                    }
                                                    {
                                                        widget.type === 'PARAGRAPH' &&
                                                        <ParagraphWidgetComponent widget={widget}/>
                                                    }
                                                    {
                                                        widget.type === 'YOUTUBE' &&
                                                        <YouTubeWidgetComponent widget={widget}/>
                                                    }
                                                    <div>
                                                        <button>Edit</button>
                                                        <button>Save</button>
                                                        <button
                                                            onClick={() => this.props.deleteWidget(
                                                                widget.id)}>
                                                            Delete
                                                        </button>
                                                        <button>Move Up</button>
                                                        <button>Move Down</button>
                                                    </div>
                                                </li>)
                    }
                </ul>
                <button onClick={() => {
                    if (this.props.params.topicId !== undefined) {
                        this.props.createWidget(this.props.params.topicId, {
                            type: 'HEADING', name: 'New Widget'
                        })
                    }
                }}>
                    Create Widget
                </button>
            </div>
        )
    }
}

