import { useState } from "react";
import ExpandableImage from "./UI/ExpandableImage";

const images: Record<string, string[]> = {
  custody_chain: ["1", "2", "3", "4", "5", "6"],
  peoples_mandate: ["1", "2", "3", "4", "5"],
  figbuild: ["1", "2", "3", "4"],
};

const buttonBaseStyle = `z-10 absolute top-0 bottom-0 w-20 flex items-center justify-center text-deg0 text-5xl
 transition-all duration-300 border-4 border-deg0 hover:bg-deg3`;

export default function Carousel({ projectName }: { projectName: string }) {
  if (!projectName) {
    return;
  }
  const [startIndex, setStartIndex] = useState(0);

  const maxIndex = images[projectName].length - 3;
  const lastIndex = images[projectName].length - 1;
  const nextSlide = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const getWidthClass = (index: number) => {
    if (index < startIndex || index > startIndex + 2) {
      return "w-0 opacity-0";
    }

    if (startIndex === maxIndex) {
      if (index === startIndex) return "w-[11.11%]";
      if (index === startIndex + 1) return "w-[44.44%]";
      if (index === startIndex + 2) return "w-[44.44%]";
    }

    if (index === startIndex) return "w-[44.44%]";
    if (index === startIndex + 1) return "w-[44.44%]";
    if (index === startIndex + 2) return "w-[11.11%]";

    return "w-0";
  };

  //todo : remove gaps between images and arrows, and add inset shadow for terminal images
  // does not work for images < 3
  return (
    <div className="relative flex gap-x-1 w-full h-full overflow-hidden group">
      {images[projectName].map((src, index) => (
        <div
          key={index}
          className={`relative h-full overflow-hidden transition-all duration-500 ease-out 
            ${getWidthClass(index)} 
            ${index === 0 ? "pr-20" : index === lastIndex && "pr-20"}
            `}
        >
          <ExpandableImage
            src={`./${projectName}/${src}.png`}
            alt={`Certificate ${index + 1}`}
            className={`absolute top-0 left-0 h-full w-full object-top object-cover
            border-4 border-deg0 ${index === 0 && "rounded-l-2xl"} ${index === lastIndex && " rounded-r-2xl"}`}
          />
        </div>
      ))}

      <button
        onClick={prevSlide}
        disabled={startIndex === 0}
        className={`${buttonBaseStyle} left-0 rounded-l-2xl ${
          startIndex === 0 ? "hidden" : ""
        }`}
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        disabled={startIndex === maxIndex}
        className={`${buttonBaseStyle} right-0 rounded-r-2xl ${
          startIndex === maxIndex ? "hidden" : ""
        }`}
      >
        &#10095;
      </button>
    </div>
  );
}
