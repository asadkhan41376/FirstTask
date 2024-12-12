import React from 'react'

import { Checkbox } from "@/components/ui/checkbox"

const Table = () => {
  return (
    <>

      {
        [...Array(7)].map((_, index) => (
          <div className='flex items-center  justify-center gap-7 py-2  '>
            <Checkbox className="w-[30px] h-[30px] " />
            <Checkbox className="w-[30px] h-[30px] " />
            <Checkbox className="w-[30px] h-[30px] " />
            <Checkbox className="w-[30px] h-[30px] " />
            <Checkbox className="w-[30px] h-[30px] " />
            <Checkbox className="w-[30px] h-[30px] " />
           

          </div>
        ))
      }


    </>


  )
}

export default Table
