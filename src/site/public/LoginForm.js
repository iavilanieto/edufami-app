import React from 'react';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';
import Login from '../../hooks/login/Login';

export default function LoginForm({ loginHandler }) {

    return (
        <div class="wfp--wrapper wfp--wrapper--width-lg wfp--wrapper--spacing-md">
            <Login loginHandler={loginHandler} />
        </div>
    );

}
