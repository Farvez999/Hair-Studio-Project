import React from 'react';
import { Link } from 'react-router-dom';
import { MdReviews } from "react-icons/md"

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description, author } = service;
    console.log(author.authorName)
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                {/* ${news.details.length > 300 ? news.details.slice(0, 300) + '...' : news.details}</p> */}
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">See Details</button>
                    </Link>
                </div>
            </div>
            <div className="flex justify-between p-4">
                <div className="flex">
                    <div className="avatar">
                        <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={author.authorImg} alt='' title={author.authorName} />
                        </div>
                    </div>
                    <div className="ml-3">
                        <h3 className='text-1xl  '>{author.authorName}</h3>
                    </div>
                </div>

                <div className="review flex items-center" title='Reviews'>
                    <Link className='text-primary mr-2'><MdReviews className='text-2xl' /></Link>
                    <p className='font-bold text-[#ff3911] text-xl'></p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;