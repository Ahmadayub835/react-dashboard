import React, { useEffect } from 'react'
import { useState } from 'react'

function TopBtn() {
    const [scroll , setScroll] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll' , () => {
            setScroll(window.scrollY)
        })
        return (() => {
            window.removeEventListener('scroll' , () => {
                setScroll(window.scrollY)
            })
        })
    }  ,
    [scroll])

    const backtop = () => {
        window.scrollTo(0,0)
    }
  return (
    <button href=""
    onClick={backtop}
    className={` back-to-top flex items-center justify-center
    ${scroll > 100 ? 'active' : undefined}`}
    >
        <i className='bi bi-arrow-up-short'></i>
    </button>
    )
}

export default TopBtn