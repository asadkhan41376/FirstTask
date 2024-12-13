
import Category from '@/components/Category'
import FooterBar from '@/components/FooterBar'
import Table from '@/components/Table'
import Total from '@/components/Total'
import Weeks from '@/components/Weeks'
import React from 'react'

const LayoutPage = () => {
  return (

    <>
      <div className='  rounded-lg border border-#FACC15-500  p-5 ' style={{ backdropFilter: "blur(10px)" }}>
        <div >
          <div className='flex items-center justify-between gap-6 p-2'>
            <div >
              <Weeks />
              <div className="">
                <Table />
                <Total />
              </div>
            </div>
          </div>
        </div>
      
      </div>


    </>


  )
}

export default LayoutPage
