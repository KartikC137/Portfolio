"use client";

import { useState } from "react";

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

export default function SkillStackBox() {
  const [filter, setFilter] =
    useState<keyof typeof techStack>("BLOCKCHAIN/WEB3");
  return (
    <div className="mt-2 p-4 border-deg3 bg-deg2 text-deg0">
      <p className="text-2xl font-sans">
        Acquired Skills/ Development Experience
      </p>
      <label htmlFor="filter-nav" className="font-mono font-[500]">
        Technical Skills
      </label>
      <nav
        id="filter-nav"
        className="grid grid-flow-col bg-deg3 text-center font-mono font-[500] rounded-t-sm border-2 
        *:p-1 *:border-r-2 *:last:border-none *:border-deg0"
      >
        {Object.keys(techStack).map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c as keyof typeof techStack)}
            className={`transition-all ease-in-out duration-300
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
      <div className="min-h-[160px] my-1 pl-2 py-2 bg-deg3 border-2 rounded-b-sm text-lg">
        {Object.entries(techStack[filter]).map(([k, v]) => (
          <p key={k}>
            <span className="mr-2 font-sans">{k}</span>
            <span className="px-2 rounded-sm font-[600] font-mono bg-deg2">
              {v}
            </span>
          </p>
        ))}
      </div>
      <label htmlFor="other-skills-box" className="font-mono font-[500]">
        Other Skills
      </label>
      {/* TODO: add the rest  */}
      <div
        id="other-skills-box"
        className="pl-2 py-2 bg-deg3 border-2 rounded-sm text-lg text-deg0"
      >
        <span className="mr-2 font-sans">Languages: </span>
        <span className="px-2 rounded-sm font-[600] font-mono bg-deg2">
          English, Japanese(N5), Hindi, Kannada, Marathi
        </span>
      </div>
    </div>
  );
}
