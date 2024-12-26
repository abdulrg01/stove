import React from "react";

export default function Blobs() {
  return (
    <header
      className="absolute hidden md:block -left-40 -top-40 text-[#b78563]"
      style={{ zIndex: "-20" }}
    >
      <svg
        id="visual"
        viewBox="0 0 900 900"
        width="600"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(423.6017287294153 429.411998482734)">
          <path
            d="M164.8 -274.6C221 -253 278.9 -223.8 345.5 -176.7C412.1 -129.7 487.3 -64.8 476.3 -6.3C465.4 52.2 368.2 104.3 297.9 144.9C227.6 185.5 184.1 214.6 138.9 253C93.8 291.4 46.9 339.2 -6.9 351.1C-60.7 363.1 -121.3 339.2 -194.4 316.8C-267.4 294.5 -352.8 273.7 -394 221.2C-435.1 168.7 -432.1 84.3 -400.9 18C-369.7 -48.3 -310.4 -96.7 -267.6 -146.3C-224.8 -196 -198.4 -246.9 -156.5 -276.8C-114.7 -306.6 -57.3 -315.3 -1.5 -312.7C54.3 -310.1 108.7 -296.2 164.8 -274.6"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    </header>
  );
}
