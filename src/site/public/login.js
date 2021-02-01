import React from 'react';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        const { loginHandler } = this.props;
        if (loginHandler != null) loginHandler();
    }

    render() {

        return (
            <div class="wfp--theme-light">
                <form class="wfp--form" onSubmit={this.handleLogin}>
                    <div class="wfp--fieldset wfp--fieldset__align-vertical wfp--fieldset__breakpoint-md wfp--fieldset__input-spacing-lg">
                        <legend class="wfp--form-group__subtitle">Edufami</legend>
                        <legend class="wfp--form-group__title">Login</legend>
                        <div class="wfp--fieldset__content">
                            <div class="wfp--form-item wfp--form-item--invalid"><label for="email1" class="wfp--label">Your email address</label>
                                <div for="email1" class="wfp--form__helper-text">Enter the email adress you've used when you've registred</div>
                                <div class="wfp--input-wrapper"><input type="email" id="email1" class="wfp--input wfp--text-input" placeholder="c*****@wfp.org" /></div>
                            </div><br />
                            <div class="wfp--form-item wfp--form-item--invalid"><label for="password2" class="wfp--label">Password*</label>
                                <div class="wfp--input-wrapper"><input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" id="password2" class="wfp--input wfp--text-input" /></div>
                            </div><br /><button tabindex="0" class="some-class wfp--btn wfp--btn--primary" type="submit" >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}
