import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {

    const [services, setServices] = useState([]);

    const [loading, setLoading] = useState(false);

    useTitle('All Services');


    useEffect(() => {
        setLoading(true);
        fetch('https://service-review-server-farvez999.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false);
            })
    }, []);

    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="text-5xl font-semibold">My Service Area</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <AllServicesCard
                        key={service._id}
                        service={service}
                    ></AllServicesCard>)
                }
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

export default AllServices;