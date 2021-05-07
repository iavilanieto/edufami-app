import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';
import { useSelector, shallowEqual } from 'react-redux'
import Chapter from './Chapter';
import isNull from '../../commons/utils'

function fetchAllChaptersByLesson(lessonId) {
    const token = window.sessionStorage.getItem('token');
    return fetch('http://laravel.nrcolombia.com/api/lessons/chapters?offset=0&limit=15&lesson_id=' + lessonId, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        }
    });
}

function getAllChaptersByLesson(courseUnitId) {
    return fetchAllChaptersByLesson(courseUnitId).then(async res => {
        const jsonResponse = await res.json();
        if (res.status === 401) {
            return { completed: false, error: jsonResponse.error?.message };
        }

        if (res.ok && jsonResponse.data) {
            return { completed: true, data: jsonResponse.data };
        }
    });
}

function selectChapterIds(state) {
    return state.chapters.map((course) => course.id)
}

export default function ChapterList({ lessonSelected }) {

    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(
        () => {
            if (loading) {

                getAllChaptersByLesson(lessonSelected.lesson.id).then(response => {
                    if (response.completed) {
                        dispatch({ type: 'chapters/clear' });
                        response.data.forEach(element => {
                            dispatch({
                                type: 'chapters/chapterAdded', payload: {
                                    id: element.id,
                                    name: element.name_lesson_chapter,
                                    subname: element.subname_lesson_chapter,
                                    image: "http://laravel.nrcolombia.com/" + element.image_lesson_chapter,
                                    mp3: "http://laravel.nrcolombia.com/" + element.mp3_lesson_chapter,
                                    description: element.description_lesson_chapter,
                                    shortDescription: element.short_description_lesson_chapter,
                                    createdAt: element.created_at,
                                    updatedAt: element.updated_at,
                                    deletedAt: element.deleted_at,
                                    lessonId: element.unit_lesson_id
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
        'background-image': 'url(' + lessonSelected.lesson.image + ')',
    }

    let lessonList = useSelector(selectChapterIds, shallowEqual);

    if (loading || isNull(lessonList)) {
        return (
            <div class="row">Cargando...</div>
        );
    } else {
        return (
            <>
                <div className={'edufami--lesson-list__info-box'} >
                    <div className={'edufami--lesson-list__image-box'} >
                        <div className={'edufami--lesson-list__image-outer-circle'}>
                            <div className={'edufami--lesson-list__image-inner-circle'} style={imgStyle} />
                        </div>
                    </div>
                    <div className={'edufami--lesson-list__content-box'} >
                        <div className={'edufami--lesson-list__title-box'} >
                            <h5>{lessonSelected.lesson.name}</h5>
                        </div>
                        <div className={'edufami--lesson-list__inner-info-box'} >
                            <p>{lessonSelected.lesson.description}</p>
                        </div>
                    </div>
                </div>
                <div className={'edufami--course-unit-list__list-box'}>
                    <div className={'edufami--course-unit-list__list'}>
                        {
                            lessonList.map(id => {
                                return <div class="col-lg-3"><div class="box"><Chapter id={id} /></div></div>
                            })
                        }
                    </div>
                </div>
            </>
        );
    }

}

