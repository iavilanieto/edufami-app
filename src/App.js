import React from 'react';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';

import NavMain from './site/template/NavMain';
import NavSecondary from './site/template/NavSecondary';
import NavFooter from './site/template/NavFooter';

import Main from './site/public/Main';

import './App.css';

function App() {
    return (
        <div class="wfp--theme-light">
            <div>
                {/*<NavMain/>*/}
                {/*<NavSecondary/>*/}
                <Main/>
                {/*<NavFooter/>*/}
                
            </div>
        </div>
    );
}

export default App;