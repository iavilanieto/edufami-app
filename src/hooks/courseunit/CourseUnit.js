import React from 'react'
import { useSelector } from 'react-redux'
import InfoCard from '../../components/infocard/InfoCard'
import isNull from '../../commons/utils'

import '@wfp/ui/src/globals/scss/styles.scss';

const selectCourseUnitById = (state, courseUnitId) => {
    return state.courseUnits.find((courseUnit) => courseUnit.id === courseUnitId)
}

function CourseUnit(params) {

    const { id } = params;

    let courseUnitFound = useSelector((state) => selectCourseUnitById(state, id));

    if (isNull(courseUnitFound) || isNull(courseUnitFound.courseUnit)) {
        courseUnitFound = {
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

    let selectedCourseUnit = courseUnitFound;

    return (
        <div className={'edufami--course-unit-item__box'}>
            <div className={'edufami--course-unit-item__title'} onClick={() => params.onSelectCourseUnit(selectedCourseUnit)} >
                <p>{selectedCourseUnit.courseUnit.name}</p>
            </div>
            <div className={'edufami--course-unit-item__status'}></div>
            {
            /*
            <InfoCard image={selectedCourseUnit.courseUnit.image}
                kind="image-header"
                metadata={selectedCourseUnit.courseUnit.subname}
                subTitle={selectedCourseUnit.courseUnit.shortDescription}
                title={selectedCourseUnit.courseUnit.name}
                onClick={() => params.onSelectCourseUnit(selectedCourseUnit)} />
            */}
        </div>
    );
}

export default CourseUnit;