import React, { useContext, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import toast from 'react-hot-toast'
import useAxiosSecure from '../hooks/useAxiosSecure'
import { Helmet } from 'react-helmet'

const AddItem = () => {
  const { user } = useContext(AuthContext)
  const [startDate, setStartDate] = useState(new Date())

  const axiosSecure = useAxiosSecure()

  const handleAddItem = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData)
    initialData.status = "pending";

    try {
      axiosSecure.post(`/allItems`, initialData)
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
    <div className='w-11/12 mx-auto lg:py-10'>
      <Helmet>
        <title>Lost & Found | AddItems Page</title>
      </Helmet>
      <Link to='/'><button className='dark:text-white font-bold text-2xl py-4 flex items-center gap-2'><span><FaArrowLeftLong></FaArrowLeftLong></span> <span>Back To Home</span></button></Link>
      <div className='bg-purple-300 p-10 rounded dark:bg-gray-800 dark:text-white mb-10'>
        <div className='text-center mb-6'>

          <div className='flex justify-center gap-1 pt-2 dark:text-white'>
            <p className='text-xl lg:text-3xl font-bold'>Add Your Lost OR Find Items</p>

          </div>

        </div>
        <form onSubmit={handleAddItem} className='lg:px-20 w-[100%]'>
          <div className='flex flex-col lg:flex-row w-full gap-6'>
            <div className='flex flex-col w-full'>
              <label htmlFor="title" className='font-semibold text-xl py-3'>Title</label>
              <input type="text" name='title' placeholder="Enter Your title" className="input dark:text-gray-500 input-bordered w-full lg:max-w-3xl" />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor="type" className='font-semibold text-xl py-3'>Post Type</label>
              <select defaultValue='post type' name='type' className="select bg-white text-gray-800 select-bordered w-full max-w-lg">
                {/* <option disabled >Post Type</option> */}
                <option value='Lost'>Lost</option>
                <option value='Found'>Found</option>
              </select>
            </div>
          </div>
          <div className='flex w-full flex-col lg:flex-row gap-6'>
            <div className='flex flex-col w-full'>
              <label htmlFor="name" className='font-semibold text-xl py-3'>Category</label>
              <input type="text" name='category' placeholder="Entr Your Items Category" className="input dark:text-gray-500 input-bordered w-full max-w-3xl" />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor="name" className='font-semibold text-xl py-3'>Lost Or Found Date</label>
              <DatePicker
                name='date'
                className='border bg-white text-gray-700 p-2 w-full rounded-md'
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>
          </div>
          <div className='flex flex-col lg:flex-row w-full gap-6'>
            <div className='flex flex-col w-full'>
              <label htmlFor="name" className='font-semibold text-xl py-3'>Description</label>
              <input type="text" name='description' placeholder="Enter Your description" className="input dark:text-gray-500 input-bordered w-full max-w-3xl" />
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
              <input type="text" name='image' placeholder="Enter Thambnail URL" className="input dark:text-gray-500 input-bordered w-full max-w-5xl" />
            </div>
          </div>

          <button type='submit'
            className='w-[200px] hover:bg-orange-300 btn bg-green-300 my-4 border-black border-2 font-rancho text-xl'>Add Post</button>
        </form>
      </div>
    </div>
  )
}

export default AddItem