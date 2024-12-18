import React from 'react'

const Weeks = () => {


  const WeeksDay = [
    { day: "S" },
    { day: "M" },
    { day: "T" },
    { day: "W" },
    { day: "TH" },
    { day: "F" },
    { day: "S" },
  ]
  return (


    <div className=' px-2 flex items-center justify-end gap-5 text-center text-white '>

      {
        WeeksDay.map((day, index) => (
          <div key={index} className='w-[35px] h-[30px] rounded-lg  bg-red-800   border border-black '>{day.day}</div>
        ))
      }

    </div>

  )
}

export default Weeks
