import { combineReducers } from 'redux'

import coursesReducer from './hooks/course/CourseSlice'
import courseUnitsReducer from './hooks/courseunit/CourseUnitSlice'
import lessonsReducer from './hooks/lesson/LessonSlice'
import chaptersReducer from './hooks/chapter/ChapterSlice'

const rootReducer = combineReducers({
    courses: coursesReducer,
    courseUnits: courseUnitsReducer,
    lessons: lessonsReducer,
    chapters: chaptersReducer
})

export default rootReducer