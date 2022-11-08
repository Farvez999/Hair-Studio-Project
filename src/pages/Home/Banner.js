import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1633681117637-6ee57a2160d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHNhbG9uc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt='' className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMHNhbG9uc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt='' className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1633681122703-3ce20f1e978d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhhaXIlMjBzYWxvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt='' className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1633681926035-ec1ac984418a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhhaXIlMjBzYWxvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt='' className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;