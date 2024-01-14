import React, { useEffect, useState } from 'react'
import CardFilter from '../CardFilter'
import TopSellingItem from './TopSellingItem'

function TopSelling() {
    const [sales, setSales] = useState([])
    const [filter , setFilter] =useState('Today')

    const handleFilterChange = (filter) => {
        setFilter(filter)
    }

    const fetchData = () => {
        fetch('http://localhost:3000/topselling')
        .then(res => res.json())
        .then(data => setSales(data))
        .catch(err => console.log(err.message))
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className='card top-selling overflow-auto border-none'>
        <CardFilter filterChange={handleFilterChange}/>

        <div className='card-body pb-0'>
            <h5 className='card-title'>
            Top Selling    <span>| {filter}</span>
            </h5>

            <table className='table table-borderless'>
    <thead className='table-light bg-[#f6f6fe]'>
        <tr>
            <th scope='col'>Preview</th>
            <th scope='col'>Price</th>
            <th scope='col'>Sold</th>
            <th scope='col'>Product</th>
            <th scope='col'>Revenue</th>
            </tr>
    </thead>
    <tbody>
        {sales && sales.length > 0 &&
        sales.map(sale => <TopSellingItem key={sale._id} sale = {sale} />)
        }
    </tbody>
            </table>
        </div>
    </div>
  )
}

export default TopSelling