import React from "react";
import LazyLoadImage from "react-lazy-load-image-component";
import express from "../assets/techs/express.png";
import mongo from "../assets/techs/mongo.png";
import node from "../assets/techs/node.png";
import react from "../assets/techs/react.svg";

const AboutSection = () => {
  const techImages = [express, mongo, node, react];

  return (
    <div className="flex flex-col justify-start items-center h-4/6">
      <div className="flex flex-row items-center my-10">
        <div className="w-40 h-0.5  bg-gray-300 opacity-30"></div>
        <h1 className="text-4xl font-medium opacity-80 mx-3">About</h1>
        <div className="w-40 h-0.5 bg-gray-300 opacity-30"></div>
      </div>
      {/* Details */}
      <div className="flex flex-col max-w-4xl items-center">
        <p className="text-base font-light opacity-80 mb-12">
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

        <div className="flex justify-center">
          {techImages.map((tech, index) => (
            <span
              key={index}
              className={` h-40 w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${
                index % 2 !== 0 ? "animate-bounce" : "animate-bounceFirst"
              }`}
            >
              <img src={tech} alt="" />
            </span>
          ))}
        </div>
        <tbody className="align-middle table-row-group w-full">
          <tr className="flex flex-row content-center m-3 justify-between">
            <td className="">Developer, back-end</td>
            <td className=" w-9/12 flex rounded-md bg-white">
              <div className="rounded-l-md w-2/5 bg-green-500"></div>
            </td>
            <td>
              <span>55.2%</span>
            </td>
          </tr>
          <tr className="flex flex-row content-center m-3 justify-between">
            <td className=" max-h-1 overflow-clip">
              Developer, backbackbackbackbackbackback-end
            </td>
            <td className=" h-5 w-9/12 flex rounded-md bg-white">
              <div className="rounded-l-md w-2/5 bg-green-500"></div>
            </td>
            <td>
              <span>55.2%</span>
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  );
};

export default AboutSection;
