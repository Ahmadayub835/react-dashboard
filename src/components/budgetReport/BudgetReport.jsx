import React, { useState } from 'react'
import CardFilter from '../CardFilter'
import BudgetChart from './BudgetChart'

function BudgetReport() {
    const [report , setReport] = useState('Today')

    const BudgetHandler = () => {
        setReport(report)
    }
  return (
    <div className='card mt-[15px] border-none'>
        <CardFilter filterChange={BudgetHandler}/>

        <div className='card-body pb-0'>
            <h5>
            Budget Report <span> | {report}</span>
            </h5>
            <BudgetChart />
        </div>
    </div>
  )
}

export default BudgetReport