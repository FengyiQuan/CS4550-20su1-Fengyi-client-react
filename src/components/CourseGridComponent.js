import React from "react";
import CourseCardComponent from "./CourseCardComponent";

export default class CourseGridComponent
    extends React.Component {

    render() {
        return (
            <div>
                <div className="form-row">
                    <i onClick={() => this.props.setLayout('table')}
                       className="fa fa-list pr-2 fa-2x"/>
                    <i className="fa fa-sort-alpha-asc fa-2x"/>
                </div>
                <br/>
                <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                    {
                        this.props.courses.map(course =>
                                                   <CourseCardComponent
                                                       deleteCourse={this.props.deleteCourse}
                                                       key={course._id}
                                                       course={course}/>)
                    }


                </div>
            </div>
        )

    }
}