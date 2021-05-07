import React from 'react'

import '@wfp/ui/src/globals/scss/styles.scss';
import '../../assets/styles/default/styles.css'

export default function MainNavItem(params) {

    const onItemClick = (clickFunction) => {
        if (clickFunction) clickFunction();
    }

    return (
        <div className={'edufami--main-nav__link'} onClick={() => onItemClick(params.onItemClick)} >
            { params.children}
        </div>
    );
}
