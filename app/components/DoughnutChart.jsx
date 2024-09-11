"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Blue", "#808080"],
    datasets: [
      {
        label: "My First Dataset",
        data: [70, 30],
        backgroundColor: ["#2563eb", "#d7e7fc"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
    responsive: true,
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
