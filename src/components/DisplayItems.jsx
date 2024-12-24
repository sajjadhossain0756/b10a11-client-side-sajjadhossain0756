import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import ItemCard from './ItemCard'
import { Link } from 'react-router-dom'

const DisplayItems = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        try {
            axios.get(`${import.meta.env.VITE_SERVER_URL}/allItems`)
                .then(res => {
                    console.log(res.data.slice(0, 6))
                    setItems(res.data.slice(0, 6))
                })
        } catch (err) {
            Swal.fire('Error', err.message)

        }
    }, [])
    return (
        <div className='px-10 py-8'>
             <h2 className='text-4xl font-bold pb-8 dark:text-white text-center'>Latest Lost & Found Items</h2>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {items && items.map(item => <ItemCard key={item._id} item={item}></ItemCard>)}
             </div>
             <div className='text-center'>
             <Link to='/allItems'><button className='btn bg-green-300 hover:bg-orange-300 my-4 w-[160px]'>See All</button></Link>
             </div>
        </div>
    )
}

export default DisplayItems