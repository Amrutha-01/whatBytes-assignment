"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import { percentilesData } from "./usersData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PercentileComparisonChart({ userPercentile }) {
  const data = {
    labels: [0, 25, 50, 75, 100], // Predefined percentiles on x-axis
    datasets: [
      {
        label: "No. of Students",
        tension: 0.4,
        data: percentilesData.map((item) => ({
          x: item.percentile,
          y: item.usersCount, // Plot y-axis points as user counts
        })),
        fill: false,
        borderWidth: 1,
        borderColor: "#714c8c",
        pointRadius: 2,
        showLine: true, // Connect points with a line
      },
      {
        label: "Your Percentile",
        data: [
          { x: userPercentile, y: 0 }, // Start the vertical line at y=0
          {
            x: userPercentile,
            y: Math.max(...percentilesData.map((item) => item.usersCount)),
          }, // End the line at the max y value
        ],
        borderColor: "#403e3e",
        borderWidth: 0.5,
        pointRadius: 0,
        fill: false,
        showLine: true, // Show the vertical line for the user's percentile
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
          drawBorder: false,
        },
        title: {
          display: true,
          text: "Percentile",
        },
        type: "linear", // Use linear scale for the x-axis
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
        },
      },
      y: {
        grid: {
          display: false, // Hide y-axis grid lines
          drawBorder: false,
        },
        ticks: {
          display: false, // Show y-axis ticks
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        // position: "top",
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return <Line data={data} options={options} />;
}
