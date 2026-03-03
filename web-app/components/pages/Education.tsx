"use client";

import { useState, WheelEvent } from "react";

interface EducationPageProps {
  isActive: boolean;
}
const education = {
  2020: {
    "High School": "ABPS, India",
    Board: "CBSE",
    Score: "551/600 91.83%",
  },
  "2021-2022": {
    "Higher Secondary": "KWC, Sangli",
    Board: "Maharashtra state board",
    Score: ["415/600 69.17%", "NICE!"],
  },
  "2022-2026": {
    "B.E Computer Engineering": "NBNSTIC,Pune",
    University: "SPPU",
    "Current CGPA": 8.4, //calcalute correct value
  },
};
const certificateBoxes = ["a", "b", "c"];
export default function EducationPage({ isActive }: EducationPageProps) {
  if (!isActive) {
    return (
      <p className="select-none text-4xl font-sans">
        Education, Certification & Open Source Contribution
      </p>
    );
  }

  const [certificateBox, setCertificateBox] = useState<string>("a");

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      certificateBox === "a" ? setCertificateBox("b") : setCertificateBox("c");
    } else if (e.deltaY < 0) {
      certificateBox === "c" ? setCertificateBox("b") : setCertificateBox("a");
    }
  };

  return (
    <>
      <p className="select-none text-3xl font-sans">Education: </p>
      <div
        className="mt-2 grid grid-cols-[1fr_1fr_1.2fr] rounded-xs bg-deg3 border-2 border-deg1 
      *:p-2 *:border-r-2 *:last:border-none *:border-deg1"
      >
        {Object.entries(education).map(([k, v]) => (
          <div className="relative" key={k}>
            {k !== "2022-2026" && (
              <span className="absolute top-1 right-0">
                <svg
                  width="50"
                  height="30"
                  viewBox="0 0 73 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M72.4142 16.1421C73.1953 15.3611 73.1953 14.0947 72.4142 13.3137L59.6863 0.585775C58.9052 -0.195274 57.6389 -0.195274 56.8579 0.585775C56.0768 1.36682 56.0768 2.63315 56.8579 3.4142L68.1716 14.7279L56.8579 26.0416C56.0768 26.8227 56.0768 28.089 56.8579 28.87C57.6389 29.6511 58.9052 29.6511 59.6863 28.87L72.4142 16.1421ZM0 14.7279L-1.74846e-07 16.7279L71 16.7279L71 14.7279L71 12.7279L1.74846e-07 12.7279L0 14.7279Z"
                    fill="#F48080"
                  />
                </svg>
              </span>
            )}
            <span className="text-deg1 text-xl">{k}</span>
            <br />
            <div>
              {Object.entries(v).map(([k1, v1]) => (
                <div key={k1}>
                  <span>{k1} : </span>
                  {k === "2021-2022" && k1 === "Score" ? (
                    <>
                      <span className="bg-deg2 px-1 font-mono font-[600]">
                        {v1[0]}
                      </span>{" "}
                      <span className="text-deg2">{v1[1]}</span>
                    </>
                  ) : (
                    <span className="bg-deg2 px-1 font-mono font-[600]">
                      {v1}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 select-none text-3xl font-sans">Certificates: </p>
      {/* Certificates box */}
      <div
        onWheel={handleWheel}
        className={`grid 
           ${certificateBox === "a" ? "grid-cols-[7fr_1fr_1fr] " : certificateBox === "b" ? "grid-cols-[1fr_7fr_1fr]" : "grid-cols-[1fr_1fr_7fr]"}
            transition-all duration-500 *:transition-all *:duration-300
            *:p-2 gap-x-2 *:h-[390px]`}
      >
        {/* 1. FCC */}
        <div
          onClick={() => {
            certificateBox !== "a" && setCertificateBox("a");
          }}
          className={`*:p-1 rounded-l-sm ${certificateBox === "a" ? "text-2xl bg-deg3 border-2 border-deg1" : "text-deg3! text-xl bg-deg1"}`}
        >
          <div>
            <span className="">Front end</span>
          </div>
        </div>
        <div
          onClick={() => {
            certificateBox !== "b" && setCertificateBox("b");
          }}
          className={
            certificateBox === "b"
              ? "text-2xl bg-deg3 border-2 border-deg1"
              : "text-deg3! text-xl bg-deg1"
          }
        >
          <p>{certificateBox === "b" && "2. "}Google Cyber-Security</p>
        </div>
        <div
          onClick={() => {
            certificateBox !== "c" && setCertificateBox("c");
          }}
          className={`rounded-r-sm ${certificateBox === "c" ? "text-2xl bg-deg3 border-2 border-deg1" : "text-deg3! text-xl bg-deg1"}`}
        >
          <p>{certificateBox === "c" && "3. "} AstroTech</p>
        </div>
      </div>
      <p className="mt-2 select-none text-3xl font-sans">
        Open Source Contributions:
        <span className="ml-1 text-xl text-deg1">
          All my work is and forever will be open source.
        </span>
      </p>
    </>
  );
}
