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

    // moveDown = w => {
    //     this.props.widgets.map(widget => {
    //         if (widget.widgetOrder < w.widgetOrder) {
    //             this.props.updateWidget(widget.id, {...widget, widgetOrder: widget.widgetOrder -
    // 1}) } else if (widget.widgetOrder === w.widgetOrder) { this.props.updateWidget(widget.id,
    // {...widget, widgetOrder: widget.widgetOrder - 1}) } else {
    // this.props.updateWidget(widget.id, {...widget, widgetOrder: widget.widgetOrder + 1}) }
    // return widget; }) }

    render() {
        // console.log(this.props.widgets)
        return (
            <div>
                <h2>Widget List</h2>
                <ul>
                    {this.props.params.topicId !== undefined &&
                     this.props.widgets.map(widget =>
                                                <li key={widget.id}>{widget.id}
                                                    {
                                                        widget.type === 'HEADING' &&
                                                        <HeadingWidgetComponent widget={widget}
                                                                                updateWidget={this.props.updateWidget}
                                                                                deleteWidget={this.props.deleteWidget}/>
                                                    }
                                                    {
                                                        widget.type === 'PARAGRAPH' &&
                                                        <ParagraphWidgetComponent widget={widget}
                                                                                  updateWidget={this.props.updateWidget}
                                                                                  deleteWidget={this.props.deleteWidget}/>
                                                    }
                                                    {
                                                        widget.type === 'YOUTUBE' &&
                                                        <YouTubeWidgetComponent widget={widget}
                                                                                updateWidget={this.props.updateWidget}
                                                                                deleteWidget={this.props.deleteWidget}/>
                                                    }
                                                </li>)
                    }
                </ul>
                <button className={'btn btn-primary'}
                    onClick={() => {
                    if (this.props.params.topicId !== undefined) {
                        this.props.createWidget(this.props.params.topicId, {
                            type: 'HEADING', name: 'New Widget', size: 1
                        })
                    }
                }}>
                    <i className={'fa fa-plus'}/>
                </button>
            </div>
        )
    }
}

