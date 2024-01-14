import React from "react";

function TopSellingItem({ sale }) {
  return (
    <tr>
      <th scope="row" className="w-[15%]">
        <a href="" >
          <img src={sale.preview} alt="image" className="w-[80%]"/>
        </a>
      </th>

      <td>
        <a href="" className="text-blue-500 font-bold">
          {sale.name}
        </a>
      </td>
      <td>${sale.price.toFixed(2)}</td>
      <td className="font-bold">${sale.sold}</td>
      <td>${(sale.price * sale.sold).toLocaleString("en-us")}</td>
    </tr>
  );
}

export default TopSellingItem;
