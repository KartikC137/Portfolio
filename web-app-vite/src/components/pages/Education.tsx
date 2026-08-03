import { useState } from "react";
import ExpandableImage from "../UI/ExpandableImage";

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
    CGPA: 8.42,
  },
};
const techStack = {
  "FRONTEND & BACKEND": {
    "Languages:": "JS, TypeScript, SQL, bash, PHP(basic), SCSS",
    "Frameworks & Libraries:": "Next.js, React.js, Redux",
    "Environment & DB:": "Node.js, Postgres",
    "Tools & Utilities:": "Figma",
  },
  "BLOCKCHAIN/WEB3": {
    "Languages & Frameworks:": "Solidity, Foundry, Hardhat",
    "Libraries & Standards:":
      "Viem, Ethers.js, Chainlink, Openzeppelin - ERC20, ERC721",
    "Tools & Utilities:": "MetaMask, Remix, Etherscan, Geth",
    "Infrastructure:": "Alchemy, IPFS, zkSync (Layer 2)",
  },

  MISC: {
    "Languages:": "Python, Java, C",
    "Tools: ": "Git, GitHub, Linux, Windows",
    "IDEs:": "VSCode, Remix, Webstorm, Intellij IDEA",
    "Soft Skills: ":
      "Cybersecurity, Debugging, OOP, Testing (Unit, Integration and Fuzz)",
  },
};

const certicateTags = {
  fcc: ["React", "Redux", "HTML,CSS/SCSS,JS", "Jquery"],
  googleCybersecurity: [
    "Cybersecurity",
    "Python",
    "SQL",
    "Linux",
    "Network Security",
    "SIEM / IDS",
  ],
  astro: ["Astronomy", "Space Technology", "Astrophysics", "Personal Interest"],
};
export default function EducationPage() {
  const [filter, setFilter] =
    useState<keyof typeof techStack>("BLOCKCHAIN/WEB3");

  return (
    <>
      <p className="my-8  font-mono font-[600] italic text-6xl">
        <span className="ml-5 px-5 bg-deg3 rounded-full">Aquired Skills</span>
      </p>
      <div className="flex flex-col gap-y-5">
        {/* technical */}
        <p className=" py-1 pl-6 text-3xl bg-deg1 text-deg3 font-bold font-mono">
          Technical Skills
        </p>
        <div className="flex flex-col gap-y-2 px-5">
          <nav
            id="filter-nav"
            className="grid grid-flow-col bg-deg3 text-2xl text-center font-mono font-[500] rounded-t-lg border-3"
          >
            {Object.keys(techStack).map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c as keyof typeof techStack)}
                className={`transition-all ease-in-out duration-300 
                 p-1 border-r-3 border-deg0 last:border-none first:rounded-tl-sm last:rounded-tr-sm 
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
          <div className="flex flex-col justify-center min-h-69 p-4 bg-deg3 border-3 rounded-b-lg text-3xl">
            {Object.entries(techStack[filter]).map(([k, v]) => (
              <p className="py-1 text-justify" key={k}>
                <span className="mr-2 font-sans">{k}</span>
                <span className="px-2 rounded-lg font-[700] font-mono bg-deg2">
                  {v}
                </span>
              </p>
            ))}
          </div>
        </div>

        {/* others */}
        <p className=" py-1 pl-6 text-3xl bg-deg1 text-deg3 font-bold font-mono">
          Other Skills
        </p>
        <div className="p-4 mx-4 bg-deg3 border-3 rounded-lg text-3xl text-deg0">
          <span className="mr-2 font-sans">Languages: </span>
          <span className="px-2 rounded-lg font-[700] font-mono bg-deg2">
            English, Japanese(N5), Hindi, Kannada, Marathi
          </span>
        </div>
      </div>

      {/* certifications */}
      <p className="my-8  font-mono font-[600] italic text-6xl">
        <span className="ml-5 px-5 bg-deg3 rounded-full">Certifications</span>
      </p>
      {/* 1. fcc */}
      <div className=" p-5 flex flex-rows justify-between bg-deg0 text-deg3">
        <a
          href="https://www.freecodecamp.org/certification/kartikc137/front-end-development-libraries"
          className="flex text-4xl font-sans"
        >
          1. Frontend Development Libraries
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            width="40px"
            viewBox="0 -960 960 960"
            className="ml-4 fill-deg3"
          >
            <path d="M202.87-111.87q-37.78 0-64.39-26.61t-26.61-64.39v-554.26q0-37.78 26.61-64.39t64.39-26.61H480v91H202.87v554.26h554.26V-480h91v277.13q0 37.78-26.61 64.39t-64.39 26.61H202.87ZM395.41-332 332-395.41l361.72-361.72H560v-91h288.13V-560h-91v-133.72L395.41-332Z" />
          </svg>
        </a>
        <div
          className="flex flex-row gap-x-1 text-xl/4
          *:border-deg0 *:bg-deg3 *:text-deg0 *:border-2 *:rounded-full *:px-2 *:flex *:items-center"
        >
          {certicateTags.fcc.map((e) => (
            <div key={e}>{e}</div>
          ))}
        </div>
      </div>
      <div className="p-2 grid grid-cols-2 gap-x-1">
        {/* // crop this to remove borders */}
        <ExpandableImage
          className="w-full h-110 object-fill rounded-l-2xl border-4 border-deg0"
          src="/fcc.png"
          alt="Frontend Certificate"
        />
        <div
          className="bg-deg3 rounded-r-2xl border-4
        text-2xl font-sans font-bold"
        >
          <ul className="flex flex-col items-center gap-y-6 list-disc py-6 pr-6 pl-10 text-justify">
            <li>
              Completed a comprehensive, 300-hour certification focused on
              mastering modern front-end frameworks.
            </li>
            <li>
              This coursework involved building responsive, interactive
              single-page applications and managing complex state.
            </li>
          </ul>
          <div className="px-4 pb-6 text-justify">
            <span className="text-deg3 bg-deg0 px-3 rounded-lg">
              Key Projects:
            </span>{" "}
            Random Quote Machine, Markdown Previewer, Drum Machine, JavaScript
            Calculator, and a 25 + 5 Clock.
          </div>
        </div>
      </div>

      {/* 2. cybersec */}
      <div className="p-5 flex flex-rows justify-between bg-deg0 text-deg3">
        <a
          href="https://coursera.org/share/d65097ba4b0700b23fff09eaeb3f0aac"
          className="flex text-4xl font-sans"
        >
          2. Google Cybersecurity
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            width="40px"
            viewBox="0 -960 960 960"
            className="ml-4 fill-deg3"
          >
            <path d="M202.87-111.87q-37.78 0-64.39-26.61t-26.61-64.39v-554.26q0-37.78 26.61-64.39t64.39-26.61H480v91H202.87v554.26h554.26V-480h91v277.13q0 37.78-26.61 64.39t-64.39 26.61H202.87ZM395.41-332 332-395.41l361.72-361.72H560v-91h288.13V-560h-91v-133.72L395.41-332Z" />
          </svg>
        </a>
        <div
          className="flex flex-row gap-x-1 text-xl/4
          *:border-deg0 *:bg-deg3 *:text-deg0 *:border-2 *:rounded-full *:px-2 *:flex *:items-center"
        >
          {certicateTags.googleCybersecurity.map((e) => (
            <div key={e}>{e}</div>
          ))}
        </div>
      </div>
      <div className="p-2 grid grid-cols-2 gap-x-1">
        <ExpandableImage
          className="w-full h-110 border-4 border-deg0 rounded-l-2xl object-fill"
          src="/cybersec.png"
          alt="Cybersecurity Certificate"
        />
        <ul
          className="list-disc py-6 pr-6 pl-10 flex flex-col items-center gap-y-6 bg-deg3 rounded-r-2xl border-4 
          text-justify text-2xl font-sans font-bold"
        >
          <li>
            Completed a rigorous 8-course program focused on threat mitigation,
            network security, and vulnerability assessment.
          </li>
          <li>
            Gained practical, hands-on experience utilizing Python, Linux, SQL,
            SIEM, and IDS tools to actively identify and mitigate security
            risks.
          </li>
        </ul>
      </div>
      {/* 3. jlpt n5 */}
      {/* <div className=" p-5 flex flex-rows justify-between bg-deg0 text-deg3">
        <p className="text-4xl font-sans">3. JLPT N5</p>{" "}
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
        <ExpandableImage className="border-4 border-deg0" src="/cybersec.png" />
        <p className="text-xl font-sans font-[700]">
          This course introduced me to React, and taught the essentials of JS
          and Jquery as well as using libraries and frameworks. I mainly focused
          on hooks, contexts and state management.
        </p>
      </div> */}
      {/* 4. astrotech */}
      <div className=" p-5 flex flex-rows justify-between bg-deg0 ">
        <a
          href="https://coursera.org/share/23c6bf6e506fef03170fe3e5d2c1e26d"
          className="flex text-4xl font-sans text-deg3"
        >
          3. Astrotech
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            width="40px"
            viewBox="0 -960 960 960"
            className="ml-4 fill-deg3"
          >
            <path d="M202.87-111.87q-37.78 0-64.39-26.61t-26.61-64.39v-554.26q0-37.78 26.61-64.39t64.39-26.61H480v91H202.87v554.26h554.26V-480h91v277.13q0 37.78-26.61 64.39t-64.39 26.61H202.87ZM395.41-332 332-395.41l361.72-361.72H560v-91h288.13V-560h-91v-133.72L395.41-332Z" />
          </svg>
        </a>
        <div
          className="flex flex-row gap-x-1 text-xl/4
          *:border-deg0 *:bg-deg3 *:text-deg0 *:border-2 *:rounded-full *:px-2 *:flex *:items-center"
        >
          {certicateTags.astro.map((e) => (
            <div key={e}>{e}</div>
          ))}
        </div>
      </div>
      <div className="p-2 grid grid-cols-2 gap-x-1">
        <div className="relative w-full ">
          <ExpandableImage
            className="w-full h-110 object-fill border-4 border-deg0 rounded-l-2xl"
            src="/astro.png"
            alt="AstroTech Certificate"
          />
          {/* <div className="absolute inset-0 shadow-[inset_0_-20px_50px_0px_theme(colors.deg0)] pointer-events-none"></div> */}
        </div>
        <ul
          className="list-disc  py-6 pr-6 pl-10 flex flex-col items-center gap-y-6  bg-deg3 rounded-r-2xl  border-4 
          text-justify text-2xl font-sans font-bold"
        >
          <li>
            An independent study pursued purely out of a personal interest in
            astrophysics.
          </li>
          <li>
            This coursework covered the intersection of science and technology,
            specifically focusing on how modern astronomical discoveries are
            made, the tools used to observe the cosmos, and the processing of
            scientific data.
          </li>
        </ul>
      </div>

      {/* Education */}
      <p className="my-8  font-mono font-[600] italic text-6xl">
        <span className="ml-5 px-5 bg-deg3 rounded-full">Formal Education</span>
      </p>
      <div
        className="h-69 overflow-hidden mx-4 mt-2 grid grid-cols-[1fr_1.1fr_1.3fr] rounded-xl bg-deg3 border-4 border-deg0 text-2xl
      *:p-2 *:border-r-4 *:last:border-none *:border-deg0"
      >
        {Object.entries(education).map(([k, v]) => (
          <div className="relative" key={k}>
            {k !== "2022-2026" && (
              <span className="absolute top-[-25px] right-0 text-8xl text-deg1">
                →
              </span>
            )}
            <span className="text-deg1 text-4xl">{k}</span>
            <br />
            <ul className="list-disc pl-6">
              {Object.entries(v).map(([k1, v1]) => (
                <li key={k1}>
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
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
