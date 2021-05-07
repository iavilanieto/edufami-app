import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux'

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';

function fetchToken(user, password) {
    return fetch('http://laravel.nrcolombia.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ dni: user, password: password })
    });
}

function verifyPasscode(user, password) {
    return fetchToken(user, password).then(async res => {
        const jsonResponse = await res.json();
        if (res.status !== 200) {
            return { isValid: false, error: jsonResponse.error?.message };
        }

        if (res.ok && jsonResponse.data.access_token) {
            return { isValid: true, token: jsonResponse.data.access_token };
        }
    });
}


export default function Login({ loginHandler }) {

    const defaultValue = ""
    const [user, setUser] = useState(defaultValue)
    const [password, setPassword] = useState(defaultValue)
    const [isValid, setIsValid] = useState(true)

    const submitLoginForm = (event) => {
        event.preventDefault();
        verifyPasscode(user, password).then(verification => {
            if (verification?.isValid) {
                setPassword(defaultValue);
                window.sessionStorage.setItem('user', user);
                window.sessionStorage.setItem('token', verification.token);

                if (loginHandler != null) loginHandler();

                setIsValid(true);

            } else {
                setIsValid(false);
            }
        })
    }

    const msgIsValid = !isValid ? <div for="email" class="wfp--form__helper-text">Username / Password is invalid</div> : <></>;
    return (
        <div className={'edufami--login__box'}>
            <div className={'edufami--course-selected__space-top'} />
            <form class="wfp--form" onSubmit={(e) => { submitLoginForm(e) }}>
                <div class="wfp--fieldset wfp--fieldset__align-vertical wfp--fieldset__breakpoint-md wfp--fieldset__input-spacing-lg">
                    <div className={'edufami--course-selected__banner'}>
                        <h1>Edufami</h1>
                    </div>
                    <div className={'edufami--course-selected__space-mid'} />
                    {msgIsValid}
                    <legend class="wfp--form-group__title">Login</legend>
                    <div class="wfp--fieldset__content">
                        <div class="wfp--form-item wfp--form-item--invalid"><label for="email" class="wfp--label">Documento de Identidad</label>
                            {/** <div for="email" class="wfp--form__helper-text">Enter the email adress you've used when you've registred</div> */}
                            <div class="wfp--input-wrapper"><input type="text" id="email" class="wfp--input wfp--text-input" placeholder="Documento de Identidad" value={user} onChange={(e) => { setUser(e.target.value) }} /></div>
                        </div><br />
                        <div class="wfp--form-item wfp--form-item--invalid"><label for="password" class="wfp--label">Clave*</label>
                            <div class="wfp--input-wrapper"><input type="password" id="password" class="wfp--input wfp--text-input" value={password} onChange={(e) => { setPassword(e.target.value) }} /></div>
                        </div><br /><button tabindex="0" class="some-class wfp--btn wfp--btn--primary" type="submit" >Submit</button>
                    </div>
                </div>
            </form>
        </div>

    );

}
