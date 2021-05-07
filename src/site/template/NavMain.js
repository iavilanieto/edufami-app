import React from 'react';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';

export default function NavMain() {
    return (
        <div class="wfp--main-navigation">
            <div class="wfp--wrapper wfp--wrapper--width-lg wfp--wrapper--width-mobile-full wfp--main-navigation__wrapper">
                <div class="wfp--main-navigation__logo-wrapper"><button tabindex="0" class="wfp--main-navigation__button wfp--btn wfp--btn--primary" type="button">Menu</button>
                    <div class="wfp--main-navigation__logo"><a href="http://localhost:3000">EduFami</a></div>
                </div>
                <ul class="wfp--main-navigation__list">
                    <li class="wfp--main-navigation__user wfp--main-navigation__item">
                        <div class="wfp--main-navigation__trigger wfp--main-navigation__trigger--has-sub">
                            <div class="wfp--user"><svg id="Layer_1" class="wfp--user__icon wfp--user__icon--empty wfp--user__icon--letter" x="0px" y="0px" viewBox="0 0 25 25" height="25px" width="25px"><text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle">M</text></svg><span class="wfp--user__title wfp--user__title--ellipsis"><span>Max Mustermann long name</span></span><svg class="wfp--main-navigation__trigger__icon" fill="#FFFFFF" fill-rule="evenodd" height="5" viewBox="0 0 10 5" width="10" aria-label="expand icon" alt="expand icon">
                                <title>expand icon</title>
                                <path d="M0 0l5 4.998L10 0z"></path>
                            </svg></div>
                        </div>
                        <div class="wfp--main-navigation__sub">
                            <div>
                                <div class="wfp--sub-navigation__header">
                                    <div class="wfp--sub-navigation__title">Welcome Lorem!</div>
                                    <div class="wfp--sub-navigation__link"><button tabindex="0" class="wfp--btn wfp--btn--sm wfp--btn--primary" type="button">Logout</button></div>
                                </div>
                                <div class="wfp--sub-navigation__content">Additional content can be placed here.<br />Demo for internal close action: <a class="wfp--link">Close Menu</a></div>
                            </div>
                        </div>
                    </li>
                    <li class="wfp--main-navigation__user wfp--main-navigation__item">
                        <div class="wfp--main-navigation__trigger wfp--main-navigation__trigger--has-sub"><span>EN<svg class="wfp--main-navigation__trigger__icon" fill="#FFFFFF" fill-rule="evenodd" height="5" viewBox="0 0 10 5" width="10" aria-label="expand icon" alt="expand icon"><title>expand icon</title><path d="M0 0l5 4.998L10 0z"></path></svg></span></div>
                        <div class="wfp--main-navigation__sub">
                            <div>
                                <div class="wfp--sub-navigation__header">
                                    <div class="wfp--sub-navigation__title">Choose language</div>
                                </div>
                                <div class="wfp--sub-navigation__content">
                                    <div class="wfp--sub-navigation__list">
                                        <div class="wfp--sub-navigation__group">
                                            <div>
                                                <div class="wfp--sub-navigation__item"><a href="#" class="wfp--link">English</a></div>
                                                <div class="wfp--sub-navigation__item"><a href="#" class="wfp--link">French <i>(français)</i></a></div>
                                                <div class="wfp--sub-navigation__item"><a href="#" class="wfp--link">German <i>(deutsch)</i></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
