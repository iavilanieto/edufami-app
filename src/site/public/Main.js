import React, { useState } from 'react';

import { Wrapper } from "@wfp/ui";
// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';

import LoginForm from './LoginForm';
import Courses from '../private/courses';
import MainBar from '../../components/mainbar/MainBar'

const Main = () => {

    const [isLogged, setIsLogged] = useState(false);

    let content = isLogged === false ? <LoginForm loginHandler={() => { setIsLogged(true) }} /> : <Courses />

    return (
        <>
            <MainBar/>
            <div className={'edufami--main__wrapper'}>
                {content}
            </div>
        </>
    );

}

export default Main;
