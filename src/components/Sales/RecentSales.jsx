import React, { useEffect, useState } from 'react'
import CardFilter from '../CardFilter'
import RecentSalesTable from './RecentSalesTable'

function RecentSales() {
    const[items , setItems]=useState([])
    const[filter , setFilter]=useState('Today')

    const handleFilterChange = (filter) => {
    setFilter(filter)
    };

    const fetchData = () => {
        fetch(`http://localhost:3000/recentSales`)
        .then(res => res.json())
        .then(data => setItems(data))

        .catch(err => console.log(err.message))
    }
    useEffect(() => {
        fetchData()
    },[])
  return (
    <div className="card recent-sales overflow-auto border-none">
        <CardFilter  filterChange={handleFilterChange}/>
        <div className='card-body border-none rounded-0'>
            <h5 className='card-title'>
            Recent Sales    <span> | {filter}</span>
            </h5>
            <RecentSalesTable items = {items}/>
        </div>
    </div>
  )
}

export default RecentSales