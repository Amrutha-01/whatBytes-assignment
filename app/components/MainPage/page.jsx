"use client";
import {
  faCheck,
  faClipboardList,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import PercentileComparisonChart from "../PercentileComp";
import DoughnutChart from "../DoughnutChart";
import UpdateForm from "../UpdateForm/page";
import { percentilesData } from "../usersData";

export default function MainPage() {
  const [updated, setUpdated] = useState(false);
  const [details, setDetails] = useState({
    rank: 7,
    percentile: 80,
    currentScore: 13,
  });
  const [avgPercentile, setAvgPercentile] = useState(72);

  const calculateAveragePercentile = (data) => {
    let totalPercentile = 0;
    let totalUsers = 0;
    data.forEach(({ percentile, usersCount }) => {
      totalPercentile += percentile * usersCount;
      totalUsers += usersCount;
    });
    const res = totalUsers === 0 ? 0 : totalPercentile / totalUsers;
    setAvgPercentile(Math.round(res * 10) / 10);
  };

  useEffect(() => {
    calculateAveragePercentile(percentilesData);
  }, [percentilesData, details]);

  const syllabus = [
    {
      title: "HTML tools, Forms, History",
      percentage: "80%",
      color: "rgb(37 99 235)",
    },
    {
      title: "Tags & References in HTML",
      percentage: "60%",
      color: "rgb(249 115 22)",
    },
    {
      title: "Tables & References in HTML",
      percentage: "24%",
      color: "rgb(239 68 68)",
    },
    {
      title: "Tables & CSS Basics",
      percentage: "96%",
      color: "rgb(22 163 74)",
    },
  ];

  return (
    <div className="p-[35px] pt-[25px] border-l-[1px]">
      <h1 className="font-bold text-xl">Skill Test</h1>
      <div className="flex max-[678px]:flex-col">
        <div className="left-part mr-5">
          <div className="assignment-details py-3">
            <div className="border-[1px] rounded-md p-3 flex">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
                className="h-[40px] mr-3"
              />
              <div className="">
                <h1 className="font-bold">HTML</h1>
                <p className="mr-8">
                  Questions:08 | Duration:15maxs | Submitted on 05 June 2024
                </p>
              </div>
              <button
                // href="/components/UpdateForm"
                onClick={() => setUpdated(true)}
                className="bg-blue-950 rounded-lg text-white h-8 px-5 mt-2"
              >
                Update
              </button>
              {updated && (
                <UpdateForm setUpdated={setUpdated} setDetails={setDetails} />
              )}
            </div>
          </div>

          <div className="statistics border-[1px] rounded-md p-2 pl-4 mb-4 ">
            <h1>Quick Statistics</h1>
            <div className="flex">
              <div className="flex items-center border-r-[1px] w-[14vw] py-2 max-[678px]:w-[25vw]">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="h-[23px] text-yellow-600 mx-5"
                />
                <div>
                  <h1>{details.rank}</h1>
                  <p className="text-[12px] text-gray-500">YOUR RANK</p>
                </div>
              </div>
              <div className="flex items-center border-r-[1px] w-[16vw] py-2 max-[678px]:w-[25vw]">
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="h-[23px] text-gray-400 mx-5"
                />
                <div>
                  <h1>{details.percentile}%</h1>
                  <p className="text-[12px] text-gray-500">PERCENTILE</p>
                </div>
              </div>
              <div className="flex items-center w-[16vw] py-2 max-[678px]:w-[30vw]">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="h-[23px] text-green-600 mx-5"
                />
                <div>
                  <h1>{details.currentScore}/15</h1>
                  <p className="text-[12px] text-gray-500">CORRECT ANSWERS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="comparison-graph border-[1px] h-[34.5vw] rounded-md p-6 max-[678px]:h-[40vh]">
            <h1 className="font-semibold ">Comparison Graph</h1>
            <div className="text-md py-4">
              <span className="font-semibold text-gray-600">
                You scored {details.percentile}% percentile
              </span>{" "}
              which is{" "}
              {details.percentile >= avgPercentile ? "higher" : "lower"} than
              the average percentile {avgPercentile} of all the engineers who
              took the assignment
            </div>
            <PercentileComparisonChart
              userPercentile={Number(details.percentile)}
            />
          </div>
        </div>

        <div className="right-part">
          <div className="syllabus-analysis border-[1px] p-6 rounded-md mt-3 max-[678px]:w-[90vw]">
            <h1 className="font-semibold text-lg">Syllabus Wise Analysis</h1>
            <div className="mt-4">
              {syllabus.map((item) => (
                <div className="item w-[23vw] mb-3 max-[678px]:w-[80vw]">
                  <h1>{item.title}</h1>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
                      <div
                        className={`bg-${item.color} h-2.5 rounded-full`}
                        style={{
                          width: item.percentage,
                          backgroundColor: item.color,
                        }}
                      ></div>
                    </div>
                    <p
                      className={`pl-6 text-${item.color}`}
                      style={{ color: item.color }}
                    >
                      {item.percentage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="question-analysis mt-3 border-[1px] rounded-md p-6">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-lg">Question Analysis</h1>
              <p className="text-blue-500">10/15</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-md py-3">
                <span className="font-semibold text-gray-600">
                  You scored {details.currentScore} out of 15.
                </span>
                However it still needs some improvements.
              </div>

              <div className="pie-chart h-[25vh]">
                <DoughnutChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
