"use client";

import { useContext, createContext, ReactNode } from "react";
import { useSearchParams, useRouter } from "next/navigation";

//todo: change the name to valid pages, put it in a lib
export const VALID_PINS_ARRAY = [
  "p_cc",
  "p_pm",
  "p_mfp",
  "p_lfs",
  "p_rp",
  "c_fel",
  "c_gcs",
  "c_at",
  "osc_a",
  "lu",
];
export type validPins =
  | "p_cc"
  | "p_pm"
  | "p_mfp"
  | "p_lfs"
  | "p_rp"
  | "c_fel"
  | "c_gcs"
  | "c_at"
  | "osc_a"
  | "lu";

interface PinnedPagesContextType {
  pinnedPages: string[];
  addPin: (pin: validPins) => void;
  removePin: (pin: validPins) => void;
}

const PinnedPagesContext = createContext<PinnedPagesContextType | null>(null);

export function PinnedPagesProvider({ children }: { children: ReactNode }) {
  const searchParam = useSearchParams();
  const rawPinned = searchParam.get("pinned");
  const rawActive = searchParam.get("active");
  const rawPages = rawPinned ? rawPinned.split(",") : [];

  const router = useRouter();

  // filter pinned pages, keep only valid ones
  const pinnedPages: validPins[] = rawPages.filter((pin): pin is validPins =>
    VALID_PINS_ARRAY.includes(pin),
  );

  const addPin = (pin: validPins) => {
    if (!pinnedPages.includes(pin)) {
      pinnedPages.push(pin);
      const newString = pinnedPages.join(",");
      router.push(
        `/?pinned=${newString}${rawActive && `&active=${rawActive}`}`,
      );
    } else {
      return;
    }
  };

  const removePin = (pin: validPins) => {
    const updatedPages = pinnedPages.filter((e) => e !== pin);
    if (updatedPages.length > 0 || rawActive) {
      if (rawActive && updatedPages.length === 0) {
        router.push(`/?active=${rawActive}`);
      } else {
        const newString = updatedPages.join(",");
        router.push(
          `/?pinned=${newString}${rawActive && `&active=${rawActive}`}`,
        );
      }
    } else {
      router.push("/");
    }
  };

  return (
    <PinnedPagesContext.Provider value={{ pinnedPages, addPin, removePin }}>
      {children}
    </PinnedPagesContext.Provider>
  );
}

export function usePinnedPages() {
  const context = useContext(PinnedPagesContext);
  if (!context) {
    throw new Error(
      "usePinnedPages must be used within an PinnedPagesProvider",
    );
  }
  return context;
}
