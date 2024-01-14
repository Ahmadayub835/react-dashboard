import React from 'react'

function PageTitle({page}) {
  return (
    <div className='pagetitle'>
        <h1 className='text-[27px] font-[600] text-[#012970]'>{page}</h1>
            <nav>
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                        <a href="/">
                            <i className='bi bi-house-door'></i>
                        </a>
                    </li>
                    <li className='breadcrumb-item active'>{page}</li>
                </ol>
            </nav>
    </div>
  )
}

export default PageTitle