import React from 'react';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';

export default function NavMain() {
    return (
        <div class="wfp--main-navigation">
            <div class="wfp--wrapper wfp--wrapper--width-lg wfp--wrapper--width-mobile-full wfp--main-navigation__wrapper">
                <div class="wfp--main-navigation__logo-wrapper"><button tabindex="0" class="wfp--main-navigation__button wfp--btn wfp--btn--primary" type="button">Menu</button>
                    <div class="wfp--main-navigation__logo"><a href="http://www.wfp.org">EduFami</a></div>
                </div>
                <ul class="wfp--main-navigation__list">
                    <li class="wfp--main-navigation__item">
                        <div class="wfp--main-navigation__trigger"><a href="http://communities.wfp.org" class="wfp--link" target="_blank">Section 1</a></div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
