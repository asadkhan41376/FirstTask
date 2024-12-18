import React from 'react'
import LayoutPage from '../reword-Cart'
import Category from '@/components/Category'
import { GrEdit } from 'react-icons/gr'
import { Input } from '@/components/ui/input'
import { DnDProvider } from '@/context/DndContext'
import { ReactFlowProvider } from '@xyflow/react'


const page = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center  bg-[url("/myImg/construction.jpg")] bg-no-repeat bg-cover  overflow-y-scroll relative'>
     {/* <div className="absolute w-full top-0 left-0 bg-[#01010178] z-[0] " ></div> */}
      <div className='pt-[80px]'> 
         <h1 className='text-3xl  rounded-md text-white'>Reward Chart</h1>
      </div>
      {/* ========================= */}
      <div className="flex justify-between items-center w-[60%] py-3 ">
        <div className=' text-white  px-2 rounded-lg'>

          {/* name input =================== */}
          <div className="flex w-full  items-center relative gap-1 text-black ">
            <label htmlFor="Name" className='text-white text-lg mr-2'>
              Name
            </label>
            <Input type="text" id="Name" placeholder="Your Name" className=" bg-transparent   placeholder:text-black placeholder:text-lg   border-white rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-300 relative z-10" />
            <div className=' rounded text-sm p-3 absolute right-0 '>

              <GrEdit />
            </div>

          </div>
        </div>



        {/* Date input ================== */}
        <div className="flex items-center relative ">
          <label htmlFor="date" className='text-white text-lg mr-2'>
            Date
          </label>
          <Input type="date" id="Date" placeholder="2-10-2024" className=" bg-transparent   placeholder:text-black placeholder:text-lg   border-white rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-300 relative z-10" />


        </div>


      </div>
      {/* ======================= */}
      <div className='flex gap-2'>

        <ReactFlowProvider>
        <DnDProvider>
          <Category />
          <LayoutPage />
        </DnDProvider>
        </ReactFlowProvider>
        
      </div>

    </div>
  )
}

export default page
