import React, { useState } from "react";
import sLogo from "../assets/slogo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".nav-logo", {
      x: 100,
      y: 20,
      duration: 1,
      opacity: 0,
    });
    tl.from(".menu", {
      x: -100,
      y: 20,
      duration: 1,
      opacity: 0,
    });
  });
  const [menu, setMenu] = useState(false);
  function menuOnclickHandler() {
    setMenu(!menu);
  }
  return (
    <>
      <div className="fixed z-[12] nav w-full p-5 flex justify-between items-center px-10 bg-[#00000027]">
        <div className="nav-logo h-[40px] opacity-1">
          <img className="h-full" src={sLogo} alt="" />
        </div>
        <div
          onClick={() => menuOnclickHandler()}
          className="menu flex items-center gap-3"
        >
          <h1 className="uppercase text-[11px] font-semibold text-zinc-200">
            menu
          </h1>
          <div className="menu-box h-[30px] w-[30px] border-[1px] rotate-45 flex justify-center items-center cursor-pointer duration-200">
            <div className="dot h-[3px] w-[3px] bg-zinc-100"></div>
          </div>
        </div>
      </div>
      {menu && (
        <div className="fixed z-[11] menu-container w-full h-screen bg-[#000000ee] flex justify-center items-center">
          <div
            onClick={() => {
              setMenu(false);
            }}
            className="menu-items"
          >
            <NavLink
              to={"/"}
              className="font-bold text-zinc-500 hover:text-zinc-200 text-center text-6xl block"
            >
              HOME
            </NavLink>
            <NavLink
              to={"/main"}
              className="font-bold text-zinc-500 hover:text-zinc-200 text-center text-6xl my-6 block"
            >
              MAIN
            </NavLink>
            <NavLink
              to={"https://sumitdubey.netlify.app/"}
              className="font-bold text-zinc-500 hover:text-zinc-200 text-center text-6xl block"
            >
              ABOUT DEV
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
