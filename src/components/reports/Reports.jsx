import React, { useState } from 'react'
import CardFilter from '../CardFilter'
import ReportCharts from './ReportCharts'

function Reports() {
    const [filter, setFilter] = useState('Today')
    const handleFilterChange = (filter) =>{
        setFilter(filter)
    }
  return (
    <div className='card mt-[20px] border-none rounded-0'>
        <CardFilter  filterChange={handleFilterChange}/>
        <div className='card-body'>
            <h5 className='card-title  text-[#012970] text-[17px] font-[600]'>
                Reports <span className='text-[14px] font-[500] text-[#959BAA]'>/{filter}</span>
            </h5>
            <ReportCharts />
        </div>
    </div>
  )
}

export default Reports