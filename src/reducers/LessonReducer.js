const initialState = {
    lessons: []
};

const LessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE_LESSON":
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            };
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.actualLessons
            };
        case "CREATE_LESSON":
            return {
                lessons: [...state.lessons,
                          action.newLesson]
            };
        case "FIND_LESSON":
            return {
                modules: action.modules
            };
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(
                    lesson => lesson._id === action.updatedLesson._id ?
                              action.updatedLesson : lesson)
            };
        default:
            return state
    }
};

export default LessonReducer