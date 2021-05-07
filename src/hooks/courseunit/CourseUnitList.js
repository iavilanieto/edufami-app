import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';
import { useSelector, shallowEqual } from 'react-redux'
import CourseUnit from './CourseUnit';
import LessonList from '../lesson/LessonList';
import isNull from '../../commons/utils'
import MainNav from '../../components/mainnav/MainNav';

function fetchAllCourseUnitsByCourse(courseId) {
    const token = window.sessionStorage.getItem('token');
    return fetch('http://laravel.nrcolombia.com/api/course/units?offset=0&limit=15&course_id=' + courseId, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        }
    });
}

function getAllCourseUnitsByCourse(courseId) {
    return fetchAllCourseUnitsByCourse(courseId).then(async res => {
        const jsonResponse = await res.json();
        if (res.status === 401) {
            return { completed: false, error: jsonResponse.error?.message };
        }

        if (res.ok && jsonResponse.data) {
            return { completed: true, data: jsonResponse.data };
        }
    });
}

function selectCourseUnitIds(state) {
    return state.courseUnits.map((course) => course.id)
}

function createNewNavCourseUnit(sentCourseUnit, onClickFunction) {
    return {
        onItemClick: onClickFunction,
        name: sentCourseUnit.courseUnit.name
    };
}

export default function CourseUnitList({ courseSelected, navItems }) {

    console.log(JSON.stringify(navItems));

    const [loading, setLoading] = useState(true);
    const [selectedCourseUnit, setSelectedCourseUnit] = useState(null);

    const dispatch = useDispatch();

    function onSelectCourseUnit(sentCourseUnit) {
        navItems.push(createNewNavCourseUnit(sentCourseUnit, setSelectedCourseUnit(null)));
    }

    useEffect(
        () => {
            if (loading) {

                getAllCourseUnitsByCourse(courseSelected.course.id).then(response => {
                    if (response.completed) {
                        dispatch({ type: 'courseUnits/clear' });
                        response.data.forEach(element => {
                            dispatch({
                                type: 'courseUnits/courseUnitAdded', payload: {
                                    id: element.id,
                                    name: element.name_unit,
                                    subname: element.subname_unit,
                                    image: "http://laravel.nrcolombia.com/" + element.image_unit,
                                    mp3: "http://laravel.nrcolombia.com/" + element.mp3_unit,
                                    description: element.description_unit,
                                    shortDescription: element.short_description_unit,
                                    createdAt: element.created_at,
                                    updatedAt: element.updated_at,
                                    deletedAt: element.deleted_at,
                                    courseId: element.id
                                }
                            });
                        });
                    }
                });

                setLoading(false);

            }
        },
        [loading, dispatch]
    );

    let courseUnitList = useSelector(selectCourseUnitIds, shallowEqual);

    let imgStyle = {
        'background-image': 'url(' + courseSelected.course.image + ')',
    }

    if (loading || isNull(courseUnitList)) {
        return (
            <>
                <div class="row">Cargando...</div>
            </>
        );
    } else {
        if (!isNull(selectedCourseUnit)) {
            return (
                <>
                        {/*
                    <div className={'edufami--course-unit-selected__box'}>
                        <div className={'edufami--course-unit-selected__title'} onClick={() => setSelectedCourseUnit(null)}> {selectedCourseUnit.courseUnit.name} </div>
                    </div>

                        */}
                        <LessonList courseUnitSelected={selectedCourseUnit} navItems={navItems}/>
                </>
            );
        } else {
            return (
                <>
                    <MainNav navItems={navItems}></MainNav>
                    <div className={'edufami--course-unit_list__image-box'} >
                        <div className={'edufami--course-unit_list__image-outer-circle'}>
                            <div className={'edufami--course-unit_list__image-inner-circle'} style={imgStyle} />
                        </div>
                    </div>
                    <div className={'edufami--course-unit-list__list-box'}>
                        <div className={'edufami--course-unit-list__list'}>
                            {
                                courseUnitList.map(id => {
                                    return <div class="box"><CourseUnit id={id} onSelectCourseUnit={(sentCourseUnit) => {onSelectCourseUnit(sentCourseUnit); setSelectedCourseUnit(sentCourseUnit); }} navItems={navItems} /></div>
                                })
                            }
                        </div>
                    </div>
                </>
            );
        }
    }

}

