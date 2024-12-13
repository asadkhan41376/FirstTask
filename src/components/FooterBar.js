"use client"

import { GrEdit } from "react-icons/gr";
const FooterBar = () => {


  return (
    <>
      <div className=' flex justify-center items-center text-center gap-2 p-2'>
        <div className=' bg-red-800 text-white rounded-lg relative p-3'>
          <label htmlFor="prize" className='text-left text-md text-bold  '>Reward : </label>
          <input id='prize' className='  inline text-sm text-bold placeholder:text-white  bg-transparent' placeholder='pizza and Movie night' />


          <div className=' rounded text-sm p-3 absolute top-0 right-0 text-white'>

            <GrEdit />
          </div>
        </div>


        {/* ======================== */}
        <div className=' bg-red-800 text-white  rounded-lg relative p-3'>

          <label htmlFor="Reward" className='text-md text-bold'>Goal :</label>
          <input id='Reward' className=' w-[50px]  text-md text-bold  placeholder:text-white bg-transparent ' placeholder='50' />
          <div className=' rounded text-sm p-3 absolute top-0 right-[48px] text-white'>

            <GrEdit />
          </div>
          <label htmlFor="Reward" className='text-sm text-bold'> Points</label>
        </div>

        {/* ======================= */}

        <div className=' bg-red-800  text-white   rounded-lg p-3 '>
          <h1 className=' text-left text-md text-bold   '>Total : <span className='text-sm text-bold '> 000</span></h1></div>
      </div>

    </>
  )
}

export default FooterBar
