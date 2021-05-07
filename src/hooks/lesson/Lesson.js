import React from 'react'
import { useSelector } from 'react-redux'
import InfoCard from '../../components/infocard/InfoCard'
import isNull from '../../commons/utils'

import '@wfp/ui/src/globals/scss/styles.scss';

const selectLessonById = (state, lessonId) => {
    return state.lessons.find((lesson) => lesson.id === lessonId)
}

function Lesson(params) {

    const { id } = params;

    let lessonFound = useSelector((state) => selectLessonById(state, id));

    if (isNull(lessonFound) || isNull(lessonFound.lesson)) {
        lessonFound = {
            id: -9,
            courseUnit: {
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

    let selectedLesson = lessonFound;

    return (
        <div className={'edufami--course-unit-item__box'}>
            <div className={'edufami--course-unit-item__title'} onClick={() => params.onSelectLesson(selectedLesson)} >
                <p>{selectedLesson.lesson.name}</p>
            </div>
            <div className={'edufami--course-unit-item__status'}></div>
            {
            /*
        <InfoCard image={selectedLesson.lesson.image}
            kind="image-header"
            metadata={selectedLesson.lesson.subname}
            subTitle={selectedLesson.lesson.shortDescription}
            title={selectedLesson.lesson.name}/>
            */}
        </div>
    );
}

export default Lesson;