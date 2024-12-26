import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import FramerWrapper from "./FramerWrapper";

export default function Cards() {
  const cardItems = [
    { img: "/a2.jpg", title: "Product Name", price: "48" },
    { img: "/a3.jpg", title: "Product Name", price: "48" },
    { img: "/a5.jpg", title: "Product Name", price: "48" },
  ];

  return (
    <section className="w-screen md:grid md:grid-cols-3 gap-5 grid-cols-1 px-5 md:px-24 pb-16">
      {cardItems.map((item, i) => {
        const timing = 0.55 + i * 0.125;
        return (
          <FramerWrapper key={i} delay={timing} y={50}>
            <Image
              src={item.img}
              alt={item.title}
              width={100}
              height={100}
              className="w-full h-[350px] rounded-3xl"
            />
            <div className="py-8 pl-7">
              <Heading>{item.title}</Heading>
              <Paragraph>$ {item.price}</Paragraph>
            </div>
          </FramerWrapper>
        );
      })}
    </section>
  );
}
