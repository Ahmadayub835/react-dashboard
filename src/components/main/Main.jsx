import React from 'react'
import PageTitle from './PageTitle'
import Dashboard from '../Dashboard'

function Main() {
  return (
    <main id='main' className='main  px-[30px] py-[20px] duration-300'>
        
    <PageTitle page={'Dashboard'} />
    <Dashboard />
    </main>
  )
}

export default Main