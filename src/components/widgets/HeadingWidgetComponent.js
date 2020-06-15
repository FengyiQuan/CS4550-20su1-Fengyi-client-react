import React from "react";
import {findWidgetById} from "../../services/WidgetService";

export default class HeadingWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: 'heading',
            text: '',
            size: 1,
            order: 1
        }
    }

    componentDidMount() {
        this.setState({
                          name: this.props.widget.name,
                          type: this.props.widget.type,
                          text: this.props.widget.text,
                          size: this.props.widget.size,
                          order: this.props.widget.widgetOrder
                      })
    }

    update = () => {
        this.props.updateWidget(this.props.widget.id,
                                {
                                    ...this.props.widget,
                                    name: this.state.name,
                                    type: this.state.type,
                                    widgetOrder: this.state.order,
                                    text: this.state.text,
                                    size: parseInt(this.state.size)
                                });

    };

    render() {
        // console.log(this.props.widget)
        return (
            <div>
                <h3>Heading Widget</h3>
                Name: {this.props.widget.name}
                Text:{this.props.widget.text}
                <input value={this.state.text}
                       placeholder="Heading text"
                       className="form-control input-group"
                       onChange={(e) => this.setState({text: e.target.value})}/>
                <div className={'form-group row'}>
                    <label className="col-md-2 col-form-label"
                           htmlFor="type">
                        Widget Type:
                    </label>
                    <div className={'col-md-10'}>
                        <select className="form-control"
                                value={this.state.type}
                                id="type"
                                onChange={(e) => this.setState({type: e.target.value})}>
                            <option value='HEADING'>Heading</option>
                            <option value='PARAGRAPH'>Paragraph</option>
                        </select>
                    </div>
                </div>
                <select value={this.state.size}
                        onChange={(e) => this.setState({size: e.target.value})}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                    <option value="4">Heading 4</option>
                    <option value="5">Heading 5</option>
                    <option value="6">Heading 6</option>
                </select>
                <input value={this.state.name}
                       placeholder="Widget name"
                       className="form-control"
                       onChange={(e) => this.setState({name: e.target.value})}/>
                <button className={'btn btn-primary'}
                        onClick={this.update}>Save
                </button>
            </div>
        )
    }
}