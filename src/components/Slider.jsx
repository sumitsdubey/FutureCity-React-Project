import React, { useEffect, useRef, useState } from "react";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Slider() {
  const imgObj = [
    {
      src: c1,
      alt: "slider Image 1",
      title: "Amazing Skyscraper",
      text: "By night the skyscraper looms in the smoke and the stars and has a soul.",
    },
    {
      src: c2,
      alt: "slider Image 2",
      title: "Green City; Clean City",
      text: "Clean surroundings. Healthy life. Keep your city clean and green.",
    },
    {
      src: c3,
      alt: "slider Image 3",
      title: "renewable energy buildings",
      text: "Green buildings are built from sustainable building materials that are renewable, recyclable, and reusable.",
    },
  ];

  let sliderRef = useRef(null);
  let textRef = useRef(null);

  const [image, setImage] = useState(2);

  function sliderChange() {
    setImage(image + 1);
    if (image >= 2) {
      setImage(0);
    }
  }

  setTimeout(() => {
    sliderChange();
  }, 4000);

  useGSAP(() => {
    gsap.from(sliderRef.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top 60%",
        end: "top 50%",
      },
    });
  });
  useGSAP(() => {
    gsap.from(textRef.current, {
      opacity: 1,
      duration: 1,
      x: -30,
      y: 100,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        end: "top 50%",
      },
    });
  });

  return (
    <>
      <div
        ref={sliderRef}
        className="slider relative w-full h-screen flex justify-center items-center overflow-hidden opacity-100"
      >
        <img
          className="w-full"
          src={imgObj[image].src}
          alt={imgObj[image].alt}
        />
        <div className="overlay w-full h-screen bg-[#04050e84] absolute z-10 flex items-end">
          <div ref={textRef} className="title pb-20 w-full opacity-100">
            <h1 className="text-6xl font-bold text-zinc-100 text-center">
              {imgObj[image].title}
            </h1>
            <p className="text-center font-bold mt-10 text-zinc-100">
              {imgObj[image].text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
