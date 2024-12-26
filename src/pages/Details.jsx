import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AuthContext } from '../providers/AuthProvider'
import axios from 'axios'
import toast from 'react-hot-toast'

const Details = () => {
    const { user } = useContext(AuthContext)
    const loderData = useLoaderData()
    const { _id, title,status, type, category, date, image, description, displayName, userEmail } = loderData || {}
    const [startDate, setStartDate] = useState(new Date())

    const handleRecoverItems = (e,id,prevStatus,curStatus) => {
        // console.log(id,prevStatus,curStatus,loderData?.status);
        
        if(prevStatus === curStatus || prevStatus === "recovered"){
            return console.log('data not alowed')
        }
        try{
           axios.patch(`${import.meta.env.VITE_SERVER_URL}/allItems/${id}`,{curStatus})
           .then(res =>{
              console.log(res.data)
           })
        }catch(err){
            console.log(err)
        }
        e.preventDefault()
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData)

        try {
            axios.post(`${import.meta.env.VITE_SERVER_URL}/recoveredItems`, initialData)
                .then(res => {
                    console.log(res.data)
                    e.target.reset()
                    if (res.data.insertedId) {
                        toast.success('Data Successfully Added..')
                    }
                })
        } catch (err) {
            console.log('Error', err.message)
            toast.error('Error', err.message)
        }
    }

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
                                <form onSubmit={(e)=>handleRecoverItems(e,_id, status,"recovered")}>
                                    <div className='flex gap-3 flex-col'>
                                        <label htmlFor="location" className='font-bold'>Recover Location</label>
                                        <input type="text" name='location' placeholder="Type here" className="input input-bordered w-full" />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor="date" className='font-bold py-3'>Recover Date</label>
                                        <DatePicker
                                            name='date'
                                            className='border bg-white text-gray-700 p-2 w-full rounded-md'
                                            selected={startDate}
                                            onChange={date => setStartDate(date)}
                                        />
                                    </div>

                                    <div className='flex gap-3 flex-col'>
                                        <label htmlFor="userName" className='font-bold'>Name</label>
                                        <input type="text" name='name' readOnly defaultValue={user?.displayName} className="input input-bordered w-full" />
                                    </div>
                                    <div>
                                        <label htmlFor="photo" className='font-bold'>Photo URL</label>
                                        <input type="text" name='photo' readOnly defaultValue={user?.photoURL} className="input input-bordered w-full" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className='font-bold'>Email</label>
                                        <input type="email" name='email' readOnly defaultValue={user?.email} className="input input-bordered w-full" />
                                    </div>

                                    <button className="btn w-[150px] bg-green-300 hover:bg-orange-300 my-4">Submit</button>
                                </form>
                                <div className="modal-action absolute bottom-[34px] left-[188px]">
                                    <form method="dialog ">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn w-[150px] hover:bg-green-300 bg-orange-300">close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details