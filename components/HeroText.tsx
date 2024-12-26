import React from "react";
import FramerWrapper from "./FramerWrapper";
import WordRotate from "./WordRotator";

export default function HeroText() {
  return (
    <section className="mt-4 md:mt-32 flex flex-col items-center md:flex-row max-sm:gap-16 space-x-2 px-4 md:px-20 py-10">
      <FramerWrapper y={0} x={-100} className="w-full md:w-1/2 max-sm:pt-10">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-50">
          You can call it{" "}
          <WordRotate
            className="font-thin tracking-wider block"
            words={["Murhu.", "Or", "Stove."]}
          />
        </h1>
        <p className="my-10 font-light max-w-xl text-gray-200">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime unde
          accusamus eos suscipit repellendus mollitia minima modi illo
          voluptatibus earum?
        </p>
        <div className="relative px-8 py-2 border rounded-3xl bg-[#b78563] cursor-pointer inline-block">
          <div
            className="absolute inset-0 transform translate-x-1 translate-y-2 rounded-3xl border px-8 py-2"
            style={{ zIndex: "-10" }}
          ></div>
          <a
            href="#"
            className="relative text-gray-50 font-bold hover:text-green-500 transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1"
          >
            Get Yours
          </a>
        </div>
      </FramerWrapper>

      {/* <!-- Image container --> */}

      <div
        className="hidden md:block w-full md:w-1/2"
        style={{ perspective: "800px" }}
      >
        <FramerWrapper y={0} x={100}>
          <img
            className="rounded-3xl heroImg"
            src="/a1.jpg"
            alt="img-container"
          />
        </FramerWrapper>
      </div>
      <div
        className="max-sm:block hidden w-full md:w-1/2"
        style={{ perspective: "800px" }}
      >
        <FramerWrapper y={0} x={100}>
          <img className="rounded-3xl" src="/a1.jpg" alt="img-container" />
        </FramerWrapper>
      </div>
    </section>
  );
}
