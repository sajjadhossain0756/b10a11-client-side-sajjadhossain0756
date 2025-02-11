/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { easeOut, motion } from 'framer-motion';

const Slide = ({ image, text,title }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[32rem] '
      style={{
        backgroundImage: `url(${image})`,
        borderRadius: '4px'
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/80'>
        <div className='text-center flex flex-col justify-center items-center gap-3 px-8 lg:px-2 '>
          <motion.h1 
          animate={{color:['#ecff33','#00FF00']}}
          transition={{duration:3, repeat: Infinity}}
          className='text-3xl pb-2 font-semibold text-gray-300 lg:text-4xl'>
            {title}
          </motion.h1>
          <p className='text-gray-400 lg:w-[700px]'>{text}</p>
          
          <Link
            to='/add-job'
            className='w-[150px] px-5 py-4 text-sm font-medium text-white capitalize transition-colors 
            duration-300 transform bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500'
          >
            Find Items
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide
