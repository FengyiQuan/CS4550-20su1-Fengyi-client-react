import React from "react";

export default class ParagraphWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            widgetName: '',
            order: 1,
            type: 'PARAGRAPH'
        }
    }

    componentDidMount() {
        this.setState({
                          text: this.props.widget.text,
                          widgetName: this.props.widget.name,
                          order: this.props.widget.widgetOrder,
                          type: this.props.widget.type
                      })
    }

    update = () =>
        this.props.updateWidget(this.props.widget.id,
                                {
                                    ...this.props.widget,
                                    name: this.state.widgetName,
                                    type: this.state.type,
                                    widgetOrder: this.state.order,
                                    text: this.state.text
                                });

    render() {
        return (
            <div>
                <div>
                    <h3>Paragraph Widget</h3>
                    <span className='float-right'>
                        <button className={'btn btn-warning'}>
                            <i className="fa fa-arrow-up"/>
                        </button>
                        <button className={'btn btn-warning'}>
                            <i className="fa fa-arrow-down"/>
                        </button>
                        <button className={'btn btn-primary'}
                                onClick={this.update}>
                            <i className="fa fa-check"/>
                        </button>
                         <button className={'btn btn-danger'}
                                 onClick={() => this.props.deleteWidget(
                                     this.props.widget.id)}>
                               <i className="fa fa-trash"/>
                         </button>
                    </span>
                </div>
                <h4>
                    {this.props.widget.name}
                </h4>
                <p>
                    {this.props.widget.text}
                </p>
                <form>
                    <div className={'form-group row'}>
                        <label className="col-md-2 col-form-label"
                               htmlFor="text">
                            Text:
                        </label>
                        <div className={'col-md-10'}>
                            <textarea value={this.state.text}
                                      placeholder="Paragraph text"
                                      className="form-control"
                                      id="text"
                                      onChange={(e) => this.setState({text: e.target.value})}/>
                        </div>
                    </div>

                    <div className={'form-group row'}>
                        <label className="col-md-2 col-form-label"
                               htmlFor="name">
                            Widget Name:
                        </label>
                        <div className={'col-md-10'}>
                            <input value={this.state.widgetName}
                                   placeholder="Widget Name"
                                   className="form-control"
                                   onChange={(e) => this.setState({widgetName: e.target.value})}
                                   id="name"/>
                        </div>
                    </div>

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
                </form>
            </div>
        )
    }
}