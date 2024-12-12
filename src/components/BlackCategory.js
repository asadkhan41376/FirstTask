import React from 'react'

const BlackCategory = () => {
  return (
    <div className='flex flex-col gap-2  ' >
      {
        [...Array(7)].map((item, index) => (
          <h1 key={index} className='text-md rounded-lg  font-bold text-center border w-[200px] h-[40px] border-black  bg-yellow-600 ' >{item}</h1>

        ))
      }
    </div>
  )
}

export default BlackCategory
