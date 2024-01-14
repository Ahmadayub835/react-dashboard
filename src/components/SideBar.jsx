import React from 'react';
import './Style.css';
import navList from '../data/navItem';
import NavItem from './navbar/NavItem';

function SideBar() {
  const mystyles = {
    position: 'fixed',
    top: '60px',
    left: '0',
    bottom: '0',
    width: '300px',
    zIndex: '996',
    padding: '20px',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: '#aab7cf transparent',
    backgroundColor: '#fff',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 20px rgba(1, 41, 112, 0.1)',
  };

  return (
    <aside className='sidebar' id='sidebar' style={mystyles}>
      <ul className='sidebar-nav p-0 m-0 list-none' id='sidebar-nav'>
        <li className='nav-item mb-[5px]'>
          <a
            href="/"
            className='nav-link flex items-center text-[15px] font-[600] text-[#4154f1] duration-200 hover:bg-[#f6f9ff] rounded-[4px] py-[10px] px-[15px]'
          >
            <i className='bi bi-grid text-[16px] mr-[10px] text-[#4154f1]'></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className='nav-item mb-[5px]'>
          <a
            href="#"
            data-bs-target='#documents-nav'
            data-bs-toggle='collapse'
            className='nav-link collapsed flex justify-between items-center text-[15px] font-[600] text-[#4154f1] duration-200 hover:bg-[#f6f9ff] rounded-[4px] py-[10px] px-[15px]'
          >
            <div>
              <i className='bi bi-menu-button-wide text-[16px] mr-[10px] text-[#4154f1]'></i>
              <span>Documents</span>
            </div>
            <i className='bi bi-chevron-down'></i>
          </a>

          <ul
            id='documents-nav'
            className='nav-content collapse pl-[15%] pt-[3%]'
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <a href="#">
                <i className='bi bi-circle text-[10px] pr-[3%]'></i>
                <span>Customers</span>
              </a>
            </li>

            <li className='pt-[5px]'>
              <a href="#">
                <i className='bi bi-circle text-[10px] pr-[3%]'></i>
                <span>Suppliers</span>
              </a>
            </li>

            <li className='pt-[5px]'>
              <a href="#">
                <i className='bi bi-circle text-[10px] pr-[3%]'></i>
                <span>Logistic</span>
              </a>
            </li>
          </ul>
        </li>

        <li className='nav-item mb-[5px]'>
          <a
            href="#"
            data-bs-target='#tables-nav'
            data-bs-toggle='collapse'
            className='nav-link collapsed flex justify-between items-center text-[15px] font-[600] text-[#4154f1] duration-200 hover:bg-[#f6f9ff] rounded-[4px] py-[10px] px-[15px]'
          >
            <div>
              <i className='bi bi-table text-[16px] mr-[10px] text-[#4154f1]'></i>
              <span>Tables</span>
            </div>
            <i className='bi bi-chevron-down'></i>
          </a>

          <ul
            id='tables-nav'
            className='nav-content collapse pl-[15%] pt-[3%]'
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <a href="#">
                <i className='bi bi-circle text-[10px] pr-[3%]'></i>
                <span>Customers</span>
              </a>
            </li>

            <li className='pt-[5px]'>
              <a href="#">
                <i className='bi bi-circle text-[10px] pr-[3%]'></i>
                <span>Suppliers</span>
              </a>
            </li>

            <li className='pt-[5px]'>
              <a href="#">
                <i className='bi bi-circle text-[10px] pr-[3%]'></i>
                <span>Logistic</span>
              </a>
            </li>
          </ul>
        </li>
        <li className='nav-item mb-[5px]'>
          <a
            href="#"
            data-bs-target='#form-nav'
            data-bs-toggle='collapse'
            className='nav-link collapsed flex justify-between items-center text-[15px] font-[600] text-[#4154f1] duration-200 hover:bg-[#f6f9ff] rounded-[4px] py-[10px] px-[15px]'
          >
            <div>
              <i className='bi bi-journal-bookmark text-[16px] mr-[10px] text-[#4154f1]'></i>
              <span>Forms</span>
            </div>
            <i className='bi bi-chevron-down'></i>
          </a>

          <ul
            id='form-nav'
            className='nav-content collapse pl-[15%] pt-[3%]'
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <a href="#">
                <i className='bi bi-circle text-[10px] pr-[3%]'></i>
                <span>Customers</span>
              </a>
            </li>

            <li className='pt-[5px]'>
              <a href="#">
                <i className='bi bi-circle text-[10px] pr-[3%]'></i>
                <span>Suppliers</span>
              </a>
            </li>

            <li className='pt-[5px]'>
              <a href="#">
                <i className='bi bi-circle text-[10px] pr-[3%]'></i>
                <span>Logistic</span>
              </a>
            </li>
          </ul>
        </li>
        <li className='nav-item mb-[5px]'>
          <a
            href="#"
            data-bs-target='#chart-nav'
            data-bs-toggle='collapse'
            className='nav-link collapsed flex justify-between items-center text-[15px] font-[600] text-[#4154f1] duration-200 hover:bg-[#f6f9ff] rounded-[4px] py-[10px] px-[15px]'
          >
            <div>
              <i className='bi bi-bar-chart text-[16px] mr-[10px] text-[#4154f1]'></i>
              <span>Charts</span>
            </div>
            <i className='bi bi-chevron-down'></i>
          </a>

          <ul
            id='chart-nav'
            className='nav-content collapse pl-[15%] pt-[3%]'
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <a href="#">
                <i className='bi bi-circle text-[10px] pr-[3%]'></i>
                <span>Customers</span>
              </a>
            </li>

            <li className='pt-[5px]'>
              <a href="#">
                <i className='bi bi-circle text-[10px] pr-[3%]'></i>
                <span>Suppliers</span>
              </a>
            </li>

            <li className='pt-[5px]'>
              <a href="#">
                <i className='bi bi-circle text-[10px] pr-[3%]'></i>
                <span>Logistic</span>
              </a>
            </li>
          </ul>
        </li>
        <li className='nav-item mb-[5px]'>
          <a
            href="#"
            data-bs-target='#icon-nav'
            data-bs-toggle='collapse'
            className='nav-link collapsed flex justify-between items-center text-[15px] font-[600] text-[#4154f1] duration-200 hover:bg-[#f6f9ff] rounded-[4px] py-[10px] px-[15px]'
          >
            <div>
              <i className='bi bi-gem text-[16px] mr-[10px] text-[#4154f1]'></i>
              <span>Icons</span>
            </div>
            <i className='bi bi-chevron-down'></i>
          </a>

          <ul
            id='icon-nav'
            className='nav-content collapse pl-[15%] pt-[3%]'
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <a href="#">
                <i className='bi bi-circle text-[10px] pr-[3%]'></i>
                <span>Customers</span>
              </a>
            </li>

            <li className='pt-[5px]'>
              <a href="#">
                <i className='bi bi-circle text-[10px] pr-[3%]'></i>
                <span>Suppliers</span>
              </a>
            </li>

            <li className='pt-[5px]'>
              <a href="#">
                <i className='bi bi-circle text-[10px] pr-[3%]'></i>
                <span>Logistic</span>
              </a>
            </li>
          </ul>
        </li>


        <li className='text-[#12163c] text-[12px] py-[10px]'>PAGES</li>
        {navList.map((nav) => (
          <NavItem key={nav._id} nav={nav} />
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
