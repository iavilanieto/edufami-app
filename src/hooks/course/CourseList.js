import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';
import { useSelector, shallowEqual } from 'react-redux'
import Course from './Course';
import CourseUnitList from '../courseunit/CourseUnitList';
import isNull from '../../commons/utils';
import MainNav from '../../components/mainnav/MainNav';
import MainNavItem from '../../components/mainnav/MainNavItem';

function fetchAllCourses() {
    const token = window.sessionStorage.getItem('token');
    return fetch('http://laravel.nrcolombia.com/api/courses?offset=0&limit=15', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        }
    });
}

function getAllCourses() {
    return fetchAllCourses().then(async res => {
        const jsonResponse = await res.json();
        if (res.status === 401) {
            return { completed: false, error: jsonResponse.error?.message };
        }

        if (res.ok && jsonResponse.data) {
            return { completed: true, data: jsonResponse.data };
        }
    });
}

function selectCourseIds(state) {
    return state.courses.map((course) => course.id)
}

export default function CourseList() {

    const [loading, setLoading] = useState(true);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [started, setStarted] = useState(false);

    const dispatch = useDispatch();

    useEffect(
        () => {
            if (loading) {

                getAllCourses().then(response => {
                    if (response.completed) {
                        dispatch({ type: 'courses/clear' });
                        response.data.forEach(element => {
                            dispatch({
                                type: 'courses/courseAdded', payload: {
                                    id: element.id,
                                    name: element.name_course,
                                    subname: element.subname_course,
                                    image: "http://laravel.nrcolombia.com/" + element.image_course,
                                    mp3: "http://laravel.nrcolombia.com/" + element.mp3_course,
                                    description: element.description_course,
                                    shortDescription: element.short_description_course,
                                    courseState: element.course_state_id,
                                    languageId: element.course_language_id,
                                    createdAt: element.created_at,
                                    updatedAt: element.updated_at,
                                    deletedAt: element.deleted_at
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

    let courseList = useSelector(selectCourseIds, shallowEqual);

    const resetSelected = () => {
        setSelectedCourse(null);
        setStarted(false);
    }

    if (loading || isNull(courseList)) {
        return (
            <div>Cargando...</div>
        );
    } else {
        if (!isNull(selectedCourse)) {
            if (!started) {
                return (
                    <>
                        <div className={'edufami--course-selected__box'}>
                            <div className={'edufami--course-selected__space-top'} />
                            <div className={'edufami--course-selected__banner'}>
                                <h1>{selectedCourse.course.name}</h1>
                            </div>
                            <div className={'edufami--course-selected__space-mid'} />
                            <div className={'edufami--course-selected__info'}>
                                <div className={'edufami--course-selected__info-text'}>
                                    <p>{selectedCourse.course.description}</p>
                                </div>
                                <div className={'edufami--course-selected__info-footer'}>
                                    <button tabindex="0" class="wfp--btn wfp--btn--primary" type="button" onClick={() => setStarted(true)}> Ingresar </button>
                                </div>
                            </div>
                        </div>
                    </>
                );
            } else {
                const navItems = [{
                    onItemClick: resetSelected,
                    name: selectedCourse.course.name
                }]
                return (
                    <div className={'edufami--course-unit-list__box'}>
                        <CourseUnitList courseSelected={selectedCourse} navItems={navItems}/>
                    </div>
                );
            }
        } else {
            return (
                <>
                    <div className={'edufami--title__list'}><h2>EduFami</h2></div>
                    {
                        courseList.map(id => {
                            return <Course id={id} key={id} onSelectCourse={(sentCourse) => setSelectedCourse(sentCourse)} />
                        })
                    }
                </>
            );
        }
    }

}

