import React from 'react'

import { Checkbox } from "@/components/ui/checkbox"
import Weeks from './Weeks'

const Table = () => {
  return (
    < >

     
      {
        [...Array(7)].map((_, index) => (
          <div className='flex items-center justify-between gap-6 p-2'>
          <div>
                  <h1 key={index} className='text-md rounded-lg  font-bold text-center border w-[200px] h-[35px] border-black  bg-yellow-600 ' ></h1>
                </div>
           
           <div className=" flex gap-5">
           
           <Checkbox className="w-[30px] h-[30px] " />
            <Checkbox className="w-[30px] h-[30px] " />
            <Checkbox className="w-[30px] h-[30px] " />
            <Checkbox className="w-[30px] h-[30px] " />
            <Checkbox className="w-[30px] h-[30px] " />
            <Checkbox className="w-[30px] h-[30px] " />
           </div>


</div>
))
}


    </>


  )
}

export default Table
