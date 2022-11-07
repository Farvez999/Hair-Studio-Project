import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-5 rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://images.unsplash.com/photo-1519160558534-579f5106e43f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Travel Tips!</h1>
                    <p className="py-6">We provide tools for travel professionals to create experiences their customers love. TheTravel Tips is centrally located and a short walk from many of the area’s most popular hotels and visitor hot spots. With the narrow historic roads of the French Quarter, walking is usually not only the quickest route but certainly has the least impact on our environment.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;