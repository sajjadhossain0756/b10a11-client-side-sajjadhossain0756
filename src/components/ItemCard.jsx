import React from 'react'

const ItemCard = ({ item }) => {
    const {title,type,category,date,image,description,displayName,userEmail} = item || {}
    return (
        <div>
            <div className="card bg-purple-300 dark:bg-gray-700 dark:text-white border-2 shadow-lg">
                <figure className="p-4">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl h-[300px] w-full object-cover dark:bg-purple-400" />
                </figure>
                <div className="p-4 space-y-2">
                    <h2 className="card-title">Title: {title}</h2>
                    <p>Description: {description.substring(1,100)}....</p>
                    <div className="card-actions pt-3">
                        <button className="btn bg-green-300 hover:bg-orange-300">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard