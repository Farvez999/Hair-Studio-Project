import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const AddServices = () => {
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.imgURL.value;
        const email = user?.email || 'unregistered';
        const price = form.price.value;
        const description = form.message.value;

        const addService = {
            //  service: _id,
            // serviceName: title,
            // price,
            title: name,
            img,
            email,
            price,
            description
        }

        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

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
        <div>
            <Toaster />
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl">You are about to order: </h2>
                <h4 className="text-3xl">Price: </h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="name" type="text" placeholder="Name" defaultValue={user?.displayName} className="input input-ghost w-full  input-bordered" />
                    <input name="imgURL" type="text" placeholder="Image URL" className="input input-ghost w-full  input-bordered" />
                    <input name="price" type="text" placeholder="Price" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Description" required></textarea>

                <input className='btn' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default AddServices;