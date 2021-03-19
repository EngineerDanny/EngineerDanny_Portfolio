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
          className="text-base px-6 py-3 rounded-full w-36 
          bg-green-500 text-center hover:opacity-50"
        >
          Contact Me
        </a>
      </div>
      <img
        src={profilePic}
        className="w-64 h-64 rounded-full object-cover mr-16 ml-5"
        alt="MyPicture"
      />
    </div>
  );
};

export default IntroHeader;
