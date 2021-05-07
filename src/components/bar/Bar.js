import React from 'react'

import '@wfp/ui/src/globals/scss/styles.scss';
import '../../assets/styles/default/styles.css'

export default function Bar(params) {

    return (
        <div className={'edufami--bar'}>
            {params.children}
        </div>
    );
}
