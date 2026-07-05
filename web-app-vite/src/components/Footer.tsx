import { useEffect, useRef } from "react";

export default function Footer({ isActive }: { isActive: boolean }) {
  const nameRef = useRef<HTMLParagraphElement | null>(null);
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;

    const sizeChangeTimeout = setTimeout(
      () => {
        requestAnimationFrame(() => {
          el.style.fontSize = isActive ? "40px" : "84px";
          el.style.lineHeight = isActive ? "40px" : "64px";
        });
      },
      isActive ? 50 : 200,
    );

    return () => {
      clearTimeout(sizeChangeTimeout);
    };
  }, [isActive]);

  return (
    <>
      <p
        ref={nameRef}
        className={`font-bold  ${isActive ? "font-sans" : "font-mono italic"} `}
      >
        Kartik Kumbhar
      </p>
      <p className="top-0 right-4 text-xl font-mono font-[600]">
        Pune, India 411046
      </p>
      {/* quick contact info */}
      {/* <p className="flex items-center text-xl font-mono font-[600] border-b-2">
        <span className="mr-2">kartikininterstice@gmail.com</span>
        <svg
          width="17"
          height="20"
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 16C5.45 16 4.97917 15.8042 4.5875 15.4125C4.19583 15.0208 4 14.55 4 14V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H15C15.55 0 16.0208 0.195833 16.4125 0.5875C16.8042 0.979167 17 1.45 17 2V14C17 14.55 16.8042 15.0208 16.4125 15.4125C16.0208 15.8042 15.55 16 15 16H6ZM6 14H15V2H6V14ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4H2V18H13V20H2Z"
            className="fill-white"
          />
        </svg>
      </p> */}
      {/* The elevator pitch */}
      {/* <p className="py-2 text-xl font-mono font-[600] text-deg3">
        A fullstack blockchain dev. and a graduating computer engineering
        student. Experienced in writing smart contracts in solidity, Building
        relational DB, Designing UI/UX via personal projects.
      </p> */}
    </>
  );
}
