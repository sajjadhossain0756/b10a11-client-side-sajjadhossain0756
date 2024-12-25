import React from 'react'
import bgimg2 from '../assets/images/slide2.jpg'

const AboutUs = () => {
    return (
        <div className='mx-10 mb-10'>
            <div className="hero bg-base-200 dark:bg-gray-700 p-6 rounded-lg">
                <div className="flex gap-6 flex-col lg:flex-row-reverse">
                    <figure className='flex-1'>
                        <img
                            src={bgimg2}
                            className="lg:max-w-xl rounded-lg opacity-50 h-full object-cover" />
                    </figure>
                    <div className='flex-1'>
                        <h1 className="text-4xl font-bold dark:text-gray-300 pb-4">About Us</h1>
                        <div className='flex flex-col gap-3 items-end justify-center'>
                            <p className="py-6 bg-gray-300 text-gray-700 dark:bg-gray-500 dark:text-gray-200 rounded-lg p-4 ">
                                At Lost & Found, we’re on a mission to reunite lost items with their rightful owners. Whether it’s a misplaced phone, a
                                forgotten wallet, or a beloved pet, we provide a simple and effective platform to connect finders and seekers.
                            </p>
                            <p className="py-6 bg-gray-300 text-gray-700 dark:bg-gray-500 dark:text-gray-200 rounded-lg p-4">
                                Founded in [2024] by a team of problem-solvers, we understand the frustration of losing something important. That’s why we’ve created a community-driven space where honesty meets technology. With our intuitive
                                search tools, secure messaging, and location-based listings, we make finding lost items easier than ever.
                            </p>
                            <p className="py-6 bg-gray-300 text-gray-700 dark:bg-gray-500 dark:text-gray-200 rounded-lg p-4">
                                Together, let’s turn those “Oh no!” moments into happy reunions. Join us and help
                                make the world a little more connected, one lost item at a time.
                            </p>
                        </div>
                        <button className="btn bg-green-300 hover:bg-orange-300 mt-5">Show More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs