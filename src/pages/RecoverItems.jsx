import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const RecoverItems = () => {
  const loderData = useLoaderData()
  const [items, setItems] = useState([])

  useEffect(() => {
    const filterData = loderData.filter(data => data.status === "recovered")
    setItems(filterData)
  }, [])
  return (
    <div className='mx-5 lg:mx-10'>
      <p>RecoverItems: {items.length}</p>
      <div className="overflow-x-auto hidden lg:block dark:text-white py-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='dark:text-white'>

              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {items && items.map((data, indx) => <tr key={data._id}>

              <td><img src={data?.image} className='w-20 h-20 object-cover rounded' alt="productImage" /></td>
              <td className='font-bold'>{data.title}</td>
              <td>{data?.category}</td>
              <td>{data?.status}</td>
              <td>{data.description.substring(0, 70)}.....</td>
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
            <p><span className='font-bold'>Status:</span> {data?.status}</p>
            <p><span className='font-bold'>User:</span> {data?.userEmail}</p>
            <div className="card-actions pt-4">
              <div>
                <Link to={`/details/${data._id}`}><button className='btn mx-2'>Details</button></Link>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default RecoverItems