import React from 'react'
import backup from '../assets/backup.png'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
   <section className='flex flex-col justify-center px-2' >
   
    <div className='flex flex-col items-center my-4'>
    <p className='text-7xl font-bold my-10 dark:text-white'>
      404, Oops
    </p>
    <div className='max-w-lg'>
    <img src={backup} alt="" />
    </div>
    </div>
    <div className='flex justify-center my-4'>
     <Link to>"/"
     <button className='w-64 text-xl bg-blue-50  text-white rounded px-5 py-2.5 mr-2 mb-2 font-medium'>Back to Home Page</button>
     </Link>
      
        

    
    </div>
   </section>
  )
}

export default PageNotFound
