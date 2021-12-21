import React from "react";
import google_play from "../../assets/badges/google-play-48.png";
import apple_logo from "../../assets/badges/apple-logo-100.png";
import "pure-react-carousel/dist/react-carousel.es.css";
import Carousel from "./Carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function ProjectTile({ projectModel, index }) {
  return (
    <div className="container mx-auto">
      <div
        className={` ${
          index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
        } flex flex-wrap items-center pb-12`}
      >
        <div className="lg:w-3/5 md:w-1/2 w-full xl:pr-20 md:pr-6">
          <div
            className={` ${
              index % 2 !== 0 ? "md:pl-24" : "md:px-5"
            }  py-2  text-color`}
          >
            <h1 className="text-5xl md:leading-snug tracking-tighter f-f-l font-black">
              {projectModel.title}
            </h1>
            <h2 className="text-xl py-4 md:py-8 text-gray-400">
              {projectModel.description}
            </h2>

            <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-3 mb-5">
              <a
                href={projectModel.google_play_link}
                className="cursor-pointer w-56 bg-black px-3 py-2 border-white rounded-xl border-solid border-2 transform  transition duration-500 hover:scale-105"
              >
                <div className=" flex items-center">
                  <img
                    alt="Get it on Google Play"
                    src={google_play}
                    className="h-12 mr-1"
                  />
                  <div className=" flex flex-col items-start">
                    <span>GET IT ON</span>
                    <span className=" text-2xl font-bold">Google Play</span>
                  </div>
                </div>
              </a>

              <a
                href={projectModel.apple_appstore_link}
                className={`cursor-pointer w-56 bg-black px-3 py-2 border-white rounded-xl border-solid border-2 transform  transition duration-500 hover:scale-105 ${
                  projectModel.apple_appstore_link == null ? " hidden" : "block"
                } `}
              >
                <div className=" flex items-center">
                  <img
                    alt="Get it on Appstore"
                    src={apple_logo}
                    className="h-12 mr-1 filter-grayscale "
                  />
                  <div className=" flex flex-col items-start">
                    <span>Download on the</span>
                    <span className=" text-2xl font-bold">App Store</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 md:w-1/2 w-full flex items-end justify-center text-white">
          <Carousel images={projectModel.images} />
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
