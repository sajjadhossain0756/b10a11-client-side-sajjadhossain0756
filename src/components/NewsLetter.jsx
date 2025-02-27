import React from 'react'
import { HiOutlineMailOpen } from 'react-icons/hi'

const NewsLetter = () => {
    return (
        <div className='mx-10 mb-10 p-6 rounded-lg bg-gradient-to-r text-white 
                            from-teal-500 to-red-500 dark:from-gray-700 dark:to-gray-800'>
            <div className='flex flex-col justify-center items-center bg-gradient-to-r text-white 
                            from-pink-500 to-purple-400 dark:from-gray-600 dark:to-gray-700 max-w-3xl mx-auto p-5 rounded-lg'>
                <div className='mb-3'>
                    <HiOutlineMailOpen className='text-7xl text-green-500 ' />
                </div>
                <h2 className='text-2xl md:text-4xl font-bold dark:text-white pb-2'>Subscribe Our Newsletter</h2>
                <p className='max-w-2xl text-center mx-auto text-white/70'>Subscribe to our newsletter to stay updated on your listed items.
                    Get instant notifications and the latest news directly in your inbox.
                    Stay informed and increase your chances of recovering lost belongings</p>
                <div className="join mt-5 max-w-2xl">
                    <input className="rounded-l-full pl-6 input input-bordered join-item" placeholder="Enter Your Email" />
                    <button className="btn join-item rounded-r-full bg-pink-400 hover:bg-green-400 text-white">Subscribe</button>
                </div>
            </div>

        </div>
    )
}

export default NewsLetter