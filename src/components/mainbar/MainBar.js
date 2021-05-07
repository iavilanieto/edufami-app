import React from 'react'

import Bar from '../bar/Bar'

import '@wfp/ui/src/globals/scss/styles.scss';
import '../../assets/styles/default/styles.css'

export default function MainBar(params) {

    return (
        <Bar params>
            <div className={'title'}>EduFami</div>
            {params.children}
        </Bar>
    );
}
