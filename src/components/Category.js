"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import DnDContext, { DndContext, useDnD, useDnd } from '@/context/DndContext'
import { useContext } from "react"


const Category = () => {

  const [_,setType] =useContext(DnDContext);


  const CategoryItem = [
    { cName: "Set The Table" },
    { cName: "Put Cloths in Laundry" },
    { cName: "Do My Home work" },
    { cName: "Make My Bed" },
    { cName: "Tidy My Room" },
    { cName: "Go To bed On Time " },
    { cName: "Good Night Kisses " },
  ]
  const onDragStart = (event, nodeType) => {
    setType(nodeType);
    event.dataTransfer.setData("text/plain", JSON.stringify({ label: nodeType }));
    event.dataTransfer.effectAllowed = 'move';
  };
  return (

    <ScrollArea className="h-[500px] rounded-md border p-4 backdrop-blur-2xl">
      <div className='flex flex-col gap-2 p-2 ' >
        {
          CategoryItem.map((item, index) => (
            <h1 key={index} onDragStart={(event) => onDragStart(event, "heading")} draggable className='text-md rounded-lg  font-bold text-center border border-black backdrop-blur-md p-1' >{item.cName}</h1>

          ))
        }
      </div>
    </ScrollArea>

  )
}

export default Category
