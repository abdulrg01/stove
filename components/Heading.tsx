import React from "react";

export default function Heading({ children }) {
  return (
    <>
      <h2 className="scroll-m-20 pb-2 text-4xl font-medium tracking-tight first:mt-0">
        {children}
      </h2>
    </>
  );
}
