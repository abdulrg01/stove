import React from "react";

export default function Paragraph({ children }) {
  return (
    <>
      <p className="leading-7 max-w-lg text-lg">{children}</p>
    </>
  );
}
