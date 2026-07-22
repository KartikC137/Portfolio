"use client";
import ProjectsPage from "../pages/Projects";
import MorePage from "../pages/MoreAboutMe";
import EducationPage from "../pages/Education";
import { useEffect, useRef, useState } from "react";
import {
  firstPageStyle,
  pageTransistion,
  secondPageStyle,
  thirdPageStyle,
} from "../../lib/styles";
import Lenis from "lenis";
import Footer from "../Footer";

/**
 * @dev page order: a - projects w-[1200px] h-[2000px]
 *                  b - education and cert h-[3000px]
 *                  c - more about me h-[1500px]
 */

const pages = { a: "deg3", b: "deg2", c: "deg1" };

type SpeedsObject = { a: number; b: number; c: number };

const scrollDistances: Record<string, SpeedsObject> = {
  a: { a: -520, b: 1620, c: 3500 },
  b: { a: -220, b: 1470, c: 3350 },
  c: { a: -375, b: 1770, c: 3200 },
};

export default function MiddleSection() {
  const pageARef = useRef<HTMLDivElement | null>(null);
  const pageBRef = useRef<HTMLDivElement | null>(null);
  const pageCRef = useRef<HTMLDivElement | null>(null);
  const revealedRef = useRef(false);

  const scrollRef = useRef<number>(0);
  const activePageRef = useRef<string>("a");

  const [activePage, setActivePage] = useState<string>("c");
  const [footerActive, setFooterActive] = useState<boolean>(true);
  const [isAnimatingLayout, setIsAnimatingLayout] = useState<boolean>(false);

  const setExcludedStyle = (toExclude: string) => {
    Object.entries(pages).forEach(([e]) => {
      const el = document.getElementById(`page-${e}`);
      if (el) {
        el.style.opacity = toExclude === e ? "" : "80%";

        setTimeout(() => {
          el.style.opacity = "100%";
        }, 600);
      }
    });
  };

  const applyTransforms = (scroll: number, currentPage: string) => {
    const progress = Math.min(scroll / 4500, 1);
    const shouldReveal = progress > 0.67;
    const speeds = scrollDistances[currentPage];

    if (pageARef.current)
      pageARef.current.style.transform = `translateY(${progress * speeds.a}px)`;
    if (pageBRef.current)
      pageBRef.current.style.transform = `translateY(${progress * speeds.b}px)`;
    if (pageCRef.current)
      pageCRef.current.style.transform = `translateY(${progress * speeds.c}px)`;

    if (revealedRef.current !== shouldReveal) {
      revealedRef.current = shouldReveal;
      setFooterActive(shouldReveal);
    }
  };

  useEffect(() => {
    activePageRef.current = activePage;
    applyTransforms(scrollRef.current, activePage);
  }, [activePage]);

  // main pages scroll
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });

    lenis.on("scroll", ({ scroll }) => {
      scrollRef.current = scroll;
      applyTransforms(scroll, activePageRef.current);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  function handlePageClick(page: string) {
    if (page === activePage) return;
    if (!revealedRef.current && footerActive) setFooterActive(false);
    setActivePage(page);
    setIsAnimatingLayout(true);
    setExcludedStyle(page);

    setTimeout(() => {
      setIsAnimatingLayout(false);
    }, 600);
  }

  return (
    <div
      className="relative h-[4500px]  
     text-deg0 font-sans 
     *:rounded-3xl"
    >
      {/* Page a */}
      <div
        ref={pageARef}
        id="page-a"
        onClick={() => handlePageClick("a")}
        className={`w-330 h-[4400px]
          ${activePage === "a" ? firstPageStyle : activePage === "c" ? secondPageStyle : thirdPageStyle}
          ${isAnimatingLayout ? pageTransistion : ""}
        `}
      >
        <svg
          className={`z-[-1] absolute h-full w-full border-4 rounded-3xl 
            ${activePage === "a" ? "border-deg0 backdrop-blur-md" : "border-deg3 "}`}
        >
          <defs>
            <mask id="a-mask">
              <rect width="100%" height="100%" fill="white" />
              {/* p1 parent mask */}
              <rect className="w-320 h-195" x="30" y="140" fill="gray" />
              {/* p2 parent mask */}
              <rect className="w-320 h-195" x="10" y="960" fill="gray" />
            </mask>
          </defs>
          <rect className="h-full w-full fill-deg3/80" mask="url(#a-mask)" />
        </svg>
        <ProjectsPage />
      </div>

      {/* Page b */}
      <div
        ref={pageBRef}
        id="page-b"
        onClick={() => handlePageClick("b")}
        className={`w-330 h-[2850px] 
          ${activePage === "b" ? firstPageStyle : activePage === "a" ? secondPageStyle : thirdPageStyle}
          ${isAnimatingLayout ? pageTransistion : ""}
        `}
      >
        <svg
          className={`z-[-1] absolute top-0 bottom-0 right-0 left-0 h-full w-full border-4 rounded-3xl 
            ${activePage === "b" ? "border-deg0" : "border-deg3"}`}
        >
          <defs>
            <mask id="b-mask">
              <rect width="100%" height="100%" fill="white" />
              <rect
                x="-20"
                y="14"
                width="566"
                height="88"
                rx="44"
                fill="black"
              />
              <rect
                x="-20"
                y="691"
                width="566"
                height="88"
                rx="44"
                fill="black"
              />
              <rect
                x="-20"
                y="2424"
                width="637"
                height="88"
                rx="44"
                fill="black"
              />
            </mask>
          </defs>
          <rect className="h-full w-full fill-deg2" mask="url(#b-mask)" />
        </svg>
        <EducationPage />
      </div>

      {/* Page c */}
      <div
        ref={pageCRef}
        id="page-c"
        onClick={() => handlePageClick("c")}
        className={`w-330 h-[1500px]
          ${activePage === "c" ? firstPageStyle : activePage === "b" ? secondPageStyle : thirdPageStyle}
          ${isAnimatingLayout ? pageTransistion : ""}
          `}
      >
        <svg
          className={`z-[-1] absolute top-0 bottom-0 right-0 left-0 h-full w-full border-4 rounded-3xl 
            ${activePage === "c" ? "border-deg0" : "border-deg3"}`}
        >
          <defs>
            <mask id="c-mask">
              <rect width="100%" height="100%" fill="white" />
              <rect x="5" y="24" width="472" height="84" rx="40" fill="black" />
            </mask>
          </defs>
          <rect className="h-full w-full fill-deg1" mask="url(#c-mask)" />
        </svg>
        <MorePage />
      </div>

      <div
        onClick={() => !revealedRef.current && setFooterActive(!footerActive)}
        className={`
          z-[101] fixed bottom-4 left-5 h-50 
          backdrop-blur-sm
          transition-all duration-700 ease-in-out 
          ${footerActive ? "text-deg2 border-deg2/80 w-[calc(100vw-4.7rem)]" : "w-102 p-2 border-deg3 text-deg0 bg-gradient-to-r from-deg2 to-deg1/20"} 
        `}
      >
        <svg
          className={`z-[-1] absolute h-full w-full border-4 rounded-3xl 
            ${footerActive && "border-deg2"}`}
        >
          <defs>
            <mask id="f-mask">
              <rect width="100%" height="100%" fill="white" />
              {footerActive && (
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
              )}
            </mask>
          </defs>
          <rect
            className={`h-full w-full 
            ${footerActive ? "fill-deg0" : "fill-deg1/80"} `}
            mask="url(#f-mask)"
          />
        </svg>
        <Footer isActive={footerActive} />
      </div>
    </div>
  );
}
