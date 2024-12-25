import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../providers/AuthProvider'
import { Link, useLoaderData } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { FaEye } from 'react-icons/fa6'

const MyItems = () => {
  
  const { user } = useContext(AuthContext)
  const [items, setItems] = useState([])
//   const [data,setData] = useState(loderData)
//  console.log(data)
  useEffect(() => {
        // const myItems = data.filter(data => data.userEmail === user.email)
        // setData(myItems)
    try {
      axios.get(`${import.meta.env.VITE_SERVER_URL}/allItems/myItems/${user?.email}`)
        .then(res => {
          console.log(res.data)
          setItems(res.data)
        })
    } catch (err) {
      Swal.fire('Error', err.message)

    }
  }, [])

  // delete from db and client site start here
  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "Do You want to delete it",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`${import.meta.env.VITE_SERVER_URL}/allItems/myItems/${id}`)
            .then(res => {
              console.log(res.data)
              if (res.data.deletedCount == 1) {

                Swal.fire({
                  title: "Deleted!",
                  text: "Your Campaign has been deleted.",
                  icon: "success"
                });
                setItems((prevData) => prevData.filter((item) => item._id !== id));
              }
            })
        } catch (err) {
             Swal.fire('Error',err.message)
        }
      }
    });
  }

  return (
    <div className='mx-10'>
      <div className="overflow-x-auto hidden lg:block dark:text-white py-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='dark:text-white'>

              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items && items.map((data, indx) => <tr key={data._id}>

              <td><img src={data.image} className='w-20 h-20 object-cover rounded' alt="productImage" /></td>
              <td className='font-bold'>{data.title}</td>
              <td>{data.description.substring(0, 80)}.....</td>
              <td>
                <button onClick={() => { handleDelete(data._id) }} className='btn'><MdDelete className='text-xl'></MdDelete></button>
                <Link to={`/updateItem/${data._id}`}><button className='btn mx-2'><FiEdit className='text-xl'></FiEdit></button></Link>
                <Link to={`/details/${data._id}`}><button className='btn mx-2'><FaEye className='text-xl'></FaEye></button></Link>
              </td>
            </tr>)}

          </tbody>
        </table>
      </div>
      {/* for small and medium device */}
      <div className='space-y-6 py-6 block lg:hidden'>
        {items && items.map(data => <div key={data._id} className="card bg-base-100 dark:bg-gray-800 dark:text-white shadow border-2">
          <figure className="p-4">
            <img
              src={data?.image}
              alt="Shoes"
              className="rounded-xl w-full h-[320px] object-cover" />
          </figure>
          <div className="p-4 space-y-2">
            <h2 className="card-title">{data?.title}</h2>
            <p><span className='font-bold'>Description:</span> {data?.description.substring(0, 100)}.....</p>
            <p><span className='font-bold'>Amount:</span> {data?.amount}$</p>
            <p><span className='font-bold'>User:</span> {data?.userEmail}</p>
            <div className="card-actions pt-4">
              <Link to={`/detail-campaign/${data._id}`}>
                <button className="btn rounded-full w-[150px] bg-purple-400 dark:bg-gray-500 text-white">See More</button>
              </Link>
              <div>
                <button onClick={() => { handleDelete(data._id) }} className='btn'><MdDelete className='text-xl'></MdDelete></button>
                <Link to={`/update-campaign/${data._id}`}><button className='btn mx-2'><FiEdit className='text-xl'></FiEdit></button></Link>
                <Link to={`/details/${data._id}`}><button className='btn mx-2'><FaEye className='text-xl'></FaEye></button></Link>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default MyItems