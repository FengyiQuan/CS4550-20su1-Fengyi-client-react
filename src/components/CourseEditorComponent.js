import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";

// stateless component
const CourseEditor = () =>
    <div>
        <LessonTabsComponent/>
        <div className="row">
            <div className="col-3">
                <ModuleListComponent/>
            </div>
            <div className="col-9">
                <TopicPillsComponent/>
                <WidgetListComponent/>
            </div>
        </div>
    </div>;

export default CourseEditor;