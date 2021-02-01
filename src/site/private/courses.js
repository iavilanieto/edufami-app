import React from 'react';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';
import CourseList from '../../comp/course/course-list';

export default function Courses() {
    return (
        <div class="wfp--wrapper wfp--wrapper--width-lg wfp--wrapper--spacing-md">
            <CourseList/>
        </div>
    );
}
