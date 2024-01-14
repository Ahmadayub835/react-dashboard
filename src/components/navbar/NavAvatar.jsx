import React from "react";
import profileImage from '../../assets/images/mohammad-rahmani-F6039SWvBp0-unsplash.jpg'

function NavAvatar() {
  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        className="nav-link nav-profile flex items-center pr-0"
        data-bs-toggle="dropdown"
      >
        <img src= {profileImage} alt="profile" 
        className='rounded-circle h-[35px] w-[30px]'
        />
        <span className="md:block dropdown-toggle pl-2">F. David</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile gap-[10px] p-[15px] border-0 shadow-lg">
        <li className="dropdown-header text-center">
          <a href="">
          <h6>David</h6>
          <span>Web Developer</span>
          </a>
        </li>

          <hr className="dropdown-divider" />
          <li>
          <a href="pages-faq.html" className="dropdown-item flex items-center gap-[5px]">
            <i className="bi bi-gear"></i>
            <span>Account Settings</span>
          </a>
        </li>

        <hr className="dropdown-divider" />

        <li>
          <a href="users-profile.html" className="dropdown-item flex items-center gap-[5px]">
            <i className="bi bi-person"></i>
            <span>My Profile</span>
          </a>
        </li>

        <hr className="dropdown-divider" />

        <li>
          <a href="pages-faq.html" className="dropdown-item flex items-center gap-[5px]">
            <i className="bi bi-question-circle"></i>
            <span>Need help?</span>
          </a>
        </li>
        <hr className="dropdown-divider" />

        <li>
          <a href="#" className="dropdown-item flex items-center gap-[5px]">
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar;
