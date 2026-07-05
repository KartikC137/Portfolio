"use client";

import { useState, WheelEvent } from "react";
import {
  usePinnedPages,
  VALID_PINS_ARRAY,
  validPins,
} from "@/hooks/PinnedPagesContext";
import { PIN_DATA } from "@/lib/pagesData";

export default function RecentsMenu() {
  const { addPin, removePin, pinnedPages } = usePinnedPages();

  function calculateGrids(noOfPinned: number, scrollAmount: number) {
    const SCROLL_THRESHOLD_MIN = -50;
    const SCROLL_THRESHOLD_MAX = 50;
    console.log("scroll amount", scrollAmount);
    if (
      (scrollAmount > 0 && scrollAmount <= SCROLL_THRESHOLD_MAX) ||
      (scrollAmount < 0 && scrollAmount >= SCROLL_THRESHOLD_MIN)
    ) {
      return;
    }
    console.log("calculate grid triggered!", scrollAmount);
  }
  function handleWheel(e: WheelEvent<HTMLDivElement>) {
    calculateGrids(10, e.deltaY);
  }

  return (
    <div className="ml-2 h-full">
      <p className="font-sans text-2xl text-deg2">Pinned tabs</p>
      {pinnedPages ? (
        <div
          onWheel={handleWheel}
          className={`h-[925px] overflow-y-scroll mt-2 mr-5 flex grid grid-rows-[2fr_2fr_2fr_0.75fr_0.75fr_0.75fr_0.75fr_0fr_0fr_0fr] gap-y-1
        *:bg-deg1 *:rounded-sm *:border-3 *:border-deg2
        *:px-3 *:py-1 *:text-deg0 *:font-sans
        `}
        >
          {VALID_PINS_ARRAY.map((e) => (
            <div key={e}>
              {/* <span className="text-xl/5 ">
                {PIN_DATA[e as validPins].title}
              </span>
              <br />
              <span>{PIN_DATA[e as validPins].description}</span> */}
            </div>
          ))}
        </div>
      ) : (
        <p className="font-mono font-[600] text-deg1">
          You have no pinned tabs
        </p>
      )}
      {/* <p className="font-sans text-2xl text-deg2">Suggested</p>
      <div
        className="mt-1 *:mx-2 grid grid-rows-[2fr_2fr_0.5fr]
        h-[345px] *:bg-deg1 gap-y-2 *:rounded-sm *:border-3 *:border-deg2
        *:px-3 *:pt-1 *:text-xl/5 *:text-deg0 *:font-sans
        "
      ></div> */}
    </div>
  );
}
