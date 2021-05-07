import React from 'react'

import '@wfp/ui/src/globals/scss/styles.scss';
import '../../assets/styles/default/styles.css'

function InfoCard(params) {

    return (
        <>
            <div className={'edufami-info-card__box'}>
                <img src={params.image} alt={params.title} className="edufami-info-card__image" />
                <div className="edufami-info-card__info">
                    <div>
                        {params.metadata && (
                            <p className="edufami-info-card__info__metadata">{params.metadata}</p>
                        )}
                        {params.title && (
                            <h3 className="edufami-info-card__info__title">{params.title}</h3>
                        )}
                        {params.subTitle && (
                            <p className="edufami-info-card__info__subtitle">{params.subTitle}</p>
                        )}
                        {params.onClick && (
                            <p><br /><button tabindex="0" class="edufami-info-card__button wfp--btn wfp--btn--primary" type="button" onClick={params.onClick}> Iniciar </button></p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoCard;