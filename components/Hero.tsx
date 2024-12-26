import React, { useEffect, useState } from "react";
import Image from "next/image";
import Blobs from "./Blobs";
import Nav from "./Nav";
import HeroText from "./HeroText";
import Scroller from "./Scroller";

export default function Hero() {
  return (
    <main className="relative antialiased bg-[#22211c] z-0 overflow-hidden">
      <Blobs />
      <Nav />
      <HeroText />

      <Scroller />
    </main>
  );
}
