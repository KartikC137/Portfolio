import { useState } from "react";

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
const techStack = {
  "BLOCKCHAIN/WEB3": {
    "Languages & Frameworks:": "Solidity, Foundry, Hardhat",
    "Libraries & Standards:":
      "Viem, Ethers.js, Chainlink, Openzeppelin - ERC20, ERC721",
    "Tools & Utilities:": "MetaMask, Remix, Etherscan, Geth",
    "Infrastructure:": "Alchemy, IPFS, zkSync (Layer 2)",
  },
  "FRONTEND & BACKEND": {
    "Languages:": "JS, TypeScript, SQL, bash, PHP(basic), SCSS",
    "Frameworks & Libraries:": "Next.js, React.js, Redux",
    "Environment & DB:": "Node.js, Postgres",
    "Tools & Utilities:": "Figma",
  },
  MISC: {
    "Languages:": "Python, Java, C",
    "Tools: ": "Git, GitHub, Linux, Windows",
    "IDEs:": "VSCode, Remix, Webstorm, Intellij IDEA",
    "Soft Skills: ":
      "Cybersecurity, Debugging, OOP, Testing (Unit, Integration and Fuzz)",
  },
};

// placeholder
const certicateTags = { fcc: ["React", "Redux", "HTML,CSS/SCSS,JS", "Jquery"] };

export default function EducationPage({ isActive }: EducationPageProps) {
  const [filter, setFilter] =
    useState<keyof typeof techStack>("BLOCKCHAIN/WEB3");

  return (
    <>
      <p className="my-8 ml-[-4px] font-mono font-[600] italic text-6xl">
        <span className="px-5 bg-deg3 rounded-r-full">Aquired Skills</span>
      </p>
      <div className="flex flex-col gap-y-7">
        {/* technical */}
        <p className="mx-[-5px] py-1 pl-6 text-3xl bg-deg1 text-deg3 font-bold font-mono">
          Technical Skills
        </p>
        <div className="flex flex-col gap-y-3 px-5">
          <nav
            id="filter-nav"
            className="grid grid-flow-col bg-deg3 text-2xl text-center font-mono font-[500] rounded-t-lg border-2"
          >
            {Object.keys(techStack).map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c as keyof typeof techStack)}
                className={`transition-all ease-in-out duration-300 
                 p-1 border-r-2 border-deg0 last:border-none first:rounded-tl-md last:rounded-tr-md 
              ${
                filter === c
                  ? "bg-deg0 text-deg3 font-[600]"
                  : "hover:bg-deg1 hover:font-[600]"
              }
            `}
              >
                <span>{c}</span>
              </button>
            ))}
          </nav>
          <div className="min-h-69 p-4 bg-deg3 border-2 rounded-b-lg text-3xl">
            {Object.entries(techStack[filter]).map(([k, v]) => (
              <p className="py-1" key={k}>
                <span className="text-3xl mr-2 font-sans">{k}</span>
                <span className="px-2 rounded-lg font-[700] font-mono bg-deg2">
                  {v}
                </span>
              </p>
            ))}
          </div>
        </div>

        {/* others */}
        <p className="mx-[-5px] py-1 pl-6 text-3xl bg-deg1 text-deg3 font-bold font-mono">
          Other Skills
        </p>
        {/* TODO: add the rest  */}
        <div className="p-4 mx-4 bg-deg3 border-2 rounded-lg text-3xl text-deg0">
          <span className="mr-2 font-sans">Languages: </span>
          <span className="px-2 rounded-sm font-[600] font-mono bg-deg2">
            English, Japanese(N5), Hindi, Kannada, Marathi
          </span>
        </div>
      </div>

      {/* certifications */}
      <p className="my-8 ml-[-4px] font-mono font-[600] italic text-6xl">
        <span className="px-5 bg-deg3 rounded-r-full">Certifications</span>
      </p>

      {/* 1. fcc */}
      <div className="mx-[-5px] p-5 flex flex-rows justify-between bg-deg0 text-deg3">
        <p className="text-4xl font-sans">1. Frontend Development Libraries</p>{" "}
        <div
          className="flex flex-row gap-x-1 text-xl/4
          *:border-deg0 *:bg-deg3 *:text-deg0 *:border-2 *:rounded-full *:px-2 *:flex *:items-center"
        >
          {certicateTags.fcc.map((e) => (
            <div key={e}>{e}</div>
          ))}
        </div>
      </div>
      <div className="p-2 grid grid-cols-2 gap-x-2">
        <img src="/fcc.png" />
        <p className="text-xl font-sans font-[700]">
          This course introduced me to React, and taught the essentials of JS
          and Jquery as well as using libraries and frameworks. I mainly focused
          on hooks, contexts and state management.
        </p>
      </div>

      {/* 2. cybersec */}
      <div className="mx-[-5px] p-5 flex flex-rows justify-between bg-deg0 text-deg3">
        <p className="text-4xl font-sans">2. Google Cybersecurity</p>{" "}
        <div
          className="flex flex-row gap-x-1 text-xl/4
          *:border-deg0 *:bg-deg3 *:text-deg0 *:border-2 *:rounded-full *:px-2 *:flex *:items-center"
        >
          {certicateTags.fcc.map((e) => (
            <div key={e}>{e}</div>
          ))}
        </div>
      </div>
      <div className="p-2 grid grid-cols-2 gap-x-2">
        <img className="border-4 border-deg0" src="/cybersec.png" />
        <p className="text-xl font-sans font-[700]">
          This course introduced me to React, and taught the essentials of JS
          and Jquery as well as using libraries and frameworks. I mainly focused
          on hooks, contexts and state management.
        </p>
      </div>

      {/* 2. astrotech */}
      <div className="mx-[-5px] p-5 flex flex-rows justify-between bg-deg0 text-deg3">
        <p className="text-4xl font-sans">3. Astrotech</p>{" "}
        <div
          className="flex flex-row gap-x-1 text-xl/4
          *:border-deg0 *:bg-deg3 *:text-deg0 *:border-2 *:rounded-full *:px-2 *:flex *:items-center"
        >
          {certicateTags.fcc.map((e) => (
            <div key={e}>{e}</div>
          ))}
        </div>
      </div>
      <div className="p-2 grid grid-cols-2 gap-x-2">
        <img className="border-4 border-deg0" src="/astro.png" />
        <p className="text-xl font-sans font-[700]">
          This course introduced me to React, and taught the essentials of JS
          and Jquery as well as using libraries and frameworks. I mainly focused
          on hooks, contexts and state management.
        </p>
      </div>

      {/* Education */}
      <p className="my-8 ml-[-4px] font-mono font-[600] italic text-6xl">
        <span className="px-5 bg-deg3 rounded-r-full">Formal Education</span>
      </p>
      <div
        className="h-105 mt-2 grid grid-cols-[1fr_1.1fr_1.3fr] rounded-b-xl bg-deg3 border-t-4 border-b-4 border-deg0 text-2xl
      *:p-2 *:border-r-4 *:last:border-none *:border-deg0"
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
            <span className="text-deg1 text-4xl">{k}</span>
            <br />
            <div>
              {Object.entries(v).map(([k1, v1]) => (
                <div key={k1}>
                  <span>{k1} : </span>
                  {k === "2021-2022" && k1 === "Score" ? (
                    <>
                      <span className="rounded-lg bg-deg2 px-1 font-mono font-[600]">
                        {v1[0]}
                      </span>{" "}
                      <span className="text-deg2">{v1[1]}</span>
                    </>
                  ) : (
                    <span className="rounded-lg bg-deg2 px-1 font-mono font-[600]">
                      {v1}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
