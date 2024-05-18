import React, { useEffect, useRef } from "react";
import style from "../components/Main.module.css";
import textImg from "../images/tech.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Technology = () => {
  let page1_textRef = useRef(null);
  let page1_imgRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(page1_textRef.current, {
      opacity: 0,
      duration: 1,
      x: -100,
      scrollTrigger: {
        trigger: page1_textRef.current,
        start: "top center", // change as needed
        end: "bottom center",
      },
    });
    gsap.from(page1_imgRef.current, {
      opacity: 0,
      duration: 2,
      y: -100,
      scrollTrigger: {
        trigger: page1_imgRef.current,
        start: "top center", // change as needed
        end: "bottom center",
      },
    });
  });

  return (
    <>
      <div
        className={`${style.page1} page1 w-full h-screen flex bg-[#09081f7e] justify-evenly items-center gap-10 px-10`}
      >
        <div ref={page1_textRef} className="page1_left w-1/2 opacity-1">
          <h1 className="text-5xl">
            Technologies <br /> in the future
          </h1>
          <p className="mt-5 text-justify pr-8">
            “Revolutionize with Technology.” “Unlocking the Future of Tech.”
            “Where Imagination Meets Innovation.” “Innovate and Elevate.”
          </p>
        </div>
        <div className={`${style.page1_right} h-full flex items-center`}>
          <img ref={page1_imgRef} className="h-[70%]" src={textImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Technology;
