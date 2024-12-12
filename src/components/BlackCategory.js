import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"


const BlackCategory = () => {
  return (

    <ScrollArea className="h-[350px] rounded-md border p-3">
    <div className='flex flex-col gap-2  ' >
      {
        [...Array(7)].map((item, index) => (
          <h1 key={index} className='text-md rounded-lg  font-bold text-center border w-[200px] h-[40px] border-black  bg-yellow-600 ' >{item}</h1>

        ))
      }
    </div>
    </ScrollArea>
    
  )
}

export default BlackCategory
