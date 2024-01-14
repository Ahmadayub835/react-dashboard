import React, { useEffect } from "react";
import * as echarts from "echarts";

function BudgetChart() {
  useEffect(() => {
    // Initialize ECharts instance
    const myChart = echarts.init(document.querySelector("#BudgetChart"));

    // Set ECharts options
    myChart.setOption({
      legend: {
        data: ["Allocated Budget", "Actual Spending"],
      },
      radar: {
        shape: "circle",
        indicator: [
          { name: "Sales", max: 6500 },
          { name: "Administration", max: 16000 },
          { name: "Information Technology", max: 30000 },
          { name: "Customer Support", max: 38000 },
          { name: "Development", max: 52000 },
          { name: "Marketing", max: 20000 },
        ],
      },
      series: [
        {
          name: "Budget vs Spending",
          type: "radar",
          data: [
            { value: [4200, 7560, 6750, 8900], name: "Allocated Budget" },
            { value: [1340, 5647, 4580, 9870], name: "Actual Spending" },
          ],
        },
      ],
    });

    // Cleanup function to dispose of the ECharts instance
    return () => {
      myChart.dispose();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div
      id="BudgetChart"
      style={{ minHeight: "400px" }}
      className="echart"
    ></div>
  );
}

export default BudgetChart;
