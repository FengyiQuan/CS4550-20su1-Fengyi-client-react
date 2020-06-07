const findTopic = (topicId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/topics/${topicId}`)
        .then(response => response.json())
}

const findTopicsForLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/lessons/${lessonId}/topics`)
        .then(response => response.json())

const deleteTopic = (topicId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/topics/${topicId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
}

const updateTopic = (topicId, topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const createTopic = (lessonId, topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/lessons/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    createTopic,
    findTopicsForLesson,
    findTopic,
    updateTopic,
    deleteTopic
}