"use client";
import React, { useEffect, useState } from "react";
import FramerWrapper from "./FramerWrapper";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[99999999] transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-[#b78563]/70 backdrop-blur-md h-16"
          : "h-24"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <FramerWrapper y={0} x={-100}>
          <h1
            className={`font-bold transition-all duration-300 ease-in-out text-white ${
              isScrolled ? "text-2xl" : "text-3xl"
            }`}
          >
            DIY
          </h1>
        </FramerWrapper>
        <nav className="flex items-center gap-2">
          <div className="md:flex space-x-4 hidden">
            {["Home", "About", "Services", "Contact"].map((item, i) => {
              const timing = 0.55 + i * 0.125;

              return (
                <FramerWrapper key={i} delay={timing} y={50}>
                  <a
                    href="#"
                    className={`transition-all duration-300 ease-in-out ${
                      isScrolled
                        ? "text-gray-50 hover:text-blue-600"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    {item}
                  </a>
                </FramerWrapper>
              );
            })}
          </div>
          <FramerWrapper y={0} x={100} className="relative px-8 py-2 border border-gray-800 rounded-3xl bg-[#b78563] dark:border-gray-50">
            <div
              className="absolute inset-0 transform translate-x-1 translate-y-2 rounded-3xl border border-gray-800 dark:border-gray-50 px-8 py-2"
              style={{ zIndex: "-10" }}
            />
            <a
              href="#"
              className="relative text-gray-50 font-light hover:text-green-500 transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1"
            >
              Contact Us
            </a>
          </FramerWrapper>
        </nav>
      </div>
    </header>
  );
}
