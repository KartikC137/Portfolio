"use client";
import ProjectsPage from "./projects/page";
import MorePage from "./more/page";
import EducationPage from "./education/page";
import { useState } from "react";
/**
 * @dev page order: a - projects
 *                  b - education and cert
 *                  c - more about me
 */

export default function Home() {
  const [activePage, setActivePage] = useState<string>("a");
  const activePageStyle =
    "z-100 absolute bottom-0 w-[1013px] h-[853px] text-[var(--background)] pt-4";
  const middlePageStyle =
    "active:opacity-60 z-99 absolute bottom-9 hover:bottom-18 hover:pt-4 left-14 w-[1020px] h-[860px]";
  const lastPageStyle =
    "active:opacity-60 z-98 absolute bottom-18 hover:bottom-24 hover:pt-4 left-28 w-[1027px] h-[867px]";
  return (
    <div className="relative ml-10 *:pl-4 *:border-4 *:rounded-md *:transition-all *:duration-700 *:ease-out">
      <div
        onClick={() => setActivePage("a")}
        className={`bg-deg2 border-white 
        ${activePage === "a" ? activePageStyle : activePage === "c" ? middlePageStyle : lastPageStyle}
        `}
      >
        <ProjectsPage />
      </div>
      <div
        onClick={() => setActivePage("b")}
        className={`bg-deg1 border-deg2 ${activePage !== "b" && "text-deg2"}
                ${activePage === "b" ? activePageStyle : activePage === "a" ? middlePageStyle : lastPageStyle}

        `}
      >
        <EducationPage />
      </div>
      <div
        onClick={() => setActivePage("c")}
        className={`bg-deg0 border-deg1 ${activePage !== "c" && "text-deg1"}
                ${activePage === "c" ? activePageStyle : activePage === "b" ? middlePageStyle : lastPageStyle}

        `}
      >
        <MorePage />
      </div>
    </div>
  );
}
