import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';
import { useSelector, shallowEqual } from 'react-redux'
import Lesson from './Lesson';
import ChapterList from '../chapter/ChapterList';
import isNull from '../../commons/utils'
import MainNav from '../../components/mainnav/MainNav';

function fetchAllLessonsByCourseUnit(courseUnitId) {
    const token = window.sessionStorage.getItem('token');
    return fetch('http://laravel.nrcolombia.com/api/unit/lessons?offset=0&limit=15&unit_id=' + courseUnitId, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        }
    });
}

function getAllLessonsByCourseUnit(courseUnitId) {
    return fetchAllLessonsByCourseUnit(courseUnitId).then(async res => {
        const jsonResponse = await res.json();
        if (res.status === 401) {
            return { completed: false, error: jsonResponse.error?.message };
        }

        if (res.ok && jsonResponse.data) {
            return { completed: true, data: jsonResponse.data };
        }
    });
}

function selectLessonIds(state) {
    return state.lessons.map((course) => course.id)
}

function createNewNavLesson(sentLesson, onClickFunction) {
    return {
        onItemClick: onClickFunction,
        name: sentLesson.lesson.name
    };
}

export default function LessonList({ courseUnitSelected, navItems }) {

    console.log(JSON.stringify(navItems));

    const [loading, setLoading] = useState(true);
    const [selectedLesson, setSelectedLesson] = useState(null);

    const dispatch = useDispatch();

    function onSelectLesson(sentLesson) {
        navItems.push(createNewNavLesson(sentLesson, setSelectedLesson(null)));
    }

    useEffect(
        () => {
            if (loading) {

                getAllLessonsByCourseUnit(courseUnitSelected.courseUnit.id).then(response => {
                    if (response.completed) {
                        dispatch({ type: 'lessons/clear' });
                        response.data.forEach(element => {
                            dispatch({
                                type: 'lessons/lessonAdded', payload: {
                                    id: element.id,
                                    name: element.name_unit_lesson,
                                    subname: element.subname_unit_lesson,
                                    image: "http://laravel.nrcolombia.com/" + element.image_unit_lesson,
                                    mp3: "http://laravel.nrcolombia.com/" + element.mp3_unit_lesson,
                                    description: element.description_unit_lesson,
                                    shortDescription: element.short_description_unit_lesson,
                                    createdAt: element.created_at,
                                    updatedAt: element.updated_at,
                                    deletedAt: element.deleted_at,
                                    courseUnitId: element.course_unit_id
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

    let imgStyle = {
        'background-image': 'url(' + courseUnitSelected.courseUnit.image + ')',
    }

    let lessonList = useSelector(selectLessonIds, shallowEqual);

    if (loading || isNull(lessonList)) {
        return (
            <div class="row">Cargando...</div>
        );
    } else {
        if (!isNull(selectedLesson)) {
            return (
                <>
                    <div className={'edufami--course-unit-selected__box'}>
                        {/*
                        <div className={'edufami--course-unit-selected__title'}> {selectedLesson.lesson.name} </div>
                        */}
                        <ChapterList lessonSelected={selectedLesson} />
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <MainNav navItems={navItems}></MainNav>
                    <div className={'edufami--lesson-list__info-box'} >
                        <div className={'edufami--lesson-list__image-box'} >
                            <div className={'edufami--lesson-list__image-outer-circle'}>
                                <div className={'edufami--lesson-list__image-inner-circle'} style={imgStyle} />
                            </div>
                        </div>
                        <div className={'edufami--lesson-list__content-box'} >
                            <div className={'edufami--lesson-list__title-box'} >
                                <h5>{courseUnitSelected.courseUnit.name}</h5>
                            </div>
                            <div className={'edufami--lesson-list__inner-info-box'} >
                                <p>{courseUnitSelected.courseUnit.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className={'edufami--course-unit-list__list-box'}>
                        <div className={'edufami--course-unit-list__list'}>
                            {
                                lessonList.map(id => {
                                    return <div class="col-lg-3"><div class="box"><Lesson id={id} onSelectLesson={(sentLesson) => {setSelectedLesson(sentLesson); onSelectLesson(sentLesson); }} /></div></div>
                                })
                            }
                        </div>
                    </div>
                </>
            );
        }
    }

}

