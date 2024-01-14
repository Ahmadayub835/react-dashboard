import React from 'react'

function NewsPostItem({latest}) {

  return (
    <div className='post-item clearfix flex items-center'>
        <img src={latest.img} alt="" className='w-[80px]'/>
        <div className='py-[10px] pl-[14px]'>
        <h4 className='text-[#4566ab] text-[12px] font-[700]'>
            <a href="" className='text-[12px]'>{latest.title}</a>
        </h4>
        <p className='text-[11px]'>{latest.subtitle}</p>
        </div>
    </div>
  )
}

export default NewsPostItem