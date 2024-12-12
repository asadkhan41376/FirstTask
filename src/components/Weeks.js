import React from 'react'

const Weeks = () => {


  const WeeksDay=[
    {day:"M"},
    {day:"T"},
    {day:"W"},
    {day:"TH"},
    {day:"F"},
    {day:"S"},
  ]
  return (
  
      <div className=' flex items-center  justify-between gap-4  text-center text-white'>

      {
        WeeksDay.map((day,index)=>(
          <div key={index} className=' w-[42px]  rounded-lg  bg-red-800   border border-black '>{day.day}</div>
        ))
      }
      
    </div>

  )
}

export default Weeks
