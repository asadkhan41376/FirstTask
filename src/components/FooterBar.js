"use client"

import { GrEdit } from "react-icons/gr";
const FooterBar = () => {


  return (
    <>
      <div className=' flex justify-center items-center text-center gap-2 p-2 w-full'>



        <div className=' bg-red-800 text-white rounded-lg relative p-2 w-full'>
          <label htmlFor="prize" className='text-left text-md text-bold  '>Reward : </label>
          <input id='prize' className='  inline text-sm text-bold  placeholder:text-gray-300 bg-transparent border border-gray-500 rounded-lg py-2 pl-2  focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-300 relative z-10' placeholder='pizza and Movie night' />


          <div className='  text-sm p-3 absolute top-2 right-5 text-white'>

            <GrEdit />
          </div>
        </div>


        {/* ======================== */}
        <div className=' w-full bg-red-800 text-white  rounded-lg relative p-2'>

          <label htmlFor="Reward" className='text-md text-bold'>Goal :</label>
          <input id='Reward' className=' w-[60px]  text-md text-bold   placeholder:text-gray-300 bg-transparent border border-gray-500 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-300 relative z-10' placeholder='50' />
          <div className='  text-sm p-3 absolute top-2 right-[118px] text-white'>

            <GrEdit />
          </div>
          <label htmlFor="Reward" className='text-sm text-bold'> Points</label>
        </div>

        {/* ======================= */}

      </div>

    </>
  )
}

export default FooterBar
