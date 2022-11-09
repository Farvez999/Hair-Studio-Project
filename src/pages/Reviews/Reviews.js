import React, { useEffect, useState } from 'react';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews)

    useEffect(() => {
        fetch('https://service-review-server-farvez999.vercel.app/reviews', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`

            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className='mx-4 my-4'>
            <div className='text-center my-4'>
                <h2 className="text-5xl font-semibold">My Reviews</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <ReviewsCard
                        key={review._id}
                        service={review}
                    ></ReviewsCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;