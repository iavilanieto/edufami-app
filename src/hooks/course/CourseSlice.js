const initialState = []

function nextCourseId(courses) {
    const maxId = courses.reduce((maxId, course) => Math.max(course.id, maxId), -1)
    return maxId + 1
}

export default function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case 'courses/courseAdded':
            {
                // Can return just the new courses array - no extra object around it
                return [
                    ...state,
                    {
                        id: nextCourseId(state),
                        course: action.payload,
                        completed: false,
                    }
                ]
            }
        case 'courses/clear':
            return []
        default:
            return state
    }
}