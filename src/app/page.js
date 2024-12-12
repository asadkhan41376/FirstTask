import React from 'react'
import LayoutPage from '../reword-Cart'
import Category from '@/components/Category'


const page = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center  bg-[url("/myImg/construction.jpg")] bg-no-repeat bg-cover  '>
      <h1 className='text-3xl  rounded-md mb-3 text-white'>Reward Chart</h1>
     <div className='flex '>
      <Category/>
     <LayoutPage/>
     </div>
    
    </div>
  )
}

export default page
