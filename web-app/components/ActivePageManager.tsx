"use client";

import { VALID_PINS_ARRAY, validPins } from "@/hooks/PinnedPagesContext";
import { useSearchParams, useRouter } from "next/navigation";
import { usePinnedPages } from "@/hooks/PinnedPagesContext";
import CustodyChain from "./pages/projects/CustodyChain";

export function ActivePageManager() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addPin, removePin, pinnedPages } = usePinnedPages();

  const activePage = searchParams.get("active");

  if (!activePage || !VALID_PINS_ARRAY.includes(activePage)) return null;

  const isPagePinned = pinnedPages.includes(activePage);

  function closeModal() {
    if (pinnedPages.length > 0) {
      const pinned = pinnedPages.join(",");
      router.push(`/?pinned=${pinned}`);
    } else {
      router.push("/");
    }
  }

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-101 bg-deg0/80 backdrop-blur-md">
      <div className="relative flex h-full pt-17 justify-center">
        <span
          className={`absolute flex flex-col gap-y-2 top-17 ${isPagePinned ? "right-11" : "right-40"}`}
        >
          {/* close */}
          <svg
            onClick={() => closeModal()}
            width="69"
            height="69"
            viewBox="0 0 69 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="transition-fill duration-300 ease-out hover:fill-deg1!"
              x="2"
              y="2"
              width="65"
              height="65"
              rx="32"
              fill="#F4B4B4"
              stroke="#F48080"
              strokeWidth="4"
            />
            <path
              d="M34.5 36.981L25.1844 47.4144C24.8359 47.8048 24.3923 48 23.8536 48C23.315 48 22.8714 47.8048 22.5228 47.4144C22.1743 47.0241 22 46.5272 22 45.924C22 45.3207 22.1743 44.8238 22.5228 44.4335L31.8384 34L22.5228 23.5665C22.1743 23.1762 22 22.6793 22 22.076C22 21.4728 22.1743 20.9759 22.5228 20.5856C22.8714 20.1952 23.315 20 23.8536 20C24.3923 20 24.8359 20.1952 25.1844 20.5856L34.5 31.019L43.8156 20.5856C44.1641 20.1952 44.6077 20 45.1464 20C45.685 20 46.1286 20.1952 46.4772 20.5856C46.8257 20.9759 47 21.4728 47 22.076C47 22.6793 46.8257 23.1762 46.4772 23.5665L37.1616 34L46.4772 44.4335C46.8257 44.8238 47 45.3207 47 45.924C47 46.5272 46.8257 47.0241 46.4772 47.4144C46.1286 47.8048 45.685 48 45.1464 48C44.6077 48 44.1641 47.8048 43.8156 47.4144L34.5 36.981Z"
              fill="#450000"
            />
          </svg>
          {/* pin */}
          <button
            onClick={() => {
              if (isPagePinned) {
                removePin(activePage as validPins);
              } else {
                addPin(activePage as validPins);
              }
            }}
            className={`transition-bg duration-300 ease-out hover:bg-deg1! flex justify-center gap-x-2 px-4 py-3  border-4 ${isPagePinned ? "bg-deg1 border-deg1" : "bg-deg2 border-deg1"} rounded-full`}
          >
            <svg
              width="28"
              height="36"
              viewBox="0 0 28 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.02258 27.54L0.128325 33.5525L0.542725 35.5191L2.50373 35.0991L6.39613 29.0903C5.55911 28.6474 4.76458 28.1284 4.02258 27.54ZM20.5098 25.4403C20.5357 25.3866 20.5523 25.3274 20.5764 25.2701C20.6744 25.0536 20.7614 24.8372 20.8317 24.6096C20.8428 24.5689 20.8483 24.5282 20.8613 24.4912C20.9335 24.2426 20.994 23.9907 21.0426 23.7364V23.6976C21.4033 21.5349 20.7743 19.1225 19.335 16.9432L21.3885 13.7723C23.7547 14.0739 25.8008 13.4782 26.785 11.9556C28.4925 9.32307 26.415 4.94042 22.1507 2.16357C17.8828 -0.615127 13.0432 -0.731677 11.3393 1.89717C10.3514 3.42157 10.64 5.53612 11.8814 7.58222L9.82418 10.7531C7.25453 10.3221 4.79958 10.7235 2.97363 11.9371C2.96253 11.9408 2.94958 11.9445 2.94218 11.9519C2.72883 12.097 2.52378 12.2538 2.32798 12.4218C2.29653 12.4477 2.25953 12.4718 2.23363 12.4977C2.05602 12.6546 1.88856 12.8227 1.73228 13.0009C1.69528 13.0453 1.64348 13.0841 1.60833 13.1304C1.41129 13.3535 1.23191 13.5917 1.07183 13.8426C-1.48857 17.7887 0.696275 23.7605 5.94288 27.1793C11.1932 30.5981 17.5239 30.1652 20.0787 26.2191C20.2397 25.9694 20.3877 25.7085 20.5098 25.4403ZM19.002 7.01797C17.3611 5.95052 16.56 4.26702 17.2168 3.25137C17.8717 2.23942 19.7346 2.28567 21.3719 3.35312C23.0165 4.42057 23.8102 6.10777 23.1571 7.11972C22.5041 8.13167 20.6448 8.08542 19.002 7.01797Z"
                fill="#450000"
              />
            </svg>
            {isPagePinned && (
              <span className="font-mono font-[700] text-3xl text-deg0">
                pinned
              </span>
            )}
          </button>
        </span>
        {activePage === "p_cc" && <CustodyChain />}
      </div>
    </div>
  );
}
