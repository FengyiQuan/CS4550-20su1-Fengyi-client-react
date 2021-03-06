import React from "react";

export default class ParagraphWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
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
                    {this.state.editing &&
                     <span className='float-right'>
                         {
                             this.state.order !== 1 &&
                             <button className={'btn btn-warning'}
                                     onClick={() => this.props.moveUp(
                                         this.props.widget)}>
                                 <i className="fa fa-arrow-up"/>
                             </button>
                         }
                         {
                             !this.props.isLast && <button className={'btn btn-warning'}
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
                    </span>
                    }
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
                     <h4>
                         {this.props.widget.name}
                     </h4>
                     <p>
                         {this.props.widget.text}
                     </p>
                 </div>}
                {this.state.editing &&
                 <form>
                     <div className={'form-group row'}>
                         <label className="col-md-2 col-form-label"
                                htmlFor={`ParaText${this.props.widget.id}`}>
                             Text:
                         </label>
                         <div className={'col-md-10'}>
                            <textarea value={this.state.text}
                                      placeholder="Paragraph text"
                                      className="form-control"
                                      id={`ParaText${this.props.widget.id}`}
                                      onChange={(e) => this.setState({text: e.target.value})}/>
                         </div>
                     </div>

                     <div className={'form-group row'}>
                         <label className="col-md-2 col-form-label"
                                htmlFor={`ParaName${this.props.widget.id}`}>
                             Widget Name:
                         </label>
                         <div className={'col-md-10'}>
                             <input value={this.state.widgetName}
                                    placeholder="Widget Name"
                                    className="form-control"
                                    onChange={(e) => this.setState({widgetName: e.target.value})}
                                    id={`ParaName${this.props.widget.id}`}/>
                         </div>
                     </div>

                     <div className={'form-group row'}>
                         <label className="col-md-2 col-form-label"
                                htmlFor={`ParaType${this.props.widget.id}`}>
                             Widget Type:
                         </label>
                         <div className={'col-md-10'}>
                             <select className="form-control"
                                     value={this.state.type}
                                     id={`ParaType${this.props.widget.id}`}
                                     onChange={(e) => this.setState({type: e.target.value})}>
                                 <option value='HEADING'>Heading</option>
                                 <option value='PARAGRAPH'>Paragraph</option>
                                 <option value='IMAGE'>Image</option>
                                 <option value='LIST'>List</option>
                             </select>
                         </div>
                     </div>
                 </form>}
            </div>
        )
    }
}