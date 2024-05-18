import { motion } from "framer-motion";
import React, { useRef } from "react";
import style from "../components/FlyingCar.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FlyingCar = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".car_module1", {
      x: 30,
      y: 30,
      duration: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: ".car_module1",
        start: "top 70%", // change as needed
        end: "bottom center",
      },
    });
    gsap.from(".car_module2", {
      x: -30,
      y: 30,
      duration: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: ".car_module2",
        start: "top 70%", // change as needed
        end: "bottom center",
      },
    });
    gsap.from(".car_module3", {
      x: 30,
      y: -30,
      duration: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: ".car_module3",
        start: "top 60%", // change as needed
        end: "bottom center",
      },
    });
    gsap.from(".car_module4", {
      x: -30,
      y: -30,
      duration: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: ".car_module4",
        start: "top 60%", // change as needed
        end: "bottom center",
      },
    });
  });
  const flyingRef = useRef();
  return (
    <>
      <div className="flying_car w-[95%] h-screen absolute flex justify-center items-center overflow-hidden">
        <div className="inner relative w-full h-full">
          <div className="background absolute z-[2] w-full h-full top-0 left-0">
            <div
              ref={flyingRef}
              className="asolute top-0 left-0 z-[3]  w-full h-screen gap-10 flex flex-wrap py-20"
            >
              <motion.div
                drag
                dragConstraints={flyingRef}
                whileDrag={{ scale: 1.2 }}
                className={`${style.car} car_module1 w-[270px] h-[140px] relative`}
              ></motion.div>
              <motion.div
                drag
                dragConstraints={flyingRef}
                whileDrag={{ scale: 1.2 }}
                className={`${style.car1} car_module2 w-[270px] h-[180px] relative`}
              ></motion.div>
              <motion.div
                drag
                dragConstraints={flyingRef}
                whileDrag={{ scale: 1.2 }}
                className={`${style.car2} car_module3 w-[270px] h-[140px] relative`}
              ></motion.div>
              <motion.div
                drag
                dragConstraints={flyingRef}
                whileDrag={{ scale: 1.2 }}
                className={`${style.car3} car_module4 w-[270px] h-[140px] relative`}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlyingCar;
