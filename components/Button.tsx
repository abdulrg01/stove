import React from "react";

export default function Button({ children, isLargeBtn }) {
  return (
    <button
      type="button"
      className={`focus:outline-none text-white bg-[#FDB467] hover:bg-[#FDB467] focus:ring-4 focus:ring-[#FDB467] font-bold rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-[#FDB467] ${isLargeBtn && " max-sm:w-[20rem]"}`}
    >
      {children}
    </button>
  );
}
