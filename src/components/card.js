import React from 'react';

const TheCard = (props) => {
    return (
        <div className="card">
            <div className="card__title">
                {props.card.title}
            </div>
            <div className="card__description">
                {props.card.description}
            </div>
        </div>
    )
}
export default TheCard;