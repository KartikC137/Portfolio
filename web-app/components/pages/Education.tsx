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
const certicateTags = { fcc: ["React", "Redux", "HTML,CSS/SCSS,JS", "Jquery"] };
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
  const isCertBoxA = certificateBox === "a";
  const isCertBoxB = certificateBox === "b";
  const isCertBoxC = certificateBox === "c";

  const activeStyle = "grid grid-cols-2 bg-deg3 border-deg1";
  const inactiveStyle = "text-deg3 bg-deg1 border-deg2";
  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      isCertBoxA ? setCertificateBox("b") : setCertificateBox("c");
    } else if (e.deltaY < 0) {
      isCertBoxC ? setCertificateBox("b") : setCertificateBox("a");
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
        className={`overflow-hidden grid
           ${isCertBoxA ? "grid-cols-[7fr_1fr_1fr] " : isCertBoxB ? "grid-cols-[1fr_7fr_1fr]" : "grid-cols-[1fr_1fr_7fr]"}
            transition-all duration-500 *:transition-all *:duration-300
            *:p-2 gap-x-2 h-[250px]`}
      >
        {/* 1. FCC */}
        <div
          onClick={() => {
            certificateBox !== "a" && setCertificateBox("a");
          }}
          className={`rounded-l-sm border-2 ${isCertBoxA ? activeStyle : inactiveStyle}`}
        >
          <div>
            <p className="text-xl/6 flex items-center gap-x-1">
              Front-end libraries{" "}
              {isCertBoxA && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55556 14C1.12778 14 0.761574 13.8477 0.456944 13.5431C0.152315 13.2384 0 12.8722 0 12.4444V1.55556C0 1.12778 0.152315 0.761574 0.456944 0.456944C0.761574 0.152315 1.12778 0 1.55556 0H7V1.55556H1.55556V12.4444H12.4444V7H14V12.4444C14 12.8722 13.8477 13.2384 13.5431 13.5431C13.2384 13.8477 12.8722 14 12.4444 14H1.55556ZM5.21111 9.87778L4.12222 8.78889L11.3556 1.55556H8.55556V0H14V5.44444H12.4444V2.64444L5.21111 9.87778Z"
                    fill="#450000"
                  />
                </svg>
              )}
            </p>
            <p className="text-base">
              by freeCodeCamp{" "}
              <span className="text-deg1 text-base/2">
                (legacy certificate)
              </span>
            </p>

            {isCertBoxA && (
              <div className="mt-2 pl-2 ">
                <div
                  className="flex flex-row gap-x-1 text-sm/3 font-mono font-[600] 
                             *:h-6 *:bg-deg2 *:border-2 *:rounded-full *:p-1 *:flex *:items-center"
                >
                  {certicateTags.fcc.map((e) => (
                    <div key={e}>{e}</div>
                  ))}
                </div>
                <p className="mt-2 overflow-hidden text-base/6 font-mono font-[700]">
                  This course introduced me to React, and taught the essentials
                  of JS and Jquery as well as using libraries and frameworks. I
                  mainly focused on hooks, contexts and state management.
                </p>
                {/* <img className="mt-2" src="/fcc.png" /> */}
              </div>
            )}
          </div>
          {isCertBoxA && (
            <div>
              <p className="text-deg1">Tasks completed for certificate:</p>
              <div className="px-1 h-[200px] border-l-2 border-deg1">
                <p>Complete 5 projects to achieve the certificate:</p>
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => {
            certificateBox !== "b" && setCertificateBox("b");
          }}
          className={`*:p-1 rounded-l-sm border-2 ${isCertBoxB ? "text-2xl bg-deg3 border-deg1" : "text-deg3! text-xl bg-deg1 border-deg2"}`}
        >
          {isCertBoxB ? (
            <div className="grid grid-cols-2 gap-x-2">
              <div className="flex flex-col">
                <div
                  className="flex flex-row gap-x-1 text-sm/3 font-mono font-[600] 
                              *:bg-deg2 *:border-2 *:rounded-full *:p-1 *:flex *:items-center"
                >
                  {certicateTags.fcc.map((e) => (
                    <div key={e}>{e}</div>
                  ))}
                </div>
                {/* <img className="mt-2" src="/cybersec.png" /> */}
              </div>
              <div className="border-2"></div>
            </div>
          ) : (
            <p>Google Cyber-Security</p>
          )}
          <div></div>
        </div>
        <div
          onClick={() => {
            certificateBox !== "c" && setCertificateBox("c");
          }}
          className={`*:p-1 rounded-l-sm border-2 ${isCertBoxC ? "text-2xl bg-deg3 border-deg1" : "text-deg3! text-xl bg-deg1 border-deg2"}`}
        >
          {isCertBoxC ? (
            <div className="grid grid-cols-2 gap-x-2">
              <div className="flex flex-col">
                <div
                  className="flex flex-row gap-x-1 text-sm/3 font-mono font-[600] 
                              *:bg-deg2 *:border-2 *:rounded-full *:p-1 *:flex *:items-center"
                >
                  {certicateTags.fcc.map((e) => (
                    <div key={e}>{e}</div>
                  ))}
                </div>
                {/* <img className="mt-2" src="/astro.png" /> */}
              </div>
              <div className="border-2"></div>
            </div>
          ) : (
            <p>AstroTech</p>
          )}
          <div></div>
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
