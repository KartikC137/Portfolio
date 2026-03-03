"use client";

import { useState, WheelEvent } from "react";

interface ProjectsPageProps {
  isActive: boolean;
}

export default function ProjectsPage({ isActive }: ProjectsPageProps) {
  if (!isActive) return <p className="select-none text-4xl">Projects</p>;

  const web3CommonTech = [
    "nodejs",
    "nextjs",
    "postgres",
    "foundry",
    "meta mask",
    "solidity",
    "tailwindcss",
  ];
  const web3ProjectBoxes = ["a", "b", "c"];
  const [web3ProjectBox, setWeb3ProjectBox] = useState<string>("a");

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      web3ProjectBox === "a" ? setWeb3ProjectBox("b") : setWeb3ProjectBox("c");
    } else if (e.deltaY < 0) {
      web3ProjectBox === "c" ? setWeb3ProjectBox("b") : setWeb3ProjectBox("a");
    }
  };

  return (
    <>
      <p className="select-none text-4xl">Projects</p>
      <div className="flex flex-row items-center">
        <p className="text-2xl font-[700]">WEB3 / Blockchain</p>
        <div
          className={`flex items-center gap-x-2 ml-2 *:h-4 *:w-4 *:rounded-full *:border-2 *:border-deg1`}
        >
          {web3ProjectBoxes.map((e) => (
            <div
              className="flex items-center justify-center"
              key={e}
              onClick={() => web3ProjectBox !== e && setWeb3ProjectBox(e)}
            >
              {web3ProjectBox === e && (
                <div className="bg-deg1 h-2 w-2 rounded-full "></div>
              )}
            </div>
          ))}
        </div>
        <div
          className="ml-2 flex flex-row gap-x-1 text-sm/3 font-mono font-[600] 
        *:border-2 *:rounded-full *:p-1 *:flex *:items-center"
        >
          {web3CommonTech.map((e) => (
            <div key={e}>{e}</div>
          ))}
        </div>
      </div>
      {/* Web 3 projects box*/}
      <div
        onWheel={handleWheel}
        className={`grid 
           ${web3ProjectBox === "a" ? "grid-cols-[7fr_1fr_1fr] " : web3ProjectBox === "b" ? "grid-cols-[1fr_7fr_1fr]" : "grid-cols-[1fr_1fr_7fr]"}
            transition-all duration-500 *:transition-all *:duration-300
            *:p-2 gap-x-2 *:h-[390px]`}
      >
        {/* 1. custody chain */}
        <div
          onClick={() => {
            web3ProjectBox !== "a" && setWeb3ProjectBox("a");
          }}
          className={`*:p-1 rounded-l-sm ${web3ProjectBox === "a" ? "grid grid-cols-[5fr_4fr] text-2xl bg-deg1" : "text-xl bg-deg2"}`}
        >
          <div>
            <span className="flex flex-row gap-x-2 items-center">
              {web3ProjectBox === "a" && "1. "} Custody Chain
              {web3ProjectBox === "a" && (
                <>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z"
                      fill="#450000"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_131_186)">
                      <path
                        d="M15.8904 0.273926H4.10954C1.99119 0.273926 0.273926 1.99119 0.273926 4.10954V15.8904C0.273926 18.0087 1.99119 19.726 4.10954 19.726H15.8904C18.0087 19.726 19.726 18.0087 19.726 15.8904V4.10954C19.726 1.99119 18.0087 0.273926 15.8904 0.273926Z"
                        fill="#450000"
                        stroke="#450000"
                        strokeWidth="21.9178"
                      />
                      <path
                        d="M16.5224 6.4187C15.8619 5.28693 14.9659 4.39091 13.8342 3.73043C12.7024 3.06992 11.4668 2.73975 10.1265 2.73975C8.78633 2.73975 7.5503 3.07002 6.4187 3.73043C5.28693 4.39088 4.39098 5.28693 3.73043 6.4187C3.06999 7.55043 2.73975 8.7863 2.73975 10.1263C2.73975 11.7358 3.20935 13.1832 4.1488 14.4688C5.08814 15.7544 6.30164 16.6441 7.78918 17.1378C7.96233 17.1699 8.09051 17.1473 8.17386 17.0705C8.25723 16.9936 8.29887 16.8974 8.29887 16.7821C8.29887 16.7628 8.29722 16.5898 8.29402 16.2627C8.29072 15.9356 8.28917 15.6503 8.28917 15.4069L8.06794 15.4451C7.92689 15.471 7.74895 15.4819 7.53413 15.4788C7.3194 15.4758 7.09649 15.4533 6.8657 15.4115C6.63481 15.37 6.42005 15.2738 6.22126 15.1231C6.02257 14.9724 5.88152 14.7752 5.79814 14.5317L5.70196 14.3104C5.63786 14.163 5.53693 13.9993 5.39904 13.8199C5.26116 13.6403 5.12173 13.5186 4.98068 13.4545L4.91334 13.4063C4.86846 13.3742 4.82683 13.3356 4.78832 13.2908C4.74985 13.2459 4.72105 13.2011 4.70181 13.1561C4.68254 13.1111 4.69851 13.0743 4.74988 13.0453C4.80126 13.0164 4.8941 13.0023 5.02882 13.0023L5.22111 13.0311C5.34935 13.0568 5.50799 13.1335 5.69721 13.2619C5.88633 13.3901 6.0418 13.5568 6.16365 13.7619C6.3112 14.0248 6.48897 14.2252 6.69746 14.3631C6.90579 14.501 7.11583 14.5698 7.32739 14.5698C7.53895 14.5698 7.72167 14.5537 7.87562 14.5218C8.0294 14.4898 8.17369 14.4416 8.3084 14.3775C8.36611 13.9477 8.52323 13.6175 8.77963 13.3867C8.41418 13.3483 8.08563 13.2905 7.79379 13.2136C7.50213 13.1366 7.20072 13.0116 6.88979 12.8383C6.57868 12.6653 6.3206 12.4504 6.11548 12.194C5.91032 11.9375 5.74195 11.6008 5.6106 11.1841C5.47919 10.7672 5.41346 10.2864 5.41346 9.74137C5.41346 8.96538 5.66679 8.30504 6.17335 7.75997C5.93606 7.17657 5.95846 6.52256 6.24063 5.79801C6.42658 5.74023 6.70235 5.78359 7.06779 5.9278C7.4333 6.07209 7.70092 6.19569 7.8709 6.29817C8.04089 6.40061 8.17709 6.48742 8.2797 6.55783C8.87614 6.39118 9.49165 6.30783 10.1264 6.30783C10.7611 6.30783 11.3768 6.39118 11.9732 6.55783L12.3387 6.3271C12.5886 6.17315 12.8838 6.03207 13.2234 5.90382C13.5633 5.77564 13.8231 5.74033 14.0028 5.79811C14.2912 6.52269 14.3169 7.17667 14.0795 7.76007C14.5861 8.30514 14.8395 8.96565 14.8395 9.74148C14.8395 10.2865 14.7735 10.7688 14.6423 11.1889C14.5109 11.609 14.3411 11.9454 14.1328 12.1988C13.9242 12.4522 13.6645 12.6654 13.3536 12.8384C13.0426 13.0116 12.741 13.1365 12.4494 13.2136C12.1576 13.2906 11.829 13.3484 11.4636 13.3869C11.7969 13.6753 11.9636 14.1306 11.9636 14.7526V16.7818C11.9636 16.8971 12.0037 16.9933 12.0839 17.0702C12.164 17.147 12.2906 17.1696 12.4638 17.1374C13.9515 16.6438 15.165 15.7542 16.1043 14.4685C17.0435 13.183 17.5133 11.7356 17.5133 10.126C17.513 8.7862 17.1826 7.55043 16.5224 6.4187Z"
                        fill="#FFD5D5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_131_186">
                        <rect width="20" height="20" rx="10" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </>
              )}
            </span>
            <div
              className={`flex items-center bg-deg3 ${web3ProjectBox === "a" ? "text-sm/3" : "text-sm/5 px-2"} font-mono font-[600] 
                   border-2 rounded-full p-1 max-w-39`}
            >
              Digital Forensics
            </div>
            {/* todo: fix the rendering overflow */}
            <div
              className={`font-[600] text-sm  font-mono text-white overflow-hidden
                ${web3ProjectBox === "a" ? "max-h-[305px]" : "hidden"}
              `}
            >
              <p className="mt-2">
                A blockchain based Decentralized Chain of custody manager. The
                evidences are verifiable and all the transactions are
                transparent, not owned by a single authority, hence can be
                tested for integrity by anyone without revealing the actual
                evidence data.
              </p>
              <p className="mt-2 text-xl font-sans text-deg3">Motivation</p>
              <p className="">
                One of the issues with traditional method of maintaining paper
                trails is trust placed on supervisor.I wanted to make the
                process systematic, transparent and verifiable while keeping the
                evidence data confidential.This can greatly help prove evidence
                relevance without the messy and lengthy paper documentations.
              </p>
            </div>
          </div>
          {web3ProjectBox === "a" && <div className="border"></div>}
        </div>
        <div
          onClick={() => {
            web3ProjectBox !== "b" && setWeb3ProjectBox("b");
          }}
          className={
            web3ProjectBox === "b" ? "text-2xl bg-deg1" : "text-xl bg-deg2"
          }
        >
          <p>{web3ProjectBox === "b" && "2. "}People’s Mandate</p>
        </div>
        <div
          onClick={() => {
            web3ProjectBox !== "c" && setWeb3ProjectBox("c");
          }}
          className={`rounded-r-sm ${web3ProjectBox === "c" ? "text-2xl bg-deg1" : "text-xl bg-deg2"}`}
        >
          <p>{web3ProjectBox === "c" && "3. "} Misc. Foundry Projects</p>
        </div>
      </div>
      <p className="mt-1 text-2xl">Other Projects</p>
      <div className="grid grid-cols-[4fr_5fr] gap-x-2 h-[320px] text-2xl *:p-2 *:bg-deg1">
        <div className="rounded-l-sm">
          <p>1. Linux From Scratch (LFS)</p>
        </div>
        <div className="rounded-r-sm"></div>
      </div>
    </>
  );
}
