"use client";
import ProjectsPage from "../pages/Projects";
import MorePage from "../pages/MoreAboutMe";
import EducationPage from "../pages/Education";
import { useEffect, useRef, useState } from "react";
import { useWindowScale } from "../../hooks/useWindowScale";
import {
  firstPageStyle,
  pages,
  pageTransistion,
  scrollDistances,
  secondPageStyle,
  sectionsConfig,
  thirdPageStyle,
} from "../../lib/data";
import Lenis from "lenis";
import Footer from "../Footer";
import NavigationMenu from "../left-section/NavigationMenu";
import type { SectionKey } from "../../lib/types";

const sectionsByPage = Object.entries(sectionsConfig).reduce(
  (acc, [key, data]) => {
    if (!acc[data.page]) acc[data.page] = [];
    acc[data.page].push({ id: key, offset: data.offset });
    acc[data.page].sort((a, b) => b.offset - a.offset);
    return acc;
  },
  {} as Record<string, { id: string; offset: number }[]>,
);

export default function MiddleSection() {
  const scale = useWindowScale();

  const pageARef = useRef<HTMLDivElement | null>(null);
  const pageBRef = useRef<HTMLDivElement | null>(null);
  const pageCRef = useRef<HTMLDivElement | null>(null);
  const revealedRef = useRef(false);

  const lenisRef = useRef<Lenis | null>(null);
  const scaleRef = useRef<number>(scale);
  const scrollRef = useRef<number>(0);
  const activePageRef = useRef<string>("a");
  const activeSectionRef = useRef<string>("");

  const [activePage, setActivePage] = useState<string>("a");
  const [activeSection, setActiveSection] = useState<SectionKey>("projects");
  const [footerActive, setFooterActive] = useState<boolean>(true);
  const [isAnimatingLayout, setIsAnimatingLayout] = useState<boolean>(false);

  // Init lenis
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    lenisRef.current = lenis;
    lenis.on("scroll", ({ scroll }) => {
      scrollRef.current = scroll;
      applyTransforms(scroll, activePageRef.current);
    });

    const syncScrollToPath = () => {
      const pathname = window.location.pathname;
      const segments = pathname.split("/").filter(Boolean);
      const urlSection = segments[segments.length - 1] as SectionKey;

      if (urlSection && sectionsConfig[urlSection]) {
        const targetPage = sectionsConfig[urlSection].page;
        const canvasOffset = sectionsConfig[urlSection].offset;

        const maxScroll = 4500 * scaleRef.current - window.innerHeight;
        const progressPercentage = canvasOffset / 4500;
        const physicalTarget =
          maxScroll > 0 ? maxScroll * progressPercentage : 0;

        activeSectionRef.current = urlSection;
        setActiveSection(urlSection);

        const executeScroll = () => {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(physicalTarget + 10, {
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        };

        if (targetPage !== activePageRef.current) {
          handlePageClick(targetPage);
          setTimeout(executeScroll, 600);
        } else {
          setTimeout(executeScroll, 100);
        }
      } else {
        activeSectionRef.current = "projects";
        setActiveSection("projects");
        if (activePageRef.current !== "a") handlePageClick("a");
        setTimeout(() => lenis.scrollTo(0, { duration: 1.2 }), 100);
      }
    };

    syncScrollToPath();
    window.addEventListener("popstate", syncScrollToPath);

    return () => {
      window.removeEventListener("popstate", syncScrollToPath);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Update scale ref
  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  // Update active page ref
  useEffect(() => {
    activePageRef.current = activePage;
    applyTransforms(scrollRef.current, activePage);
  }, [activePage]);

  const setExcludedStyle = (toExclude: string) => {
    pages.forEach(([e]) => {
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
    const maxScroll = 4500 * scaleRef.current - window.innerHeight;
    const progress = maxScroll > 0 ? Math.min(scroll / maxScroll, 1) : 0;
    const normalizedCanvasScroll = progress * 4500;
    const shouldReveal = progress > 0.99;
    const speeds = scrollDistances[currentPage];

    if (pageARef.current)
      pageARef.current.style.transform = `translateY(${progress * speeds.a}px)`;
    if (pageBRef.current)
      pageBRef.current.style.transform = `translateY(${progress * speeds.b}px)`;
    if (pageCRef.current)
      pageCRef.current.style.transform = `translateY(${progress * speeds.c}px)`;

    let currentSection = "";
    const availableSections = sectionsByPage[currentPage] || [];

    for (const section of availableSections) {
      if (normalizedCanvasScroll >= section.offset) {
        currentSection = section.id;
        break;
      }
    }

    if (currentSection !== activeSectionRef.current) {
      activeSectionRef.current = currentSection;
      setActiveSection(currentSection as SectionKey);
      console.log("setting section to", currentSection);
      window.history.replaceState(null, "", `/${currentSection}`);
    }

    if (revealedRef.current !== shouldReveal) {
      revealedRef.current = shouldReveal;
      setFooterActive(shouldReveal);
    }
  };

  function handlePageClick(page: string) {
    if (page === activePageRef.current) return;
    if (!revealedRef.current && footerActive) setFooterActive(false);
    setActivePage(page);
    activePageRef.current = page;
    setIsAnimatingLayout(true);
    setExcludedStyle(page);
    setTimeout(() => {
      setIsAnimatingLayout(false);
    }, 600);
  }

  const handleMenuClick = (targetSection: SectionKey) => {
    const targetPage = sectionsConfig[targetSection].page;
    const canvasOffset = sectionsConfig[targetSection].offset;

    const maxScroll = 4500 * scaleRef.current - window.innerHeight;
    const progressPercentage = canvasOffset / 4500;
    const physicalTarget = maxScroll > 0 ? maxScroll * progressPercentage : 0;

    window.history.pushState(null, "", `/${targetSection}`);

    activeSectionRef.current = targetSection;
    setActiveSection(targetSection);

    const executeScroll = () => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(physicalTarget + 10, {
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    };

    if (targetPage !== activePageRef.current) {
      handlePageClick(targetPage);
      setTimeout(executeScroll, 600);
    } else {
      executeScroll();
    }
  };

  return (
    <>
      <NavigationMenu
        activeSection={activeSection}
        onSectionClick={handleMenuClick}
      />

      <div
        style={{ height: `${4500 * scale}px` }}
        className="w-full relative overflow-hidden"
      >
        <div
          style={{
            transform: `scale(${scale})`,
          }}
          className={`relative h-[4500px] w-[1920px] origin-top-left *:rounded-3xl
        text-deg0 font-sans`}
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
            {activePage !== "a" && (
              <div className="absolute inset-0 z-[100] cursor-pointer rounded-3xl" />
            )}
            <svg
              className={`z-[-1] absolute h-full w-full border-4 rounded-3xl 
            ${activePage === "a" ? "border-deg0 backdrop-blur-sm" : "border-deg3 "}`}
            >
              <defs>
                <mask id="a-mask">
                  <rect width="100%" height="100%" fill="white" />
                  {/* p1 parent mask */}
                  <rect
                    className="w-320 h-200 fill-deg2"
                    x="16"
                    y="136"
                    rx="20"
                  />
                  {/* p2 parent mask */}
                  <rect
                    className="w-320 h-200 fill-deg2"
                    x="16"
                    y="956"
                    rx="20"
                  />
                  {/* h parent mask */}
                  <rect
                    className="w-320 h-174 fill-deg2"
                    x="16"
                    y="3672"
                    rx="20"
                  />
                </mask>
              </defs>
              <rect className="h-full w-full fill-deg3" mask="url(#a-mask)" />
            </svg>
            <ProjectsPage />
          </div>

          {/* Page b */}
          <div
            ref={pageBRef}
            id="page-b"
            onClick={() => handlePageClick("b")}
            className={`w-330 h-[2850px] backdrop-blur-sm
          ${activePage === "b" ? firstPageStyle : activePage === "a" ? secondPageStyle : thirdPageStyle}
          ${isAnimatingLayout ? pageTransistion : ""}
        `}
          >
            {activePage !== "b" && (
              <div className="absolute inset-0 z-[100] cursor-pointer rounded-3xl" />
            )}
            <svg
              className={`z-[-1] absolute top-0 bottom-0 right-0 left-0 h-full w-full border-4 rounded-3xl 
            ${activePage === "b" ? "border-deg0 " : "border-deg3"}`}
            >
              <defs>
                <mask id="b-mask">
                  <rect width="100%" height="100%" fill="white" />
                  {/* <rect
                    x="12"
                    y="15"
                    width="552"
                    height="86"
                    rx="43"
                    fill="black"
                  />
                  <rect
                    x="12"
                    y="692"
                    width="552"
                    height="86"
                    rx="44"
                    fill="black"
                  />
                  <rect
                    x="12"
                    y="2424"
                    width="624"
                    height="86"
                    rx="44"
                    fill="black"
                  /> */}
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
            className={`w-330 h-[1600px] pr-20  backdrop-blur-sm
          ${activePage === "c" ? firstPageStyle : activePage === "b" ? secondPageStyle : thirdPageStyle}
          ${isAnimatingLayout ? pageTransistion : ""}
          `}
          >
            {activePage !== "c" && (
              <div className="absolute inset-0 z-[100] cursor-pointer rounded-3xl" />
            )}
            <svg
              className={`z-[-1] absolute top-0 bottom-0 right-0 left-0 h-full w-full border-4 rounded-3xl 
            ${activePage === "c" ? "border-deg0" : "border-deg3"}`}
            >
              <defs>
                <mask id="c-mask">
                  <rect width="100%" height="100%" fill="white" />
                  <rect
                    x="12"
                    y="24"
                    width="516"
                    height="92"
                    rx="45"
                    fill="black"
                  />

                  <svg
                    width="10%"
                    x="1220"
                    height="100%"
                    className="text-deg1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="gray"
                  >
                    <defs>
                      <pattern
                        id="pixel-vine"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                        patternUnits="userSpaceOnUse"
                        patternTransform="scale(6)" /* Adjust this to make the pixels larger or smaller */
                      >
                        <path
                          fill="currentColor"
                          shapeRendering="crispEdges"
                          d="
          M4 0h3v1H4z M11 0h2v1H11z
          M4 1h1v1H4z M7 1h2v1H7z M11 1h3v1H11z
          M2 2h1v1H2z M4 2h1v1H4z M8 2h2v1H8z M11 2h2v1H11z M14 2h1v1H14z
          M2 3h1v1H2z M4 3h2v1H4z M9 3h1v1H9z M12 3h1v1H12z M14 3h1v1H14z
          M2 4h2v1H2z M5 4h3v1H5z M10 4h2v1H10z M13 4h2v1H13z
          M3 5h6v1H3z M11 5h4v1H11z
          M3 6h3v1H3z M7 6h2v1H7z M11 6h2v1H11z M14 6h1v1H14z
          M3 7h2v1H3z M6 7h2v1H6z M11 7h2v1H11z
          M3 8h3v1H3z M10 8h2v1H10z
          M2 9h2v1H2z M5 9h1v1H5z M9 9h2v1H9z M12 9h2v1H12z
          M1 10h2v1H1z M4 10h3v1H4z M10 10h2v1H10z M13 10h2v1H13z
          M1 11h1v1H1z M4 11h2v1H4z M10 11h3v1H10z M14 11h1v1H14z
          M1 12h1v1H1z M4 12h1v1H4z M7 12h3v1H7z M11 12h2v1H11z
          M3 13h2v1H3z M7 13h3v1H7z M11 13h2v1H11z
          M3 14h2v1H3z M11 14h3v1H11z
        "
                        />
                      </pattern>
                    </defs>

                    <rect width="100%" height="100%" fill="url(#pixel-vine)" />
                  </svg>
                </mask>
              </defs>
              <rect className="h-full w-full fill-deg1" mask="url(#c-mask)" />
            </svg>
            <MorePage />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          transform: `scale(${scale})`,
        }}
        onClick={() => !revealedRef.current && setFooterActive(!footerActive)}
        className={`
           z-[101] fixed bottom-4 left-5 h-50 origin-bottom-left rounded-3xl
          backdrop-blur-lg
          transition-all duration-700 ease-in-out 
          ${footerActive ? "text-deg2 w-465" : "w-110 p-2 text-deg0 bg-gradient-to-r from-deg2 to-deg1/20"} 
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
                    x="744"
                    y="32"
                    width="1097"
                    height="128"
                    rx="66"
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
    </>
  );
}
