import React, { useEffect, useRef, useState } from "react";
import style from "./Main.module.css";
import video1 from "../videos/video1.mp4";
import FlyingCar from "./FlyingCar";
import Marquee from "./Marquee";
import HeroPage from "./HeroPage";
import Technology from "./Technology";
import Robotics from "./Robotics";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Slider from "./Slider";
import Footer from "./Footer";

const Main = () => {
  let textRef = useRef(null);
  let videoRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(textRef.current, {
      x: -10,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 70%",
        bottom: "bottom center",
      },
    });
    gsap.from(videoRef.current, {
      x: -10,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top center",
        bottom: "bottom center",
      },
    });
  });

  // gsap.to(".drone", {
  //     duration:7,
  //     x:0,
  //     y:300,
  //     ease:"power2",
  //     repeat:-1,
  //     repeatDelay:4,
  //     yoyo:true
  // })
  const [isVideo, setIsVideo] = useState(false);

  return (
    <>
      <div
        data-scroll-container
        className={`${style.main_page} w-full bg-zinc-900 text-zinc-300`}
      >
        <HeroPage />
        <Marquee />
        <Technology />
        <Slider />
        <div
          data-scroll
          data-scroll-speed="-.3"
          className={`${style.page2} w-full h-screen overflow-x-hidden`}
        >
          <div className="page2_inner w-full h-full bg-[#0605168e] flex items-center justify-evenly px-20 gap-10">
            <div className="page2_left relative w-[70%] flex justify-evenly items-center ">
              {isVideo ? (
                <div className="flying_car_video absolute w-[95%] h-screen  flex justify-center items-center">
                  <video
                    ref={videoRef}
                    className="opacity-1"
                    src={video1}
                    autoPlay={true}
                    loop
                    controls
                  ></video>
                </div>
              ) : (
                <FlyingCar />
              )}
            </div>
            <div
              ref={textRef}
              className="page2_right w-[30%] opacity-1 overflowX-hidden"
            >
              <h1 className="text-4xl font-bold uppercase">Flying Car</h1>
              <p className="text-justify mt-6 text-zinc-50 font-bold">
                A flying car or roadable aircraft is a type of vehicle which can
                function both as a road vehicle and as an aircraft.
              </p>
              <div className="btn flex justify-start h-[70px] w-full mt-10">
                <button
                  onClick={() => {
                    setIsVideo(!isVideo);
                  }}
                  className={`${style.exp_btn} fontt-bold opacity-100 h-[60px] px-6 py-4 border-[1px] border-zinc-100 uppercase hover:bg-[#00000065] hover:py-3 hover:px-4`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <Robotics />
        <Footer />
      </div>
    </>
  );
};

export default Main;
