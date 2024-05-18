import React from "react";
import style from "../components/Main.module.css";
import SvgCityHome from "./SvgCityHome";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
const HeroPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".hero", {
      x: -100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        start: "top center",
        end: "top center",
      },
    });
    gsap.from(".hero-img", {
      y: -100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        start: "top center",
        end: "top center",
      },
    });
  });
  return (
    <>
      <div
        data-sroll
        data-scroll-speed="-0.2"
        className={`${style.hero} w-full h-screen flex justify-center items-center bg-[#10142c] px-20 overflow-hidden`}
      >
        <div className="w-[40%] h-full mt-[20%]">
          <h1 className="text-5xl">
            Smart City <br /> Better Living
          </h1>
          <p className="mt-5 text-justify pr-8 flex">
            Cities are getting smarter, enhanced public safety and healthier
            environments are just a few of the many benefits smart city
            solutions can offer.
          </p>
          <p className="px-6 py-4 border-2 w-[140px] mt-10 cursor-pointer text-sm">
            Scroll ▼
          </p>
        </div>
        <div
          className={`${style.hero_img} hero-img w-[60%]  bg-slate-900 mt-10`}
        >
          <SvgCityHome />
        </div>
      </div>
    </>
  );
};

export default HeroPage;
