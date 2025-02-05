import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ItemCard from '../components/ItemCard'
import Swal from 'sweetalert2'

const AllItems = () => {
  const [items, setItems] = useState([])
  const [search,setSearch] = useState('');

  console.log(search)
  console.log(items)
  useEffect(() => {
    try {
      axios.get(`http://localhost:3000/allItems?search=${search}`)
        .then(res => {
          console.log(res.data)
          setItems(res.data)
        })
    } catch (err) {
      Swal.fire('Error', err.message)

    }
  }, [search])
  return (
    <div className='m-10'>
      <form className='text-center'>
        <input
          type="text"
          placeholder="Search By Title Name"
          onChange={e => {setSearch(e.target.value)}}
          className="input input-bordered input-primary w-full max-w-xs" />
      </form>
      <h2 className='font-bold text-4xl p-3 dark:text-white'>Total Items: {items.length}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {items && items.map(item => <ItemCard key={item._id} item={item}></ItemCard>)}
      </div>
    </div>
  )
}

export default AllItems