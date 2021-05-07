import React from 'react';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';
import CourseList from '../../hooks/course/CourseList';

export default function Courses() {
    return (
        <>
            <CourseList />
        </>
    );
}
