import BlackCategory from '@/components/BlackCategory'
import Category from '@/components/Category'
import FooterBar from '@/components/FooterBar'
import Table from '@/components/Table'
import Total from '@/components/Total'
import Weeks from '@/components/Weeks'
import React from 'react'

const LayoutPage = () => {
  return (

    <>
     <div className='  rounded-lg border border-#FACC15-500  p-5   ' style={{ backdropFilter: "blur(5px)" }}>
      <div className="flex justify-between   items-center">
        <BlackCategory  className="flex-1"/>
        <div>
          <Weeks />
          <Table />
        </div>
      </div>
      <Total />
      <FooterBar />
    </div>
    
    
    </>
 

  )
}

export default LayoutPage
