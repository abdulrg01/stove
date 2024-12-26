import React from "react";

export default function Scroller() {
  return (
    <section className="bodies py-10 text-white">
      <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
          <li>Kano</li>
          <li>Maidugri</li>
          <li>Bauci</li>
          <li>Niger</li>
          <li>Abuja</li>
          <li>Funtua</li>
          <li>Kaduna</li>
        </ul>
      </div>

      <div className="scroller" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
          <img
            src="https://i.pravatar.cc/150?img=1"
            alt=""
            className="rounded-full"
          />
          <img
            src="https://i.pravatar.cc/150?img=2"
            alt=""
            className="rounded-full"
          />
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt=""
            className="rounded-full"
          />
          <img
            src="https://i.pravatar.cc/150?img=4"
            alt=""
            className="rounded-full"
          />
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt=""
            className="rounded-full"
          />
          <img
            src="https://i.pravatar.cc/150?img=6"
            alt=""
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
