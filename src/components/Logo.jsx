import React from 'react'

function Logo() {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('sidebar')
        document.getElementById('sidebar').classList.toggle('hidden');
    }
  return (
    <div className='flex items-center '>
        <a href="/" className='flex logo items-center leading-[1]'>
            {/* <img src="" alt="" /> */}
            <span className='hidden lg:block text-[26px] font-[700] text-[#012970]'>AdminDashboard</span>
        </a>
            <i
            className='bi bi-list toggle-sidebar-btn text-[32px] pl-[25px] cursor-pointer text-[#012970]'
             onClick={handleToggleSideBar}       
            >
            </i>
    </div>
  )
}

export default Logo