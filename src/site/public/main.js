import React from 'react';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';

import Login from './login';
import Courses from '../private/courses';


export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        this.setState({ isLogged: true });
    }

    render() {
        let content = this.state.isLogged === false ? <Login loginHandler={this.handleLogin} /> : <Courses />
        return (
            <div class="wfp--wrapper wfp--wrapper--width-lg wfp--wrapper--spacing-md">
                { content }
            </div>
        );
    }
}
