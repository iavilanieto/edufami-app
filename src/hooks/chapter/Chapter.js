import React from 'react'
import { useSelector } from 'react-redux'
import InfoCard from '../../components/infocard/InfoCard'
import isNull from '../../commons/utils'

import '@wfp/ui/src/globals/scss/styles.scss';

const selectChapterById = (state, chapterId) => {
    return state.chapters.find((chapter) => chapter.id === chapterId)
}

function Chapter(params) {

    const { id } = params;

    let chapterFound = useSelector((state) => selectChapterById(state, id));

    if (isNull(chapterFound) || isNull(chapterFound.lesson)) {
        chapterFound = {
            id: -9,
            chapter: {
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

    let selectedChapter = chapterFound;

    return (
        <div className={'edufami--course-unit-item__box'}>
            <div className={'edufami--course-unit-item__title'}>
                <p>{selectedChapter.chapter.name}</p>
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

export default Chapter;