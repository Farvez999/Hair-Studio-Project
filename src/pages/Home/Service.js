import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://service-review-server-farvez999.vercel.app/servicesHome')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false);
            })
    }, []);


    return (
        <div className='mb-20 mt-12'>
            <div>
                <div className='text-center mb-4'>
                    <p className="text-2xl font-bold text-orange-600">Services</p>
                    <h2 className="text-5xl font-semibold">My Service Area</h2>
                    <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }


                </div>
                <div className='text-center mb-4'>
                    <Link to='/services'><button className="btn btn-outline btn-primary mt-6">See All</button></Link>
                </div>
            </div>

            {
                loading ? <div class="flex justify-center items-center">
                    <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                        <span class="visually-hidden">...</span>
                    </div>
                </div> :
                    ''
            }
        </div>
    );
};

export default Service;