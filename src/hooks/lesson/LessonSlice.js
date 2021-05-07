const initialState = []

function nextLessonId(courseUnits) {
    const maxId = courseUnits.reduce((maxId, courseUnit) => Math.max(courseUnit.id, maxId), -1)
    return maxId + 1
}

export default function lessonsReducer(state = initialState, action) {
    switch (action.type) {
        case 'lessons/lessonAdded':
            {
                // Can return just the new courses array - no extra object around it
                return [
                    ...state,
                    {
                        id: nextLessonId(state),
                        lesson: action.payload,
                        completed: false,
                    }
                ]
            }
        case 'lessons/clear':
            return []
        default:
            return state
    }
}