"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import updatePercentile from "../usersData";

export default function UpdateForm({ setUpdated, setDetails }) {
  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("");
  const [currentScore, setCurrentScore] = useState("");

  const handleSave = () => {
    setDetails((prev) => {
      return {
        ...prev,
        rank: rank,
        percentile: percentile,
        currentScore: currentScore,
      };
    });
    updatePercentile(percentile);
    setUpdated(false);
  };

  return (
    <div
      className="absolute top-[50%] left-[50%] p-[20px] bg-[#fff] border-[1px] border-[#ddd] rounded-md w-[40vw] "
      style={{
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <button
        onClick={() => setUpdated(false)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "transparent",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        &times;
      </button>
      <h1 className="font-semibold text-lg mb-6">Update Scores</h1>
      <div className="flex mb-4 justify-between items-center">
        <label>
          Update <span className="font-semibold">Rank</span>
        </label>
        <input
          type="text"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          className="w-[17vw] p-2 border-[1px] border-[#ddd] rounded-md"
        />
      </div>

      <div className="flex mb-4 justify-between items-center">
        <label>
          Update <span className="font-semibold">Percentile</span>
        </label>
        <input
          type="text"
          value={percentile}
          onChange={(e) => setPercentile(e.target.value)}
          className="w-[17vw] p-2 border-[1px] border-[#ddd] rounded-md"
        />
      </div>

      <div className="flex mb-4 justify-between items-center">
        <label>
          Update <span className="font-semibold">Curent Score (out of 15)</span>
        </label>
        <input
          type="text"
          value={currentScore}
          onChange={(e) => setCurrentScore(e.target.value)}
          className="w-[17vw] p-2 border-[1px] border-[#ddd] rounded-md"
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setUpdated(false)}
          className="ml-3 px-4 py-2 text-blue-950 rounded-md border-[1px] border-blue-950 bg-white"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="ml-3 px-4 py-2 text-white rounded-md bg-blue-950"
          style={{
            cursor: "pointer",
          }}
        >
          Save
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
}
