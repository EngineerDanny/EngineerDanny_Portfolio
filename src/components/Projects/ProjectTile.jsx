import React from "react";
import google_play from "../../assets/badges/google-play-badge.png";
import appstore_badge from "../../assets/badges/appstore-badge.png";
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
            <div className="h-28 md:w-4/6  flex flex-row object-center items-center content-start">
              <div className=" md:h-20 sm:h-28  w-5/6 sm:w-4/6 transform  transition duration-500 hover:scale-105 ">
                <a href={projectModel.google_play_link}>
                  <img
                    alt="Get it on Google Play"
                    src={google_play}
                    className="h-20  "
                  />
                </a>
              </div>
              <div className="h-14 w-full transform  transition duration-500 hover:scale-105">
                <a href={projectModel.apple_appstore_link}>
                  <img
                    alt="Get it on Apple Appstore"
                    src={appstore_badge}
                    className="h-full"
                  />
                </a>
              </div>
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
