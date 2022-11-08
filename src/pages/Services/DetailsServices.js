import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MdRateReview } from "react-icons/md"

const DetailsServices = () => {

    const serviceDetails = useLoaderData()

    const { img, price, title, description, author } = serviceDetails;
    // console.log(img)
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>

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
                    <Link className='text-primary mr-2'><MdRateReview className='text-2xl' /></Link>
                    <p className='font-bold text-[#ff3911] text-xl'></p>
                </div>
            </div>
        </div>
    );
};

export default DetailsServices;