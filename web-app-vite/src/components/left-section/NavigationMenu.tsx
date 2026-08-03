import { useState } from "react";
import { useWindowScale } from "../../hooks/useWindowScale";

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
  const scale = useWindowScale();
  return (
    <div
      style={{
        transform: `scale(${scale})`,
      }}
      className={`z-1000 fixed flex flex-col top-12 left-5 w-70 origin-top-left
    transition-all duration-700 ease-in-out 
    rounded-lg ${isMenuHidden ? "p-1 text-deg0 bg-gradient-to-r from-deg2 to-deg2/60" : "text-deg2"}
    backdrop-blur-sm`}
    >
      {/* bg */}
      <svg
        className={`z-[-1] absolute h-full w-full border-3 rounded-xl 
            ${!isMenuHidden && "border-deg2"}`}
      >
        <defs>
          <mask id="m-mask">
            <rect width="100%" height="100%" fill="white" />
            {/* {isMenuHidden && (
              <>
                <rect
                  x="380"
                  y="45"
                  width="338"
                  height="98"
                  rx="49"
                  fill="black"
                />
                <rect
                  x="724"
                  y="32"
                  width="1102"
                  height="124"
                  rx="18"
                  fill="black"
                />
              </>
            )} */}
          </mask>
        </defs>
        <rect
          className={`h-full w-full 
            ${isMenuHidden ? "fill-deg1/80" : "fill-deg0"} `}
          mask="url(#m-mask)"
        />
      </svg>

      <p className={`pt-4 pb-2 pl-4 text-4xl`}>Menu</p>

      <div
        className={`absolute right-0 px-2 border-y-3 border-l-3  transition-colors fill-deg0 bg-deg2 rounded-l-full
      ${isMenuHidden ? "top-4 mr-[-4px]" : "top-3"}`}
      >
        <svg
          onClick={() => setIsMenuHidden(!isMenuHidden)}
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          className={` cursor-pointer  duration-300`}
        >
          {/* Top Line */}
          <rect
            x="120"
            y="-760"
            width="720"
            height="80"
            rx="40"
            style={{
              transformOrigin: "480px -720px",
              transition: "transform 0.3s ease",
              transform: isMenuHidden
                ? "none"
                : "translateY(240px) rotate(45deg)",
            }}
          />

          {/* Middle Line */}
          <rect
            x="120"
            y="-520"
            width="720"
            height="80"
            rx="40"
            style={{
              transformOrigin: "480px -480px",
              transition: "opacity 0.2s ease, transform 0.3s ease",
              opacity: isMenuHidden ? 1 : 0,
              transform: isMenuHidden ? "none" : "scaleX(0)",
            }}
          />

          {/* Bottom Line */}
          <rect
            x="120"
            y="-280"
            width="720"
            height="80"
            rx="40"
            style={{
              transformOrigin: "480px -240px",
              transition: "transform 0.3s ease",
              transform: isMenuHidden
                ? "none"
                : "translateY(-240px) rotate(-45deg)",
            }}
          />
        </svg>
      </div>

      <div className={`${!isMenuHidden && "px-4 pt-4 pb-4"}`}>
        {!isMenuHidden && (
          <>
            <p className={`pb-4 text-xl font-mono font-bold italic`}>
              UNDER CONSTRUCTION
            </p>
            {Object.entries(pages).map(([k, p]) => (
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
          </>
        )}
      </div>
    </div>
  );
}
