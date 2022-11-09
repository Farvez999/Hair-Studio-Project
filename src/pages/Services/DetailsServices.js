import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MdRateReview } from "react-icons/md"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const DetailsServices = () => {
    // const { _id, title, price } = useLoaderData();
    const serviceDetails = useLoaderData()

    const { user } = useContext(AuthContext);

    const { _id, img, price, title, description, author } = serviceDetails;


    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.imgURL.value;
        const email = user?.email || 'unregistered';
        const review = form.message.value;

        const addReview = {
            service: _id,
            serviceName: title,
            price,
            title: name,
            img,
            email,
            review
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Add Service successfully')
                    // alert('Add Service successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>

            </div>

            <div>
                <Toaster />
                <form onSubmit={handlePlaceOrder}>
                    <h2 className="text-4xl">You are about to order: </h2>
                    <h4 className="text-3xl">Price: </h4>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="name" type="text" placeholder="Name" defaultValue={user?.displayName} className="input input-ghost w-full  input-bordered" />
                        <input name="imgURL" type="text" placeholder="Image URL" className="input input-ghost w-full  input-bordered" />
                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                    </div>
                    <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Please your Review" required></textarea>

                    <input className='btn' type="submit" value="Place Your Order" />
                </form>
            </div>
            {/* <div className="flex justify-between p-4">
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
            </div> */}
        </div>
    );
};

export default DetailsServices;