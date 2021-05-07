const initialState = []

function nextCourseUnitId(courseUnits) {
    const maxId = courseUnits.reduce((maxId, courseUnit) => Math.max(courseUnit.id, maxId), -1)
    return maxId + 1
}

export default function courseUnitsReducer(state = initialState, action) {
    switch (action.type) {
        case 'courseUnits/courseUnitAdded':
            {
                // Can return just the new courses array - no extra object around it
                return [
                    ...state,
                    {
                        id: nextCourseUnitId(state),
                        courseUnit: action.payload,
                        completed: false,
                    }
                ]
            }
        case 'courseUnits/clear':
            return []
        default:
            return state
    }
}