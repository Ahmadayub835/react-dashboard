import React, { useState } from "react";
import CardFilter from "./CardFilter";
import  './Style.css'

function Card({ card }) {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="col-xxl-4 col-md-6 pr-0">
      <div className="card info-card sales-card py-[10px] border-none shadow-md rounded-0 text-[#4154f1] bg-[#fff]" id="card-custom">
        <CardFilter filterChange={handleFilterChange} />
          <h5 className="card-title text-[17px] pl-[10px] mb-0 pt-[5px] text-[#012970] font-[600]">
            {card.name} <span className="text-[14px] font-[500] text-[#959BAA]"> | {filter}</span>
          </h5>
        <div className="card-body pt-[10px]">
          <div className="flex">
            <div className="card-icon bg-[#F5F3FE] flex rounded-circle items-center justify-center text-[32px] leading-none w-[64px] h-[64px] shrink-0 grow-0">
              <i className={card.icon}></i>
            </div>
            <div className="ps-3">
              <h6 className="text-[28px] text-[#012970] font-[700] m-0 p-0">
                {card.name === "Revenue"
                  ? "$" + parseFloat(card.amount).toLocaleString("en-US")
                  : parseFloat(card.amount).toLocaleString("en-US")}
              </h6>
              <span
                className={`${
                  card.percentage > 0 ? "text-green-500" : "text-red-600"
                } small pt-1 font-bold`}
              >
                {card.percentage > 0
                  ? card.percentage * 100
                  : -card.percentage * 100}{" "}
                %
              </span>
              <span className="text-gray-500 text-sm pt-2 pl-1">
                {card.percentage > 0 ? "increases" : "decrease"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
