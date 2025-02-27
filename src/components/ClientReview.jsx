import React from 'react'

import slideBgImg from '../assets/images/slide3.jpg';
import client1 from '../assets/images/user-1.png'
import client2 from '../assets/images/user-2.png'
import client3 from '../assets/images/user-3.png'

import { FaArrowCircleRight } from 'react-icons/fa';

const ClientReview = () => {
    return (
        <div className='mx-10 mb-10'>
            <div className="text-center mb-8">
                <p className="flex gap-2 items-center bg-green-200 dark:bg-opacity-90 bg-opacity-70 rounded-full px-6 py-2 w-48 mb-4 font-bold mx-auto">
                    <FaArrowCircleRight className='text-lg'></FaArrowCircleRight>  <span>Our Success</span>
                </p>
                <h1 className="text-3xl md:text-4xl font-bold dark:text-white">Our Client Review</h1>
            </div>
            <div className="carousel w-full rounded">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero py-14"
                        style={{
                            backgroundImage: `url(${slideBgImg})`, borderRadius: '10px',
                            backgroundColor: 'rgba(25, 26, 25, 0.9)', backgroundBlendMode: 'overlay'
                        }}>
                        <div className=" bg-opacity-90"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md md:max-w-2xl">
                                <div className="avatar">
                                    <div className="ring-white ring-offset-base-100 w-24 rounded-full ring ring-offset-2 mb-5">
                                        <img src={client1} />
                                    </div>
                                </div>
                                <h1 className="mb-1 text-xl md:text-2xl font-bold">Alex Anthony</h1>
                                <p className="mb-6">Teacher</p>
                                <p className="text-gray-200">
                                    "We are thoroughly impressed with the outstanding service provided. The team
                                    went above and beyond to ensure our needs were met, demonstrating both professionalism and expertise.
                                    We highly recommend their services to anyone seeking top-notch results."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero py-14"
                        style={{
                            backgroundImage: `url(${slideBgImg})`, borderRadius: '10px',
                            backgroundColor: 'rgba(25, 26, 25, 0.9)', backgroundBlendMode: 'overlay'
                        }}>
                        <div className=" bg-opacity-90"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md md:max-w-2xl">
                                <div className="avatar">
                                    <div className="ring-white ring-offset-base-100 w-24 rounded-full ring ring-offset-2 mb-5">
                                        <img src={client2} />
                                    </div>
                                </div>
                                <h1 className="mb-1 text-xl md:text-2xl font-bold">Jenny Marry</h1>
                                <p className="mb-6">Businessmen</p>
                                <p className="text-gray-200">
                                    The Lost & Found website has been incredibly helpful in reuniting lost items with their owners.
                                    The user-friendly interface makes it easy to report, search, and claim lost items.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero py-14"
                        style={{
                            backgroundImage: `url(${slideBgImg})`, borderRadius: '10px',
                            backgroundColor: 'rgba(25, 26, 25, 0.9)', backgroundBlendMode: 'overlay'
                        }}>
                        <div className=" bg-opacity-90"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md md:max-w-2xl">
                                <div className="avatar">
                                    <div className="ring-white ring-offset-base-100 w-24 rounded-full ring ring-offset-2 mb-5">
                                        <img src={client3} />
                                    </div>
                                </div>
                                <h1 className="mb-1 text-xl md:text-2xl font-bold">Ketty Icme</h1>
                                <p className="mb-6">Lawyer</p>
                                <p className="text-gray-200">
                                This website is a lifesaver! I lost my wallet and was able to post about it within minutes. The interface is simple and intuitive, making it easy to navigate. 
                                I also love how the platform connects people who find lost items with those searching for them.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientReview