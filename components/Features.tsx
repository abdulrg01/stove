import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";
import Image from "next/image";

export default function Features() {
  return (
    <main>
      <section className="w-screen grid grid-cols-2 max-md:grid-cols-1 text-white">
        <div className="flex items-center justify-center text-center flex-col py-52 px-10 bg-[#272624]">
          <Heading>About Our Service</Heading>
          <div className="w-16 h-1 bg-[#553C22] my-5" />
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industries standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Paragraph>
        </div>
        <div className="flex items-center justify-center flex-col py-52 px-10 bg-[#1E1D1B]">
          <Heading>Registration Open</Heading>
          <div className="w-16 h-1 bg-[#553C22] my-5" />
          <Paragraph>16 Nov 2017 - 20 Feb 2018</Paragraph>
          <Paragraph>Two months Session</Paragraph>
          <br />
          <br />
          <Button>I WANT TO GO</Button>
        </div>
      </section>

      <section>
        <div className="grid lg:grid-cols-12">
          <div className="max-sm:block hidden w-full">
            <Image
              src="/a6.jpg"
              alt="Service Membership"
              width={100}
              height={100}
              className="w-full h-[350px] rounded-3xl"
            />
          </div>
          <div className="lg:col-span-4 py-52 px-10 bg-[#eee9e5]">
            <Heading>Workshops & Events</Heading>
            <div className="w-16 h-1 bg-[#553C22] my-5" />
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industries standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Paragraph>
            <br />
            <br />
            <Button>BOOK YOUR SEAT</Button>
          </div>
          <div className="lg:col-span-8 bg-center bg-cover bg-no-repeat bg-[url('/a6.jpg')]" />
        </div>
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-8 bg-cover bg-no-repeat bg-center bg-[url('/a5.jpg')]" />
          <div className="max-sm:block hidden w-full">
            <Image
              src="/a5.jpg"
              alt="Service Membership"
              width={100}
              height={100}
              className="w-full h-[350px] rounded-3xl"
            />
          </div>
          <div className="lg:col-span-4 py-52 px-10 bg-[#272624] text-white">
            <Heading>Service Membership</Heading>
            <div className="w-16 h-1 bg-[#553C22] my-5" />
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industries standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Paragraph>
            <br />
            <br />
            <Button>BECOME A MEMBER</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
