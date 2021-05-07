import React from 'react';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';

export default function NavSecondary() {
    return (
        <div class="wfp--secondary-navigation">
            <div class="wfp--wrapper wfp--wrapper--width-lg wfp--secondary-navigation__wrapper">
                <div class="wfp--secondary-navigation__list">
                    <div class="wfp--breadcrumb wfp--breadcrumb--no-trailing-slash">
                        <div class="wfp--breadcrumb-item"><a href="/#" class="wfp--link"><svg class="wfp--breadcrumb-home" fill="#0b77c2" fill-rule="evenodd" height="14" viewBox="0 0 16 16" width="14" aria-label="Provide a description that will be used as the title" alt="Provide a description that will be used as the title">
                            <title>Provide a description that will be used as the title</title>
                            <path d="M13.555 9.515v3.842a.654.654 0 01-.666.643H9.666a.329.329 0 01-.333-.322v-3.002a.329.329 0 00-.334-.322H7a.329.329 0 00-.333.322v3.002c0 .177-.15.322-.334.322H3.11a.654.654 0 01-.667-.643V9.515a.32.32 0 01.122-.25l5.223-4.149a.348.348 0 01.425 0l5.223 4.15c.075.062.12.153.12.25zm2.323-1.632l-2.323-1.847V2.323a.329.329 0 00-.333-.322h-1.556a.329.329 0 00-.333.322v1.946L8.846 2.294a1.37 1.37 0 00-1.694 0L.12 7.883a.315.315 0 00-.045.453l.709.83a.343.343 0 00.469.044l6.534-5.193a.348.348 0 01.425 0l6.534 5.193a.343.343 0 00.47-.043l.708-.831a.315.315 0 00-.047-.453z"></path>
                        </svg></a></div>
                        <div class="wfp--breadcrumb-item"><a href="#" class="wfp--link">Breadcrumb 2</a></div>
                        <div class="wfp--breadcrumb-item"><a href="#" class="wfp--link">Breadcrumb 3</a></div>
                    </div>
                    <h1 class="wfp--secondary-navigation__title">The page title</h1>
                    <nav class="wfp--tabs some-class">
                        <div class="wfp--tabs__nav__bar"></div>
                        <ul class="wfp--tabs__nav wfp--tabs__nav--inline">
                            <li tabindex="-1" class="wfp--tabs__nav-item wfp--tabs__nav-item--selected another-class" selected=""><a href="http://www.de.wfp.org">Tab label 1</a></li>
                            <li tabindex="-1" class="wfp--tabs__nav-item another-class"><a href="http://www.es.wfp.org">Tab label 2</a></li>
                            <li tabindex="-1" class="wfp--tabs__nav-item another-class"><a href="http://www.us.wfp.org">Tab label 3</a></li>
                            <li tabindex="-1" class="wfp--tabs__nav-item another-class"><a href="http://www.fr.wfp.org">Tab label 4</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="wfp--secondary-navigation__additional">additional Information</div>
            </div>
        </div>
    );
}
