import React from 'react'


function NavMEssage() {
  return (
    <li className="nav-item dropdown">
    <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
      <i className="bi bi-chat-left-text text-[22px] text-[#012970] relative"></i>
      <span className="badge bg-green-700 badge-number text-[10px] items-center absolute left-[9px]">4</span>
    </a>

    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages border-0 sm:w-[300px] pl-[15px] shadow-lg">
      <li className="dropdown-header">
        You have 3 new Messages
        <a href="" className="pl-[8px]">
          <span className="badge rounded-pill bg-[#3490dc] p-[8px]">
            View All
          </span>
        </a>
      </li>

      <li>
        <hr className="dropdown-divider" />
      </li>

      <div className="message-main">
        <li className="message-item">
          <a href="#">
            <img src='./src/assets/images/messages-1.jpg' alt="no showing" />
          </a>
        </li>

        <div className = 'lorem-padding'>
          <h4 className="font-[600]">lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="text-[11px]">30 min ago</p>
        </div>
      </div>

      <hr className="dropdown-divider" />

      <div className="message-main">
        <li className="message-item">
       <a href="">
        <img src="./src/assets/images/messages-2.jpg" alt="" />
       </a>
        </li>

        <div className = 'lorem-padding'>
          <h4 className="font-[600]">lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="text-[11px]">30 min ago</p>
        </div>
      </div>

      <hr className="dropdown-divider" />

      <div className="message-main">
        <li className="message-item"> <a href="">
          <img src="./src/assets/images/messages-3.jpg" alt="" />
        </a>
        </li>

        <div className = 'lorem-padding'>
          <h4 className="font-[600]">lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="text-[11px]">30 min ago</p>
        </div>
      </div>
      <hr className="dropdown-divider" />

      <div className="message-main">
        <li className="message-item"> <a href="">
          <img src="./src/assets/images/messages-2.jpg" alt="" />
        </a>
        </li>

        <div className = 'lorem-padding'>
          <h4 className="font-[600]">lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="text-[11px]">30 min ago</p>
        </div>
      </div>  
        <hr className='dropdown-divider'/>
      <a href="#" className="text-blue-500 justify-center flex">Show all notification</a>
    </ul>
  </li>

  )
}

export default NavMEssage