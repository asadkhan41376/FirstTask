"use client"

import React, { useState } from 'react'

const FooterBar = () => {


  return (
    <div>
      <div className=' grid grid-cols-8 gap-2 text-center '>
     <div className='col-span-4 bg-red-800 text-white rounded-lg '> <label htmlFor="prize" className='text-lg text-bold'>Reward :</label><input id='prize' className='text-lg text-bold p-2 placeholder:text-white bg-transparent' placeholder='pizza and Movie night'  /> </div>

{/* ======================== */}
     <div className='col-span-2 bg-red-800 text-white  px-2 rounded-lg'>  <label htmlFor="Reward" className='text-lg text-bold'>Goal :</label><input id='Reward' className=' w-[120px] text-lg text-bold p-2 placeholder:text-white bg-transparent' placeholder='50 points'  /></div>

     {/* ======================= */}
     <div className='col-span-2 bg-red-800  text-white   rounded-lg '><h1 className=' text-left p-2 text-lg text-bold'>Total :</h1></div>
    </div>
    </div>
  )
}

export default FooterBar
