import React from 'react';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';

export default function Course(params) {
    const { name, content } = params;
    let contentValue = content ? content : <p>En construcción</p>;
    return (
        <div class="wfp--theme-light">
            <div class="wfp--card-box wfp--photo-cardnew--image-header" anObjectProperty="[object Object]">
                <div class="wfp--photo-cardnew__background"></div><img src="http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg" alt="The Climate Adaption Mangement and Innovation Initiative" class="wfp--header-photo" />
                <div class="wfp--photo-cardnew__info">
                    <div>
                        <p class="wfp--photo-cardnew__info__metadata">{name}</p>
                        <h3 class="wfp--photo-cardnew__info__title">{name}</h3>
                        <p class="wfp--photo-cardnew__info__subtitle">{contentValue}</p> <br />
                        <p class="wfp--photo-cardnew__info__subtitle">
                            <div><button tabindex="0" class="wfp--btn wfp--btn--primary" type="button">Iniciar</button></div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
