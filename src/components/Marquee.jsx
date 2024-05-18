import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Marquee = () => {
  gsap.registerPlugin(ScrollTrigger);
  const myElementRef = useRef(null);
  const logOffsetWidth = () => {
    if (myElementRef.current) {
      console.log(myElementRef.current.offsetWidth);
    }
  };
  useEffect(() => {
    logOffsetWidth();
  }, []);

  function getScrollAmount() {
    let racesWidth = myElementRef.current.scrolWdth;
    return -(racesWidth + window.scrollWidth);
  }
  useEffect(() => {
    gsap.to(myElementRef.current, {
      x: -4900,
      duration: 15,
      ease: "none",
      repeat: Infinity,
      scrollTrigger: {
        trigger: myElementRef.current,
        start: "top 60%",
        end: () => `+=${getScrollAmount() * -1}`,
      },
    });
  });
  return (
    <>
      <div className="marqee w-full py-40 bg-black rounded-2xl overflow-hidden">
        <h1 ref={myElementRef} className="w-full text-9xl text-nowrap">
          "In the neon glow of the future city, dreams dance amidst the circuits
          and skyscrapers."
        </h1>
      </div>
    </>
  );
};

export default Marquee;
