import { useContext, createContext, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const rawPinned = searchParams.get("pinned");
  const rawPages = rawPinned ? rawPinned.split(",") : [];

  // filter pinned pages, keep only valid ones
  const pinnedPages: validPins[] = rawPages.filter((pin): pin is validPins =>
    VALID_PINS_ARRAY.includes(pin),
  );

  const addPin = (pin: validPins) => {
    if (!pinnedPages.includes(pin)) {
      pinnedPages.push(pin);
      const newString = pinnedPages.join(",");
      setSearchParams((prev) => {
        prev.set("pinned", newString);
        return prev;
      });
    } else {
      return;
    }
  };

  const removePin = () => {
    setSearchParams((prev) => {
      prev.delete("pinned");
      return prev;
    });
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
