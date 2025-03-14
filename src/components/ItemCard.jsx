import React from 'react'
import { Link } from 'react-router-dom'
import { easeOut, motion } from 'framer-motion';

const ItemCard = ({ item }) => {
    const {_id,title,type,category,date,image,description,displayName,userEmail} = item || {}
    return (
        <div>
            <div className="card bg-purple-300 dark:bg-gray-700 dark:text-white 
            border-2 dark:border-purple-400 shadow-lg">
                <figure className="p-4">
                    <motion.img
                        animate={{y: [0, 10, 0]}}
                        transition={{ duration: 7,repeat: Infinity }}
                        src={item?.image}
                        alt="Shoes"
                        className="rounded-xl h-[300px] w-full object-cover dark:bg-purple-400" />
                </figure>
                <div className="p-4 space-y-2">
                    <h2 className="card-title">{title}</h2>
                    <p>{description.substring(1,100)}....</p>
                    <div className='flex gap-20'>
                        <p className='font-bold'>Type: {type}</p>
                        <p className='font-bold'>Category: {category}</p>
                    </div>
                    <p className='font-bold'>Date: {date}</p>
                    <div className="card-actions pt-3">
                        <Link to={`/details/${_id}`}><button className="btn bg-green-300 hover:bg-orange-300">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard