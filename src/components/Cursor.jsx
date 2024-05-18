import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Cursor() {
  const cursorRef = useRef();

  useGSAP(() => {
    window.addEventListener("mousemove", (e) => {
      console.log(e);
      gsap.to(cursorRef.current, {
        x: e.x - 12,
        y: e.y + 30,
        opacity: 1,
      });
    });
  });
  return (
    <div
      ref={cursorRef}
      className={`fixed z-20 cursor h-10 w-10 rounded-full bg-zinc-100 opacity-0 `}
    ></div>
  );
}

export default Cursor;
