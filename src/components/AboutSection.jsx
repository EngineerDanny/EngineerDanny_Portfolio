import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col justify-evenly h-4/6">
      <div className="flex flex-row items-center">
        <div className="w-40 h-0.5  bg-gray-300 opacity-30"></div>
        <h1 className="text-4xl font-medium opacity-80 mx-3">About</h1>
        <div className="w-40 h-0.5 bg-gray-300 opacity-30"></div>
      </div>
      {/* Details */}
      <div className="flex flex-row w-4/5 items-center">
        <p className="max-w-md text-base font-light opacity-80">
          Hi! I'm Daniel, a FullStack engineer based in KNUST, Ghana. I enjoy
          creating things that live on the internet, whether that be websites,
          applications, or anything in between. <br />
          <br />
          My goal is to always build products that provide pixel-perfect,
          performant experiences. Shortly after graduating from Northeastern
          University, I joined the engineering team at Upstatement where I work
          on a wide variety of interesting and meaningful projects on a daily
          basis.
          <br />
          <br /> Here are a few technologies I've been working with recently:
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
