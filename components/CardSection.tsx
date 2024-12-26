import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Cards from "./Cards";
import Button from "./Button";

export default function CardSection() {
  return (
    <main>
      <section className="bg-[#eee9e5] pb-12">
        <div className="pl-10 flex flex-col items-center justify-center py-14 text-center">
          <Heading>Stove For Sale</Heading>
          <div className="w-16 h-1 bg-[#553C22] my-5" />
          <Paragraph>
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            nullam nunc justo sagittis suscipit ultrices.
          </Paragraph>
        </div>

        <Cards />

        <div className="flex items-center justify-center">
          <Button>More Products</Button>
        </div>
      </section>
    </main>
  );
}
