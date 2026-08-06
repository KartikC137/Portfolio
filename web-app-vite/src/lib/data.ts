// styles

import type { SpeedsObject } from "./types";

export const firstPageStyle =
  "z-101 absolute top-70 right-30 shadow-xl shadow-deg0/80";
export const secondPageStyle =
  "z-98 absolute top-40 right-110 blur-[4px]! grayscale-40!";
export const thirdPageStyle =
  "z-95 absolute top-10 right-10 blur-[4px]! grayscale-40!";
export const pageTransistion =
  "transition-[transform,top,right,box-shadow,opacity] duration-[600ms] ease-in-out";

// pages

export const pages = ["a", "b", "c"];
export const scrollDistances: Record<string, SpeedsObject> = {
  a: { a: -420, b: 1250, c: 2620 },
  b: { a: -180, b: 1140, c: 2506 },
  c: { a: -300, b: 1370, c: 2386 },
};

export const sectionsConfig = {
  projects: { page: "a", offset: 0 },
  opensource: { page: "a", offset: 3500 },
  hackathons: { page: "a", offset: 4400 },
  skills: { page: "b", offset: 0 },
  certifications: { page: "b", offset: 1400 },
  education: { page: "b", offset: 4400 },
  "more about me": { page: "c", offset: 0 },
} as const;
