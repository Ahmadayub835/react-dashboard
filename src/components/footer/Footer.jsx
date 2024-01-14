import React from 'react'

function Footer() {
  return (
    <footer id='footer' className='footer py-[20px] text-[14px] duration-300 border-t-[1px] border-[#cddfff]'>
        <div className='copyright text-center text-[#012970]'>
            &copy; Copyright {' '}
            <strong>
                <span>A Technology</span>
            </strong>
            .All Rights Reserved
        </div>
        <div className="credits pt-[5px] text-center text-[13px] text-[#012970]">
            Designed by <a href="#">Ahmad Ayub</a>
        </div>
    </footer>
  )
}

export default Footer