export const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001886456/modules/${moduleId}/lessons`)
        .then(response => response.json())

export const createLesson = (moduleId, newLesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001886456/modules/${moduleId}/lessons`, {
        method: 'POST',
        body: JSON.stringify(newLesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteLesson = (lessonId) => {
}

// export default {
//   findLessonsForModule
// }