"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import DnDContext, { DndContext, useDnD, useDnd } from '@/context/DndContext'
import { useContext } from "react"


const Category = () => {

  const [_,setType] =useContext(DnDContext);


  const CategoryItem = [
    { cName: "Put away toys" ,
      bgcolor:"#A1EEBD" //blue

    },
    { cName: "Collect dirty clothes" ,
      bgcolor:"#CB9DF0" // pink
    },
    { cName: "Make bed" ,
      bgcolor:"#A1EEBD" //blue
    },
    { cName: "Wipe cabinets" ,
      bgcolor:"#CB9DF0" // pink
    },
    { cName: "Set or clean dinner table" ,
      bgcolor:"#A1EEBD" //blue
    },
    { cName: "Match socks" ,
      bgcolor:"#CB9DF0" // pink
    },
    { cName: "Fold laundry" ,
      bgcolor:"#CB9DF0" // pink
    },
    { cName: "Water plants" ,
      bgcolor:"#A1EEBD" //blue
    },
    { cName: "Feed the pet" ,
      bgcolor:"#A1EEBD" //blue
    },
   
  ]
  const onDragStart = (event, nodeType) => {
    setType(nodeType);
    event.dataTransfer.setData("text/plain", JSON.stringify({ label: nodeType }));
    event.dataTransfer.effectAllowed = 'move';
  };
  return (
<div className=" rounded-md border p-4 backdrop-blur-2xl">

<h1   className={`text-md rounded-lg mb-2  font-bold text-center border bg-white text-black border-black backdrop-blur-md p-2 ` }>Master task list</h1>

    <ScrollArea className=" h-[400px] rounded-md border p-2 backdrop-blur-2xl">
      <div className='flex flex-col gap-2 p-2 ' >
        {
          CategoryItem.map((item, index) => (
            <h1 style={{backgroundColor:`${item.bgcolor}`}} key={index} onDragStart={(event) => onDragStart(event, "heading")} draggable className={`text-md rounded-lg  font-bold text-center border border-black backdrop-blur-md p-1 ` }>{item.cName}</h1>

          ))
        }
      </div>
    </ScrollArea>


{/* points Baar ============= */}
<div className="flex justify-center items-center gap-2 py-2">
  <h2 className="text-md rounded-lg mb-2  font-bold text-center border text-black bg-[#A1EEBD] p-2 ">Earn 20 points</h2>
  <h2 className="text-md rounded-lg mb-2  font-bold text-center border text-black bg-[#CB9DF0] p-2 ">Earn 10 points</h2>
</div>

    </div>
  )
}

export default Category
