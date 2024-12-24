import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AuthContext } from '../providers/AuthProvider'

const Details = () => {
    const { user } = useContext(AuthContext)
    const loderData = useLoaderData()
    const { _id, title, type, category, date, image, description, displayName, userEmail } = loderData || {}
    const [startDate, setStartDate] = useState(new Date())
    return (
        <div className="hero bg-gray-200 dark:bg-gray-700 px-10 ">
            <div className="hero-content bg-purple-300 dark:bg-gray-700 flex-col lg:flex-row-reverse border-green-500 border-[6px] my-4 rounded-lg gap-10">
                <figure className='flex-1'>
                    <img
                        src={image}
                        className="w-full rounded-lg h-[450px] object-cover" />
                </figure>
                <div className='flex-1 dark:text-gray-300'>
                    <h1 className="text-4xl font-bold pb-3">Title: {title}</h1>
                    <p className="py-6">
                        Description: {description}
                    </p>
                    <div className='flex gap-28 font-semibold py-3'>
                        <p>Type: {type}</p>
                        <p>Category: {category}</p>
                    </div>
                    <div className='space-y-3 font-semibold'>
                        <p>Posted Date: {date}</p>
                        <p>Name: {displayName}</p>
                        <p>Email: {userEmail}</p>
                    </div>
                    {/*  <button className="btn bg-green-300 hover:bg-orange-300 mt-6">Get Started</button> */}
                    <div>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        {type === 'Lost' ? (<button className="btn bg-green-300 hover:bg-orange-300 mt-6" onClick={() => document.getElementById('my_modal_5').showModal()}>Found This!</button>)
                            : (<button className="btn bg-green-300 hover:bg-orange-300 mt-6" onClick={() => document.getElementById('my_modal_5').showModal()}>This is Mine!</button>)}
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box bg-gray-500">
                                <form >
                                    <div className='flex gap-3 flex-col'>
                                        <label htmlFor="location" className='font-bold'>Recover Location</label>
                                        <input type="text" name='location' placeholder="Type here" className="input input-bordered w-full" />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor="name" className='font-bold py-3'>Recover Date</label>
                                        <DatePicker
                                            name='date'
                                            className='border bg-white text-gray-700 p-2 w-full rounded-md'
                                            selected={startDate}
                                            onChange={date => setStartDate(date)}
                                        />
                                    </div>

                                    <div className='flex gap-3 flex-col'>
                                        <label htmlFor="userName" className='font-bold'>Name</label>
                                        <input type="text" name='name' readOnly placeholder={user?.displayName} className="input input-bordered w-full" />
                                    </div>
                                    <div>
                                        <label htmlFor="photo" className='font-bold'>Photo URL</label>
                                        <input type="text" name='photo' readOnly placeholder={user?.photoURL} className="input input-bordered w-full" />
                                    </div>
                                    <div>
                                        <label htmlFor="photo" className='font-bold'>Email</label>
                                        <input type="text" name='email' readOnly placeholder={user?.email} className="input input-bordered w-full" />
                                    </div>

                                    <div className="modal-action ">
                                        <form method="dialog ">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn w-[150px] bg-green-300 hover:bg-orange-300">Submit</button>
                                        </form>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details