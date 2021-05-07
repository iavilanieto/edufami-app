const initialState = []

export default function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case 'user/login':
            {
                return [
                    ...state,
                    {
                        user: action.payload,
                        completed: true,
                    }
                ]
            }
        default:
            return state
    }
}