import React from 'react'

function Searchbar() {
  return (
    <div className='search-bar w-[360px] px-20'>
        <form action="#"
        className='flex items-center w-[100%]'
        method='POST'
    >
        <input type="text"
        name='query'
        placeholder='Search'
        title='Enter Search Keyword'
        className="border-[1px] text-[14px] text-[#012970] rounded-[4px] w-full pl-[5px] py-[5px] duration-150 
         focus:outline-none  hover:shadow-lg border-[rgba(1,41,112,0.2)] placeholder-text-xl"
        />

        <button type='submit' title='Search' className='border-0 p-0 ml-[-30px] bg-none'>
            <i className='bi bi-search text-[#012970]'></i>
        </button>
        </form>
    </div>
  )
}

export default Searchbar