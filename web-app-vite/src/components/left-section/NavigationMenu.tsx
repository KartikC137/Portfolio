import { useState } from "react";

const pages = {
  p: "projects",
  s: "skills",
  c: "certifications",
  e: "education",
  o: "open source",
  m: "more about me",
};

type PageKey = keyof typeof pages;

export default function NavigationMenu() {
  const [activePage, setActivePage] = useState<PageKey>("p");
  const [isMenuHidden, setIsMenuHidden] = useState<boolean>(true);
  return (
    <div
      className={`z-1000 fixed flex flex-col px-2 py-3 top-12 left-5 w-70 
    rounded-lg border-4 ${isMenuHidden ? "border-deg0/70 text-deg0 bg-gradient-to-r from-deg2 to-deg2/80" : "border-deg2/80 text-deg2 bg-deg0/80"}
    backdrop-blur-sm`}
    >
      <div
        className={`flex items-center justify-between ml-3 
           text-4xl`}
      >
        <span>Menu</span>
        <svg
          onClick={() => setIsMenuHidden(!isMenuHidden)}
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          className={isMenuHidden ? "fill-deg0" : "fill-deg2"}
        >
          <path d="M330.67-272 480-421.33 629.33-272 688-330.67 538.67-480 688-629.33 629.33-688 480-538.67 330.67-688 272-629.33 421.33-480 272-330.67 330.67-272ZM479.69-58.67q-86.66 0-163.5-33.35t-133.83-90.34q-56.99-56.99-90.34-133.91Q58.67-393.2 58.67-480q0-87.48 33.41-164.42 33.41-76.94 90.62-134.16 57.21-57.23 133.87-89.99 76.65-32.76 163.13-32.76 87.52 0 164.66 32.76t134.22 90q57.09 57.24 89.92 134.29 32.83 77.06 32.83 164.67 0 86.94-32.76 163.34-32.76 76.39-89.99 133.58-57.22 57.2-134.26 90.61-77.04 33.41-164.63 33.41Z" />
        </svg>
      </div>
      <div className={`${!isMenuHidden && "mt-2"}`}>
        {!isMenuHidden &&
          Object.entries(pages).map(([k, p]) => (
            <div
              key={k}
              className={`py-2 pl-3 border-t rounded-md border-deg2 font-mono text-2xl text-deg3
        ${activePage === k ? "bg-deg2 text-deg0! rounded-full! font-[700]" : " hover:bg-deg1 hover:text-deg0 hover:rounded-full hover:font-[600]"}
        transition-all duration-200 ease-out 
        `}
              onClick={() => setActivePage(k as PageKey)}
            >
              {p}
            </div>
          ))}
      </div>
    </div>
  );
}
