import { useRef, useState, useEffect } from "react";

interface ExpandableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ExpandableImage({
  src,
  alt,
  className,
}: ExpandableImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      imgRef.current?.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onClick={toggleFullscreen}
      title="Click to expand"
      className={`cursor-pointer transition-all duration-300 hover:brightness-90 ${className} ${
        isFullscreen
          ? "!object-contain !border-none !rounded-none !bg-black"
          : ""
      }`}
    />
  );
}
