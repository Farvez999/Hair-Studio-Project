import React from 'react';
import About from './About';
import Banner from './Banner';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <p className='text-4xl text-center font-bold text-orange-600 mt-10'>About Us</p>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;