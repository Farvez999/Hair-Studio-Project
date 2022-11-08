import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/servicesHome')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className='mb-20 mt-12'>
            <div>
                <div className='text-center mb-4'>
                    <p className="text-2xl font-bold text-orange-600">Services</p>
                    <h2 className="text-5xl font-semibold">Our Service Area</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
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
        </div>
    );
};

export default Service;