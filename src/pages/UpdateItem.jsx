import React, { useContext, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link, useLoaderData } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AuthContext } from '../providers/AuthProvider'
import toast from 'react-hot-toast'
import axios from 'axios'

const UpdateItem = () => {
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date())
    const loderData = useLoaderData()
    const handleUpdateItem = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const updateData = Object.fromEntries(formData.entries());
        console.log(updateData)

        try {
            axios.put(`${import.meta.env.VITE_SERVER_URL}/allItems/${loderData?._id}`, updateData)
                .then(res => {
                    console.log(res.data)
                    e.target.reset()
                    if (res.data.modifiedCount) {
                        toast.success('Data Successfully Updated..')
                    }
                })
        } catch (err) {
            console.log('Error', err.message)
            toast.error('Error', err.message)
        }

    }
    return (
        <div className='w-11/12 mx-auto lg:py-10'>
            <Link to='/'><button className='dark:text-white font-bold text-2xl py-4 flex items-center gap-2'>
                <span><FaArrowLeftLong></FaArrowLeftLong></span> <span>Back To Home</span></button></Link>
            <div className='bg-purple-300 p-10 rounded dark:bg-gray-800 dark:text-white mb-10'>
                <div className='text-center mb-6'>

                    <div className='flex justify-center gap-1 pt-2 dark:text-white'>
                        <p className='text-xl lg:text-3xl font-bold'>Update Your Lost OR Find Items</p>

                    </div>

                </div>
                <form onSubmit={handleUpdateItem} className='lg:px-20 w-[100%]'>
                    <div className='flex flex-col lg:flex-row w-full gap-6'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="title" className='font-semibold text-xl py-3'>Title</label>
                            <input type="text" name='title' defaultValue={loderData?.title} className="input dark:text-gray-700 input-bordered w-full lg:max-w-3xl" />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="type" className='font-semibold text-xl py-3'>Post Type</label>
                            <select defaultValue={loderData?.type} name='type' className="select bg-white text-gray-800 select-bordered w-full max-w-lg">
                                <option disabled >{loderData?.type}</option>
                                <option value='Lost'>Lost</option>
                                <option value='Found'>Found</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex w-full flex-col lg:flex-row gap-6'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="name" className='font-semibold text-xl py-3'>Category</label>
                            <input type="text" name='category' defaultValue={loderData?.category} className="input dark:text-gray-500 input-bordered w-full max-w-3xl" />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="name" className='font-semibold text-xl py-3'>Lost Or Found Date</label>
                            <DatePicker
                                name='date'
                                defaultValue={loderData?.date}
                                className='border bg-white text-gray-700 p-2 w-full rounded-md'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row w-full gap-6'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="name" className='font-semibold text-xl py-3'>Description</label>
                            <input type="text" name='description' defaultValue={loderData?.description} className="input dark:text-gray-500 input-bordered w-full max-w-3xl" />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="name" className='font-semibold text-xl py-3'>User Name</label>
                            <input type="text" name='displayName' readOnly defaultValue={user.displayName} className="dark:text-gray-400 input input-bordered w-full max-w-3xl" />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row w-full gap-6'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="name" className='font-semibold text-xl py-3'>User Email</label>
                            <input type="text" name='userEmail' defaultValue={user?.email} readOnly className="input dark:text-gray-400 input-bordered w-full max-w-5xl" />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="name" className='font-semibold text-xl py-3'>Thumbnail URL</label>
                            <input type="text" name='image' defaultValue={loderData?.image} className="input dark:text-gray-500 input-bordered w-full max-w-5xl" />
                        </div>
                    </div>

                    <button type='submit'
                        className='w-[200px] hover:bg-orange-300 btn bg-green-300 my-4 border-black border-2 
                         text-xl'>Update Post</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateItem