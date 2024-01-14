import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function NavNotice() {
  return (
    <li className="nav-item dropdown">
      <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-bell text-[22px] text-[#012970] relative"></i>
        <span className="badge bg-primary badge-number text-[10px] items-center absolute left-[9px]">4</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications border-0 sm:w-[300px] shadow-lg">
        <li className="dropdown-header">
          You have 5 new Notifications
          <a href="" className="pl-[8px]">
            <span className="badge rounded-pill bg-[#3490dc] p-[8px]">
              View All
            </span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>
        <div className="pl-[10px] flex items-center">
          <li className="notification-item">
            <i className="bi bi-exclamation-circle text-yellow-500"></i>
          </li>

          <div className = 'pl-[15px]'>
            <h4 className="font-[600]">lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="text-[11px]">30 min ago</p>
          </div>
        </div>

        <hr className="header-divider" />

        <div className="pl-[10px] flex items-center">
          <li className="notification-item">
            <i className="bi bi-check-circle text-green-600"></i>
          </li>

          <div className = 'pl-[15px] py-[10px]'>
            <h4 className="font-[600]">lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="text-[11px]">30 min ago</p>
          </div>
        </div>

        <hr className="header-divider" />

        <div className="pl-[10px] flex items-center">
          <li className="notification-item">
            <i className="bi bi-x-circle text-red-700"></i>
          </li>

          <div className = 'pl-[15px] py-[10px]'>
            <h4 className="font-[600]">lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="text-[11px]">30 min ago</p>
          </div>
        </div>
        <hr className="header-divider" />

        <div className="pl-[10px] flex items-center">
          <li className="notification-item">
            <i className="bi bi-exclamation-circle text-blue-500"></i>
          </li>

          <div className = 'pl-[15px] py-[10px]'>
            <h4 className="font-[600]">lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="text-[11px]">30 min ago</p>
          </div>
          <hr className="dropdown-divider" />
        </div>  
        <hr className="dropdown-divider" />

        <a href="#" className="font-[700] text-[13px] flex justify-center underline">
          <span className="">Show all notification</span></a>
      </ul>
    </li>
  );
}

export default NavNotice;
