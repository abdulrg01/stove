import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <section className="relative text-white">
        <div className="w-screen min-h-screen bg-center bg-cover bg-no-repeat bg-[url('/a1.jpg')]" />
        <div className="absolute z-10 top-48 md:left-48 left-5 max-sm:right-5 py-20 px-10 bg-[#2E2A27] md:px-20">
          <Heading>From Our Client</Heading>
          <div className="w-16 h-1 bg-[#553C22] my-5" />
          <div className="w-24 h-24 mb-5 flex items-center justify-center">
            <Image src="/a4.jpg" alt="admin" width={50} height={50} className="w-full h-full rounded-full" />
          </div>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industries standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Paragraph>
          <h3 className="mt-5">- Rakib Hasan</h3>
        </div>
      </section>

      <section className="w-full px-5 pt-10 bg-[#1E1D1B] text-white">
        <div className="flex items-center justify-center flex-col text-center py-52 px-10 bg-[#1E1D1B]">
          <Heading>Subscribe to Our Newsletter</Heading>
          <div className="w-16 h-1 bg-[#553C22] my-5" />
          <p className="max-w-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industries standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="gap-4 w-full flex items-center justify-center max-sm:flex-col pt-10">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:max-w-md w-full max-sm:w-[20rem] ps-4 font-medium p-2.5 mb-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
            <Button isLargeBtn={true}>SUBSCRIBE</Button>
          </div>
        </div>
      </section>
      <div className="bg-[#333333] w-full py-8 flex items-center justify-center">
        <Paragraph>
          <span className="text-[#A86128] underline">Contact{" "} </span> Auwal rg
          with{" "}
          <span className="text-[#A86128] underline"> 07066181896.</span>
        </Paragraph>
      </div>
    </footer>
  );
}
