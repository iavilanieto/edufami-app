const initialState = []

function nextChapterId(courseUnits) {
    const maxId = courseUnits.reduce((maxId, courseUnit) => Math.max(courseUnit.id, maxId), -1)
    return maxId + 1
}

export default function chaptersReducer(state = initialState, action) {
    switch (action.type) {
        case 'chapters/chapterAdded':
            {
                // Can return just the new courses array - no extra object around it
                return [
                    ...state,
                    {
                        id: nextChapterId(state),
                        chapter: action.payload,
                        completed: false,
                    }
                ]
            }
        case 'chapters/clear':
            return []
        default:
            return state
    }
}