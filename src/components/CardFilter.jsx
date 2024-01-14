import React from "react";
import  './Style.css'

function CardFilter({filterChange}) {
  return (
    <div className="absolute right-[6%]">
      <a href="#" data-bs-toggle="dropdown" className="icon">
        <i className="bi bi-three-dots text-[#aab7cf] pl-[20px] pt-[5px] duration-300 text-[16px]"></i>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow border-none shadow-lg transition-all duration-300">
        <li className="dropdown-header text-start">
          <h6 className="text-[24px] font-[600] text-[#012970]">Filter</h6>
        </li>

        <li>
          <a
            href=""
            className="dropdown-item"
            onClick={() => filterChange("Today")}
          >
            Today
          </a>
        </li>

        <li>
          <a
            href="#"
            className="dropdown-item"
            onClick={() => filterChange("This Month")}
          >
            This Month
          </a>
        </li>

        <li>
          <a
            href="#"
            className="dropdown-item"
            onClick={() => filterChange("This Year")}
          >
            This Year
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CardFilter;
