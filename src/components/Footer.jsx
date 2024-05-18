import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-zinc-900 w-full py-20">
      <div className="heading w-full">
        <h1 className="text-center text-5xl font-bold">
          Residents Saying About Future City
        </h1>
      </div>
      <div className="text w-full flex justify-evenly py-10">
        <p className="w-[30%] text-sm text-justify">
          Living in Future City has been a dream come true. The emphasis on
          green living and smart technology makes everyday life both sustainable
          and convenient.
        </p>
        <p className="w-[30%] text-sm text-justify">
          The community here is incredible. There's always something happening,
          and the city truly feels like a cohesive, welcoming place." - Maria L
        </p>
        <p className="w-[30%] text-sm text-justify">
          "Future City has set the standard for what urban living should be. I'm
          proud to call this place my home." - Kevin R.
        </p>
      </div>
      <div className="copyright">
        <p className="text-center">
          This Website is Designed & Created By @Sumit Dubey
        </p>
      </div>
    </div>
  );
};

export default Footer;
