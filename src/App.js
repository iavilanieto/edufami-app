import React from 'react';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';

import NavMain from './comp/nav-main';
import NavSecondary from './comp/nav-secondary';
import NavFooter from './comp/nav-footer';

import Courses from './site/private/courses';
import Main from './site/public/main';

import './App.css';

function App() {
    return (
        <div class="wfp--theme-light">
            <div>
                <NavMain/>
                {/*<NavSecondary/>*/}
                <Main/>
                <NavFooter/>
            </div>
        </div>
    );
}

export default App;