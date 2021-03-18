import React from "react";
import profilePic from "../assets/my-pic.jpg";
import Typical from "react-typical";

const IntroHeader = () => {
  return (
    <div className="flex flex-row items-center h-full">
      <div className="flex flex-col justify-evenly h-4/6">
        <h1 className="text-md text-green-300">
          <Typical
            steps={["Hello, I am", 1000]}
            loop={Infinity}
            className=""
            wrapper="p"
          />
        </h1>
        <h2 className="text-6xl font-semibold">Daniel Agyapong.</h2>
        <h3 className="text-5xl font-medium opacity-80 -mt-4">
          I build professional cross-platform apps.
        </h3>
        <p className="text-base font-light max-w-lg opacity-80">
          I am a FullStack Developer and Electrical/Electronics Engineer at
          KNUST specialized in building performant mobile, web and desktop apps.
          I love to help open-source community.
        </p>
        <a
          href="mailto:agyapongdaniel7777@gmail.com"
          className="text-base p-2 border-2 border-green-500 rounded-md text-green-500 w-36 text-center"
        >
          Contact Me
        </a>
      </div>
      <img
        src={profilePic}
        className="w-64 h-64 rounded-full object-cover mx-7"
        alt="MyPicture"
      />
    </div>
  );
};

export default IntroHeader;
