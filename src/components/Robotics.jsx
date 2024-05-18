import React, { useRef, useState } from "react";
import robot from "../videos/robot.mp4";
import robotev from "../videos/robotev.mp4";
import robotev1 from "../videos/robotev1.mp4";
import style from "./Main.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Robotics = () => {
  const [videoC, setVideoC] = useState(0);

  const videoObj = [
    {
      title: "The Evolution of Advance Robotics",
      text: `There has been a significant advancement in autonomous and
      industrial mobile robotics`,
      video: robot,
    },
    {
      title: "Robot Delivering Foods",
      text: `Trust the robots – they've got your delivery covered!`,
      video: robotev,
    },
    {
      title: "INDIA PRIME MINISTER VISIT",
      text: `India Prime Minister visiting and exploring the new evolution of robots.`,
      video: robotev1,
    },
  ];

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
  return (
    <>
      <div
        className={`${style.page3} relative w-full h-screen flex justify-center items-center overflow-hidden`}
      >
        <div
          className={`${style.page3_inner} w-full h-full flex p-20 gap-20 bg-[#03030faf]`}
        >
          <div ref={textRef} className="page3_left_text w-[40%] mt-10">
            <h1 className="text-5xl uppercase font-bold">
              {videoObj[videoC].title}
            </h1>
            <p className="mt-5">{videoObj[videoC].text}</p>
            <div className="btn h-[40px] w-[150px">
              <button
                onClick={() => {
                  setVideoC(videoC + 1);
                  if (videoC >= 2) {
                    setVideoC(0);
                  }
                }}
                className="border-[1px] px-5 py-4 hover:px-4 hover:py-3 transition-[2000ms] mt-5"
              >
                Explore More
              </button>
            </div>
          </div>
          <div className="page3_right_img w-[60%] mt-10">
            <video
              ref={videoRef}
              src={videoObj[videoC].video}
              autoPlay={true}
              controls
            ></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Robotics;
