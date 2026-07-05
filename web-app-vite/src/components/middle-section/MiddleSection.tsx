"use client";
import ProjectsPage from "../pages/Projects";
import MorePage from "../pages/MoreAboutMe";
import EducationPage from "../pages/Education";
import NameCard from "../NameCard";
import { useEffect, useRef, useState } from "react";
import {
  firstPageStyle,
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
  a: { a: 1000, b: -300, c: 2050 },
  b: { a: 1330, b: -450, c: 1880 },
  c: { a: 1150, b: -130, c: 1700 },
};

export default function MiddleSection() {
  const pageARef = useRef<HTMLDivElement | null>(null);
  const pageBRef = useRef<HTMLDivElement | null>(null);
  const pageCRef = useRef<HTMLDivElement | null>(null);
  const nameCardRef = useRef<HTMLDivElement | null>(null);
  const revealedRef = useRef(false);

  // Refs for tracking state inside the Lenis scroll loop without causing re-renders
  const scrollRef = useRef<number>(0);
  const activePageRef = useRef<string>("a");

  console.log("scroll", scrollRef);
  const [activePage, setActivePage] = useState<string>("a");
  const [nameCardActive, setNameCardActive] = useState<boolean>(true);
  const [footerActive, setFooterActive] = useState<boolean>(false);
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
    const progress = Math.min(scroll / 3200, 1);
    const shouldReveal = progress > 0.6;
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
      setNameCardActive(shouldReveal);
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

  // name card fly
  useEffect(() => {
    const el = nameCardRef.current;

    if (!el) return;

    el.style.transform = "translateX(850px)";

    const timeout1 = setTimeout(() => {
      requestAnimationFrame(() => {
        el.style.transform = "translateX(0)";
      });
    }, 300);

    const timeout2 = setTimeout(() => {
      requestAnimationFrame(() => {
        el.style.zIndex = nameCardActive ? "102" : "97";
      });
    }, 100);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [nameCardActive]);

  function handlePageClick(page: string) {
    if (page === activePage) return;

    setActivePage(page);
    setIsAnimatingLayout(true);
    setExcludedStyle(page);

    setTimeout(() => {
      setIsAnimatingLayout(false);
    }, 600);
  }

  return (
    <div className="text-deg0 h-[3200px] relative font-sans *:border-4">
      {/* Page a */}
      <div
        ref={pageARef}
        id="page-a"
        onClick={() => handlePageClick("a")}
        className={`w-[1200px] h-[2000px] bg-deg3
          ${activePage === "a" ? firstPageStyle : activePage === "c" ? secondPageStyle : thirdPageStyle}
          ${isAnimatingLayout ? "transition-[transform,top,right,border-radius,box-shadow] duration-[600ms] ease-in-out" : ""}
        `}
      >
        <ProjectsPage isActive={activePage === "a"} />
      </div>

      {/* Page b */}
      <div
        ref={pageBRef}
        id="page-b"
        onClick={() => handlePageClick("b")}
        className={`w-[1200px] h-[3000px] bg-deg2  
          ${activePage === "b" ? firstPageStyle : activePage === "a" ? secondPageStyle : thirdPageStyle}
          ${isAnimatingLayout ? "transition-[transform,top,right,border-radius,box-shadow] duration-[600ms] ease-in-out" : ""}
        `}
      >
        <EducationPage isActive={activePage === "b"} />
      </div>

      {/* Page c */}
      <div
        ref={pageCRef}
        id="page-c"
        onClick={() => handlePageClick("c")}
        className={`w-[1200px] h-[1500px] bg-deg1 
          ${activePage === "c" ? firstPageStyle : activePage === "b" ? secondPageStyle : thirdPageStyle}
          ${isAnimatingLayout ? "transition-[transform,z-index,top,right,border-radius,box-shadow] duration-[600ms] ease-in-out" : ""}
          `}
      >
        <MorePage />
      </div>

      {/* Name Card */}
      {/* <div
        ref={nameCardRef}
        onClick={() => setNameCardActive(!nameCardActive)}
        className={`
       fixed bottom-10 right-13
       p-4
       w-145
       text-white rounded-xl
       border-deg3 shadow-lg shadow-deg0 bg-deg0
       transition-all duration-500 ease-in-out
  `}
      >
        <NameCard />
      </div> */}

      <div
        onClick={() => !revealedRef.current && setFooterActive(!footerActive)}
        className={`
          z-[101] fixed bottom-10 left-5 h-45 p-4
           backdrop-blur-sm rounded-lg border-2 
          transition-all duration-500 ease-in-out 
          ${footerActive ? "text-deg2 bg-deg0/80 border-deg3/80 w-[calc(100vw-4.8rem)]" : "w-90 border-deg0/70 text-deg0 bg-gradient-to-r from-deg2 to-deg2/70 "} 
        `}
      >
        <Footer isActive={!footerActive} />
      </div>
    </div>
  );
}
