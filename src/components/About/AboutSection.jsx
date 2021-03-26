import React from "react";
import LazyLoadImage from "react-lazy-load-image-component";
import { motion } from "framer-motion";

import express from "../../assets/techs/express.png";
import mongo from "../../assets/techs/mongo.png";
import node from "../../assets/techs/node.png";
import react from "../../assets/techs/react.svg";
import android from "../../assets/techs/android.svg";
import flutter from "../../assets/techs/flutter.svg";
import firebase from "../../assets/techs/firebase.png";
import gcloud from "../../assets/techs/gcloud.png";
import iOS from "../../assets/techs/iOS.png";
import next from "../../assets/techs/next.svg";

import TechTile from "./TechTile";

const AboutSection = () => {
  const techImages = [
    flutter,
    react,
    next,
    android,
    iOS,
    firebase,
    gcloud,
    node,
    mongo,
    express,
  ];

  return (
    <section className="min-h-screen">
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col h-4/6 items-center justify-start"
      >
        <div className="flex flex-row items-center my-10">
          <div className="w-40 h-0.5 bg-gray-300 opacity-30"></div>
          <h1 className="text-4xl font-medium opacity-80 mx-3">About</h1>
          <div className="w-40 h-0.5 bg-gray-300 opacity-30"></div>
        </div>
        {/* Details */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-base font-light opacity-80 ">
            Hi! I'm Daniel, a FullStack engineer based in KNUST, Ghana. I enjoy
            creating things that live on the internet, whether that be websites,
            applications, or anything in between. <br />
            <br />
            My goal is to always build products that provide pixel-perfect,
            performant experiences. Shortly after graduating from Northeastern
            University, I joined the engineering team at Upstatement where I
            work on a wide variety of interesting and meaningful projects on a
            daily basis. <br />
            <br />
          </p>
          <tbody className="align-middle table-row-group w-full">
            <p className="font-bold text-xl opacity-80 my-8">
              These are the programming languages I am familiar with :
            </p>
            <TechTile title="Assembly Language" percentage="70%" />
            <TechTile title="MATLAB" percentage="80%" />
            <TechTile title="C" percentage="85%" />
            <TechTile title="Java" percentage="90%" />
            <TechTile title="Dart" percentage="98%" />
            <TechTile title="JS/TS" percentage="98%" />
            <TechTile title="Swift/ObjC" percentage="60%" />
            <TechTile title="Python" percentage="80%" />
          </tbody>

          <p className="self-start text-xl font-bold opacity-80 my-8">
            These are the frameworks I am familiar with :
          </p>

          <div className="grid grid-cols-5 gap-7 mb-16">
            {techImages.map((tech, index) => (
              <div
                key={index}
                className={`h-40 w-40 bg-white shadow-2xl rounded-full flex justify-center items-center ${
                  index % 2 !== 0 ? "" : "animate-pulse"
                }`}
              >
                <img src={tech} className="h-24 w-24 object-fill" alt="" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
