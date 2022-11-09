import React from 'react';
import { Link } from 'react-router-dom';

const ReviewsCard = ({ service }) => {
    const { img, serviceName, review } = service;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>Review: {review}</p>
            </div>

        </div>
    );
};

export default ReviewsCard;