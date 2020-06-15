import React from "react";

export default class HeadingWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: true,
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
        return <div>
            <div className={'form-row'}>
                <h3>Heading Widget{this.state.order}</h3>
                {this.state.editing &&
                 <span>
                         <select value={this.state.size}
                                 onChange={(e) => this.setState({size: e.target.value})}>
                        <option value="1">Heading 1</option>
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                        <option value="4">Heading 4</option>
                        <option value="5">Heading 5</option>
                        <option value="6">Heading 6</option>
                    </select>
                     {
                         this.props.widget.widgetOrder !== 1 &&
                         <button className={'btn btn-warning'}
                                 onClick={() => this.props.moveUp(
                                     this.props.widget)}>
                             <i className="fa fa-arrow-up"/>
                         </button>
                     }
                     {
                         !this.props.isLast &&
                         <button className={'btn btn-warning'}
                                 onClick={() => this.props.moveDown(
                                     this.props.widget)}>
                             <i className="fa fa-arrow-down"/>
                         </button>
                     }
                     <button className={'btn btn-primary'}
                             onClick={() => {
                                 this.update();
                                 this.setState({editing: false})
                             }}>
                        <i className="fa fa-check"/>
                    </button>
                    <button className={'btn btn-danger'}
                            onClick={() => this.props.delete(this.props.widget)}>
                        <i className="fa fa-trash"/>
                    </button>
                </span>}
                {!this.state.editing &&
                 <span className='float-right'>
                 <button className={'btn btn-success'}
                         onClick={() => this.setState({editing: true})}>
                     <i className="fa fa-pencil"/>
                 </button>
                     </span>
                }
            </div>
            {!this.state.editing &&
             <div>
                 {this.state.size == 1 &&
                  <h1>
                      {this.props.widget.name}
                  </h1>}
                 {this.state.size == 2 &&
                  <h2>
                      {this.props.widget.name}
                  </h2>}
                 {this.state.size == 3 &&
                  <h3>
                      {this.props.widget.name}
                  </h3>}
                 {this.state.size == 4 &&
                  <h4>
                      {this.props.widget.name}
                  </h4>}
                 {this.state.size == 5 &&
                  <h5>
                      {this.props.widget.name}
                  </h5>}
                 {this.state.size == 6 &&
                  <h6>
                      {this.props.widget.name}
                  </h6>}

                 <p>
                     {this.props.widget.text}
                 </p>
             </div>}

            {this.state.editing &&
             <form>
                 <div className={'form-group row'}>
                     <label className="col-md-2 col-form-label"
                            htmlFor={`headingText${this.props.widget.id}`}>
                         Text:
                     </label>
                     <div className={'col-md-10'}>
                        <textarea value={this.state.text}
                                  placeholder="Paragraph text"
                                  className="form-control"
                                  id={`headingText${this.props.widget.id}`}
                                  onChange={(e) => this.setState({text: e.target.value})}/>
                     </div>
                 </div>
                 <div className={'form-group row'}>
                     <label className="col-md-2 col-form-label"
                            htmlFor={`headingName${this.props.widget.id}`}>
                         Widget Name:
                     </label>
                     <div className={'col-md-10'}>
                         <input value={this.state.name}
                                placeholder="Widget Name"
                                className="form-control"
                                onChange={(e) => this.setState({name: e.target.value})}
                                id={`headingName${this.props.widget.id}`}/>
                     </div>
                 </div>

                 <div className={'form-group row'}>
                     <label className="col-md-2 col-form-label"
                            htmlFor={`htype${this.props.widget.id}`}>
                         Widget Type:
                     </label>
                     <div className={'col-md-10'}>
                         <select className="form-control"
                                 value={this.state.type}
                                 id={`htype${this.props.widget.id}`}
                                 onChange={(e) => this.setState({type: e.target.value})}>
                             <option value='HEADING'>Heading</option>
                             <option value='PARAGRAPH'>Paragraph</option>
                         </select>
                     </div>
                 </div>

             </form>}
        </div>
    }
}