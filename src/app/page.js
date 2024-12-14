import React from 'react'
import LayoutPage from '../reword-Cart'
import Category from '@/components/Category'
import { GrEdit } from 'react-icons/gr'
import { Input } from '@/components/ui/input'


const page = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center  bg-[url("/myImg/construction.jpg")] bg-no-repeat bg-cover  '>
      {/* ========================= */}
      <div className="flex justify-between items-center w-[70%] py-3">
        <div className=' text-white  px-2 rounded-lg'>

          {/* name input =================== */}
          <div className="flex w-full  items-center relative gap-1 text-black ">
            <label htmlFor="Name" className='text-white text-lg mr-2'>
              Name
            </label>
            <Input type="text" id="Name" placeholder="Asad" className=" bg-transparent border-none placeholder:text-black placeholder:text-lg  rounded-none" />
            <div className=' rounded text-sm p-3 absolute right-0'>

              <GrEdit />
            </div>

          </div>
        </div>


        <h1 className='text-3xl  rounded-md mb-3 text-white'>Reward Chart</h1>
        {/* Date input ================== */}
        <div className="flex items-center relative ">
          <label htmlFor="date" className='text-white text-lg mr-2'>
            Date
          </label>
          <Input type="date" id="Date" placeholder="2-10-2024" className=" bg-transparent border-none placeholder:text-black placeholder:text-lg  rounded-none" />


        </div>


      </div>
      {/* ======================= */}
      <div className='flex gap-2'>
        <Category />
        <LayoutPage />
      </div>

    </div>
  )
}

export default page
