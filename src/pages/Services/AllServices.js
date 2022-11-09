import React, { useEffect, useState } from 'react';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://service-review-server-farvez999.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <AllServicesCard
                        key={service._id}
                        service={service}
                    ></AllServicesCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;