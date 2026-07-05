import { useEffect, useState } from "react";

export default function ScrollStatus() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      const totalScrollable = docHeight - winHeight;

      if (totalScrollable > 0) {
        const progress = Math.min(Math.max(scrollTop / totalScrollable, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="z-999 fixed top-35 bottom-4 left-5 w-[50px] overflow-hidden border-2 border-deg2/30 rounded-full">
      <div
        className="w-full h-full bg-deg1/30 origin-top"
        style={{
          transform: `scaleY(${scrollProgress})`,
        }}
      />
    </div>
  );
}

// <svg
//   className="abstract"
//   width="324"
//   height="1200"
//   viewBox="0 0 324 1000"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <defs>
//     <clipPath id="mc">
//       <use href="#m" />
//     </clipPath>
//     <clipPath id="lc">
//       <use href="#l" />
//     </clipPath>
//     <clipPath id="rc">
//       <use href="#r" />
//     </clipPath>
//     <clipPath id="plc">
//       <use href="#pl" />
//     </clipPath>
//     <clipPath id="prc">
//       <use href="#pr" />
//     </clipPath>
//     <clipPath id="cc">
//       <circle cx="162" cy="190" r="90" />
//     </clipPath>
//     <clipPath id="tlc">
//       <use href="#tl" />
//     </clipPath>
//     <clipPath id="trc">
//       <use href="#tr" />
//     </clipPath>
//   </defs>

//   {/* middle element */}
//   <path
//     id="m"
//     d="M162 4C209.384 4 248 43.6144 248 92.7354C248 118.178 237.687 344.859 221.15 565.274C212.883 675.462 203.069 783.975 192.224 864.911C186.798 905.402 181.131 938.862 175.301 962.146C172.378 973.818 169.465 982.724 166.611 988.635C165.179 991.602 163.863 993.596 162.73 994.792C161.585 996.001 161.018 996 161 996C160.983 996 160.419 996.002 159.278 994.795C158.15 993.6 156.84 991.608 155.415 988.642C152.576 982.732 149.683 973.826 146.787 962.153C141.011 938.87 135.422 905.41 130.09 864.92C119.432 783.984 109.867 675.472 101.85 565.284C85.813 344.873 76 118.184 76 92.7354C76.0002 43.6144 114.616 4 162 4Z"
//     stroke="#F48080"
//     strokeOpacity={0.2}
//     strokeWidth={8}
//   />
//   <path
//     d="M162 0 L162 1000"
//     clipPath="url(#mc)"
//     stroke="#f4b4b4"
//     strokeOpacity="60%"
//     strokeWidth={300}
//     pathLength={100}
//     strokeDasharray={100}
//     strokeDashoffset={currentOffset}
//     style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
//   />

//   {/* left element */}
//   <path
//     id="l"
//     d="M88 284C112.493 284 122.042 289.67 126.198 296.686C128.389 300.383 129.404 304.938 129.813 310.416C130.228 315.965 130 321.884 130 328.5C130 341.068 123.073 456.01 109.917 567.886C103.341 623.809 95.2271 678.793 85.6836 719.74C80.9045 740.246 75.8139 757.019 70.4697 768.586C67.7915 774.383 65.1508 778.646 62.6172 781.402C60.071 784.172 58.0382 785 56.5 785C54.7702 785 52.7867 784.211 50.4922 781.934C48.167 779.626 45.7811 776.028 43.4092 771.071C38.6715 761.171 34.4061 746.753 30.6133 729.029C23.0424 693.65 17.5501 646.073 13.5977 597.528C5.6964 500.484 4 400.22 4 387.5C4 381.845 6.17932 372.478 10.4902 361.344C14.7572 350.323 20.9655 337.948 28.6885 326.366C36.4215 314.77 45.583 304.105 55.708 296.375C65.8291 288.648 76.7098 284 88 284Z"
//     stroke="#F48080"
//     stroke-opacity="0.2"
//     stroke-width="8"
//     style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
//   />
//   <path
//     d="M88 280 L88 790"
//     clipPath="url(#lc)"
//     stroke="#F48080"
//     strokeOpacity="60%"
//     strokeWidth={300}
//     pathLength={100}
//     strokeDasharray={100}
//     strokeDashoffset={currentOffset}
//     style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
//   />
//   {/* right element */}
//   <path
//     id="r"
//     d="M236.041 284C223.942 284 215.498 285.692 209.579 288.435C203.776 291.124 200.253 294.886 198.013 299.457C195.711 304.154 194.668 309.9 194.252 316.638C193.833 323.418 194.062 330.689 194.062 338.601C194.063 353.878 200.993 492.825 214.145 628.016C220.719 695.601 228.836 762.1 238.391 811.656C243.174 836.465 248.283 856.837 253.67 870.934C256.372 878.004 259.056 883.256 261.652 886.67C264.323 890.182 266.308 891 267.526 891C268.959 891 270.878 890.207 273.275 887.331C275.663 884.467 278.096 880.019 280.498 873.952C285.287 861.854 289.573 844.31 293.371 822.854C300.956 780.012 306.452 722.448 310.403 663.777C318.304 546.474 320 425.287 320 409.887C320 402.77 317.755 391.251 313.434 377.759C309.141 364.357 302.904 349.329 295.149 335.272C287.381 321.19 278.182 308.251 268.031 298.883C257.863 289.499 247.081 284 236.041 284Z"
//     stroke="#F48080"
//     stroke-opacity="0.2"
//     stroke-width="8"
//   />
//   <path
//     d="M257 280 L257 895"
//     clipPath="url(#rc)"
//     stroke="#ffd5d5"
//     strokeOpacity="60%"
//     strokeWidth={300}
//     pathLength={100}
//     strokeDasharray={100}
//     strokeDashoffset={currentOffset}
//     style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
//   />
//   {/* petals */}
//   <path
//     id="pl"
//     d="M159.319 207.296C135.343 205.66 100.584 194.245 70.8301 177.408C54.7867 168.33 40.4476 157.81 30.1719 146.65C19.8509 135.441 14 124.001 14 113C14 66.4525 50.9803 28.5442 97.1641 27.0479L159.319 207.296Z"
//     stroke="#F48080"
//     stroke-opacity="0.2"
//     stroke-width="8"
//   />
//   <path
//     d="M128 117 L27 152"
//     clipPath="url(#plc)"
//     stroke="#450000"
//     strokeOpacity="60%"
//     strokeWidth={250}
//     pathLength={100}
//     strokeDasharray={100}
//     strokeDashoffset={currentOffset}
//     style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
//   />
//   <path
//     id="pr"
//     d="M167.681 207.296C191.657 205.66 226.416 194.245 256.17 177.408C272.213 168.33 286.552 157.81 296.828 146.65C307.149 135.441 313 124.001 313 113C313 66.4525 276.02 28.5442 229.836 27.0479L167.681 207.296Z"
//     stroke="#F48080"
//     stroke-opacity="0.2"
//     stroke-width="8"
//   />
//   <path
//     d="M199 117 L313 156"
//     clipPath="url(#prc)"
//     stroke="#450000"
//     strokeOpacity="60%"
//     strokeWidth={250}
//     pathLength={100}
//     strokeDasharray={100}
//     strokeDashoffset={currentOffset}
//     style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
//   />
//   {/* center circle */}
//   <circle
//     id="c"
//     cx="162"
//     cy="190"
//     r="86"
//     stroke="#F48080"
//     stroke-opacity="0.2"
//     stroke-width="8"
//   />
//   <circle
//     cx="162"
//     cy="190"
//     r={90 * scrollProgress}
//     fill="#450000"
//     opacity="60%"
//     clipPath="url(#cc)"
//     style={{ transition: "r 0.1s ease-out" }}
//   />
//   {/* tentacles */}
//   <path
//     id="tl"
//     d="M100 180C147.496 180 186 218.504 186 266C186 268.413 185.414 270.156 184.506 271.492C183.579 272.856 182.134 274.061 180.016 275.076C175.645 277.171 169.088 278.144 160.801 278.33C152.613 278.514 143.271 277.929 133.586 277.261C123.977 276.597 114.03 275.851 104.913 275.765C95.8455 275.679 87.2084 276.236 80.2832 278.357C73.3021 280.496 67.3743 284.468 65.1094 291.608C62.9366 298.459 64.5338 307.103 69.5283 317.692C74.5764 328.396 83.4236 341.777 96.8838 358.508C110.231 375.099 118.728 386.78 123.446 394.452C124.641 396.395 125.556 398.023 126.237 399.365C124.729 398.481 122.935 397.304 120.877 395.827C114.741 391.425 106.74 384.742 97.8291 376.567C80.0197 360.229 58.8877 338.216 42.2422 317.248C33.9161 306.76 26.7798 296.617 21.7451 287.637C16.6273 278.508 14 271.127 14 266C14 218.504 52.5035 180 100 180Z"
//     stroke="#F48080"
//     stroke-opacity="0.2"
//     stroke-width="8"
//   />
//   <g clipPath="url(#tlc)">
//     <rect
//       x="-50"
//       y={rectCurrentOffset}
//       width="400"
//       height="500"
//       fill="#000000"
//       fillOpacity="20%"
//       transform="rotate(25 227 290)"
//       style={{ transition: "y 0.1s ease-out" }}
//     />
//   </g>
//   <path
//     id="tr"
//     d="M227 181C179.504 181 141 219.504 141 267C141 269.413 141.586 271.156 142.494 272.492C143.421 273.856 144.866 275.061 146.984 276.076C151.355 278.171 157.912 279.144 166.199 279.33C174.387 279.514 183.729 278.929 193.414 278.261C203.023 277.597 212.97 276.851 222.087 276.765C231.155 276.679 239.792 277.236 246.717 279.357C253.698 281.496 259.626 285.468 261.891 292.608C264.063 299.459 262.466 308.103 257.472 318.692C252.424 329.396 243.576 342.777 230.116 359.508C216.769 376.099 208.272 387.78 203.554 395.452C202.359 397.395 201.444 399.023 200.763 400.365C202.271 399.481 204.065 398.304 206.123 396.827C212.259 392.425 220.26 385.742 229.171 377.567C246.98 361.229 268.112 339.216 284.758 318.248C293.084 307.76 300.22 297.617 305.255 288.637C310.373 279.508 313 272.127 313 267C313 219.504 274.496 181 227 181Z"
//     stroke="#F48080"
//     stroke-opacity="0.2"
//     stroke-width="8"
//   />
//   <g clipPath="url(#trc)">
//     <rect
//       x="-50"
//       y={rectCurrentOffset}
//       width="400"
//       height="500"
//       fill="#000000"
//       fillOpacity="20%"
//       transform="rotate(-25 100 290)"
//       style={{ transition: "y 0.1s ease-out" }}
//     />
//   </g>
// </svg>
