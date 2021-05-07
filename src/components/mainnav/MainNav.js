import React, { useState } from 'react';

import '@wfp/ui/src/globals/scss/styles.scss';
import '../../assets/styles/default/styles.css'
import MainNavItem from './MainNavItem';
import isNull from '../../commons/utils'

const getNavItems = (navItems) => {
    return navItems.map(navItem => {
        return <MainNavItem onItemClick={navItem.onItemClick}>{navItem.name} / </MainNavItem>;
    });
}

export default function MainNav(params) {

    let navItemsComponents = !isNull(params.navItems) ? getNavItems(params.navItems) : null;

    return (
        <div className={'edufami--main-nav__box'} >
            {!isNull(navItemsComponents) ? navItemsComponents : params.children}
        </div>
    );

}
