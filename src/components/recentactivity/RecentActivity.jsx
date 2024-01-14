import React, { useEffect, useState } from 'react'
import CardFilter from '../CardFilter'
import RecentActivityItem from './RecentActivityItem'

function RecentActivity() {
  const [items , setItems] =useState([])
  const [filter , setFilter]  =useState('Today')

  const fetchData = () => {
    fetch('http://localhost:3000/recentactivity')
    .then(res => res.json())
    .then(data => (
      setItems(data)
    ))
  }

  useEffect(() => {
    fetchData()
  } , [])


  const handleSubmitAct = (filter) => {
    setFilter(filter)
  }
  return (
    <div className='card border-none'>
        <CardFilter filterChange={handleSubmitAct} />

        <div className='card-body relative'>
            <h5 className='card-title'>
            Recent Activity    <span> | {filter}</span>
            </h5>


                <div className="activity">
                    {items && items.length > 0 &&
                    items.map(action => (
                        <RecentActivityItem key={action._id} action = {action}/>
                    ))
                    }
                </div>
        </div>
    </div>
  )
}

export default RecentActivity