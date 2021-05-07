import React from 'react'
import { useSelector } from 'react-redux'
import isNull from '../../commons/utils'
import '@wfp/ui/src/globals/scss/styles.scss';

const selectCourseById = (state, courseId) => {
    return state.courses.find((course) => course.id === courseId)
}

function Course(params) {

    const { id } = params;

    let courseFound = useSelector((state) => selectCourseById(state, id));

    if (isNull(courseFound) || isNull(courseFound.course)) {
        courseFound = {
            id: -9,
            course: {
                id: -9,
                name: "En Construcción",
                subname: "En Construcción",
                image: "http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg",
                mp3: "/",
                description: "-",
                shortDescription: "-",
                courseState: "-",
                languageId: "-",
                createdAt: "0/0/0",
                updatedAt: "0/0/0",
                deletedAt: "0/0/0",
                content: "-"
            }
        }
    }

    let selectedCourse = courseFound;

    let imgStyle = {
        'background-image': 'url(' + selectedCourse.course.image + ')',
    }

    return (
        <>
            <div className={"edufami--course__box"} style={imgStyle} onClick={() => params.onSelectCourse(selectedCourse)}>
                <div className={"edufami--course__background"}/>
                <div className={"edufami--course__banner"}>
                    {selectedCourse.course.name}
                    <div className={"edufami--course__icon"}/>
                </div>
            </div>
        </>
    );
}

export default Course;