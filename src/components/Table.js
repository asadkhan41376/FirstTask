"use client"
import React, { useRef } from 'react'

import { Checkbox } from "@/components/ui/checkbox"
const Table = () => {

const Box = useRef(null)
const handleImag =()=>{
  
  
  
}

  return (
    < >


      {
        [...Array(7)].map((_, index) => (
          <div key={index} className='flex items-center justify-between gap-8 p-2'>
            <div >
              <h1 className='text-md rounded-lg  font-bold text-center border w-[200px] h-[35px] border-black  bg-[#FCC737] ' ></h1>
            </div>

            <div className=" flex gap-5" >
              <Checkbox className="w-[35px] h-[30px] " ref={Box} onClick={handleImag} />
              <Checkbox className="w-[35px] h-[30px] " />
              <Checkbox className="w-[35px] h-[30px] " />
              <Checkbox className="w-[35px] h-[30px] " />
              <Checkbox className="w-[35px] h-[30px] " />
              <Checkbox className="w-[35px] h-[30px] " />
              <Checkbox className="w-[35px] h-[30px] " />
            </div>


          </div>
        ))
      }


    </>


  )
}

export default Table
