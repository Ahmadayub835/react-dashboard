import React, { useState } from 'react'
import CardFilter from '../CardFilter'
import WebTrafficChart from './WebTrafficChart'

function WebTraffic() {
    const [traffic , setTraffic] = useState('Today')

    const trafficHandler = (traffic) => {
        setTraffic(traffic)
    }
  return (
    <div className='card mt-[15px] border-none'>
        <CardFilter filterChange={trafficHandler}/> 
        <div className='card-body pb-0'>
            <h5 className='card-title'>
            Website Traffic    <span> | {traffic}</span>
            </h5>
            <WebTrafficChart />
        </div>
    </div>
  )
}

export default WebTraffic