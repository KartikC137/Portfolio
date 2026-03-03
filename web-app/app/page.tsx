"use client";
import ProjectsPage from "../components/pages/Projects";
import MorePage from "../components/pages/MoreAboutMe";
import EducationPage from "../components/pages/Education";
import { useState } from "react";
/**
 * @dev page order: a - projects
 *                  b - education and cert
 *                  c - more about me
 */

const pages = { a: "deg3", b: "deg2", c: "deg1" };
export default function Home() {
  const [activePage, setActivePage] = useState<string>("a");
  const activePageStyle =
    "z-100 absolute bottom-0 w-[1013px] h-[853px] text-deg0! border-deg0 pt-4";
  const middlePageStyle =
    "z-99 absolute bottom-9 hover:bottom-18 hover:pt-3 left-14 w-[1020px] h-[860px]";
  const lastPageStyle =
    "z-98 absolute bottom-18 hover:bottom-24 hover:pt-3  left-28 w-[1027px] h-[867px]";

  const setExcludedStyle = (toExclude: string) => {
    Object.entries(pages).map(([e, s]) => {
      // if (e !== toExclude) return;
      const el = document.getElementById(`page-${e}`);
      if (el) {
        el.style.cssText = `
        background-color: color-mix(in srgb, var(--${s}), transparent ${e === toExclude ? "20%" : "80%"});
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        `;
        setTimeout(() => {
          el.style.cssText = `
          background-color: var(--${s});
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          `;
        }, 200);
      }
    });
  };

  return (
    <div className="relative ml-10 font-sans *:px-4 *:border-4 *:rounded-sm *:transition-all *:duration-500 *:ease-in-out">
      <div
        id="page-a"
        onClick={() => {
          if (activePage !== "a") setExcludedStyle("a");
          setActivePage("a");
        }}
        className={`bg-deg3 ${activePage === "a" ? activePageStyle : activePage === "c" ? middlePageStyle : lastPageStyle}
        `}
      >
        <ProjectsPage isActive={activePage === "a"} />
      </div>
      <div
        id="page-b"
        onClick={() => {
          if (activePage !== "b") setExcludedStyle("b");
          setActivePage("b");
        }}
        className={`bg-deg2 text-deg3 ${activePage === "b" ? activePageStyle : activePage === "a" ? middlePageStyle : lastPageStyle}`}
      >
        <EducationPage isActive={activePage === "b"} />
      </div>
      <div
        id="page-c"
        onClick={() => {
          if (activePage !== "c") setExcludedStyle("c");
          setActivePage("c");
        }}
        className={`bg-deg1 text-deg2 ${activePage === "c" ? activePageStyle : activePage === "b" ? middlePageStyle : lastPageStyle}
        `}
      >
        <MorePage />
      </div>
    </div>
  );
}
