import React, { useEffect, useRef, useState } from "react";
import style from "./LandingPage.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
const tl = gsap.timeline();
function LandingPage() {
  useGSAP(() => {
    tl.from(".img-tech", {
      y: -100,
      duration: 0.6,
      opacity: 0,
    });
    tl.from(".text-heading span", {
      y: 50,
      stagger: 0.19,
      opacity: 0,
      duration: 0.6,
    });
    tl.from(".sl-text span", {
      y: 50,
      stagger: -0.05,
      opacity: 0,
      duration: 0.6,
    });
    tl.from(".btn", {
      y: 50,
      duration: 0.6,
      opacity: 0,
    });
  });
  return (
    <>
      <div className={`${style.background} hero w-full overflow-hidden `}>
        <div className="w-[100%] h-[100%] bg-[#00000086] flex items-center justify-center">
          <div className="hero-main h-dvh flex items-center">
            <div className="container">
              <div className="img-tech h-[70px]  flex justify-center">
                <div
                  className={`${style.box} h-full border-[3px] w-[70px] rounded-xl`}
                ></div>
              </div>
              <div className="text">
                <h2 className="text-heading text-6xl font-bold text-white mt-8 uppercase leading-none text-center ">
                  <span>T</span>
                  <span>H</span>
                  <span>E</span>
                  <span> </span>
                  <span>G</span>
                  <span>R</span>
                  <span>E</span>
                  <span>A</span>
                  <span>T</span>
                  <span> </span>
                  <span>I</span>
                  <span>N</span>
                  <span>D</span>
                  <span>I</span>
                  <span>A</span>
                </h2>
                <h2 className="sl-text text-[14px] text-white mt-3 uppercase leading-none text-center">
                  <span>B</span>
                  <span>u</span>
                  <span>i</span>
                  <span>l</span>
                  <span>d</span>
                  <span>i</span>
                  <span>n</span>
                  <span>g</span>
                  <span> </span>
                  <span>i</span>
                  <span>n</span>
                  <span> </span>
                  <span>a</span>
                  <span>n</span>
                  <span>t</span>
                  <span>i</span>
                  <span>c</span>
                  <span>i</span>
                  <span>p</span>
                  <span>a</span>
                  <span>t</span>
                  <span>i</span>
                  <span>o</span>
                  <span>n</span>
                  <span> </span>
                  <span>o</span>
                  <span>f</span>
                  <span> </span>
                  <span>t</span>
                  <span>h</span>
                  <span>e</span>
                  <span> </span>
                  <span>f</span>
                  <span>u</span>
                  <span>t</span>
                  <span>u</span>
                  <span>r</span>
                  <span>e</span>
                  <span>.</span>
                </h2>
              </div>
              <div className="btn text-zinc-100 text-[10px] h-[3vw] font-bold flex justify-center items-center mt-8">
                <button className={`${style.exp_btn} opacity-100 `}>
                  <NavLink
                    className={`${style.exp_btn} px-6 py-4 border-[1px] border-zinc-100 uppercase hover:bg-[#00000065] hover:py-3 hover:px-4`}
                    to={"/main"}
                  >
                    Explore
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
async function breakText() {
  let h1 = document.querySelector(".sl-text");
  let text = h1.textContent;
  console.log(text);
  let splitText = text.split("");
  let clutter = "";
  splitText.forEach((element) => {
    clutter = clutter + `<span>${element}</span>`;
  });
  h1.innerHTML = clutter;
}
// breakText();
