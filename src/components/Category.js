
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"


const Category = () => {


  const CategoryItem = [
    { cName: "Set The Table" },
    { cName: "Put Cloths in Laundry" },
    { cName: "Do My Home work" },
    { cName: "Make My Bed" },
    { cName: "Tidy My Room" },
    { cName: "Go To bed On Time " },
    { cName: "Good Night Kisses " },
  ]
  return (

    <ScrollArea className="h-[500px] rounded-md border p-4 backdrop-blur-2xl">
      <div className='flex flex-col gap-2 p-2 ' >
        {
          CategoryItem.map((item, index) => (
            <h1 key={index} className='text-md rounded-lg  font-bold text-center border border-black backdrop-blur-md p-2' >{item.cName}</h1>

          ))
        }
      </div>
    </ScrollArea>

  )
}

export default Category
