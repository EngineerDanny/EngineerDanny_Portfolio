import React from "react";
import { motion } from "framer-motion";
import google_play from "../../assets/badges/google-play-badge.png";
import appstore_badge from "../../assets/badges/appstore-badge.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Carousel from "./Carousel";
import ProjectTile from "./ProjectTile";

import f1 from "../../assets/appimages/1.png";
import f2 from "../../assets/appimages/2.png";
import f3 from "../../assets/appimages/3.png";
import f4 from "../../assets/appimages/4.png";
import f5 from "../../assets/appimages/5.png";
import f6 from "../../assets/appimages/6.png";

const projectModels = [
  {
    title: "Farmhouse Movies App",
    description:
      "Watch your favourite TV series from Farmhouse Productions in the" +
      "comfort of your home. Catch up on the latest TV series available" +
      "to enjoy. Bringing our productions to you, we have developed this" +
      "application to showcase our awesome works to you, be it STRYKE," +
      "Things We Do For Love, Fortune Island, YOLO, etc. Using the" +
      "application, you would have the opportunity to stream some of our" +
      "movies for free and also pay to stream the most current ones in a" +
      "way of showing love to our production.",
    images: [f1, f2, f3, f4,f5,f6],
    google_play_link:
      "https://play.google.com/store/apps/details?id=com.farmhousemovies.app",
    apple_appstore_link:
      "https://apps.apple.com/us/app/farmhouse-movies/id1541154245",
  },
];

function Projects() {
  return (
    <div className=" min-h-screen md:mx-auto md:container px-4 py-16">
      {projectModels.map((item, index) => {
        return <ProjectTile projectModel={item} key={index} />;
      })}

      <div className="pb-32 pt-16">
        <div className="mx-auto">
          <div className="flex flex-wrap flex-row-reverse items-center">
            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
              <div className="py-2 text-color">
                <h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black">
                  Aukiss TV
                </h1>
                <h2 className="text-lg lg:text-3xl leading-7 md:leading-10 f-f-r py-8">
                  Your favourite online African and Diaspora based content is
                  now conveniently available with Aukiss TV on Android. Watch
                  Videos On Demand ranging from movies, series, documentaries,
                  live TV and more! Cut the cable cord and enjoy real
                  entertainment at your finger tips on your terms.
                </h2>
                <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                  <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700">
                    Lets Get Started
                  </h3>
                  <div className="pl-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                        fill="#D53F8C"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
              <img
                className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
