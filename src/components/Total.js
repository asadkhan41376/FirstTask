import React from 'react'

const Total = () => {
  return (

    <div className=' flex justify-between  py-2   text-center text-white items-center'>
      <div className="">
        <h1 className='text-md rounded-lg  font-bold text-center border w-[200px] border-black  bg-red-800   p-2'>Day Total</h1>
      </div>
      <div className='col-span-9'>
        <div className=' flex items-center  justify-center gap-4  text-center text-white'>
          <div className=' w-[42px]  rounded-lg  bg-red-800   border border-black '>0</div>
          <div className=' w-[42px]  rounded-lg bg-red-800   border border-black '>0</div>
          <div className=' w-[42px]  rounded-lg  bg-red-800   border border-black '>0</div>
          <div className=' w-[42px]  rounded-lg  bg-red-800   border border-black '>0</div>
          <div className=' w-[42px]  rounded-lg  bg-red-800   border border-black '>0</div>
          <div className=' w-[42px]  rounded-lg  bg-red-800   border border-black '>0</div>
        </div>
      </div>
    </div>


  )
}

export default Total
