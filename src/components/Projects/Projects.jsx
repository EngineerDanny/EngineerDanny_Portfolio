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

import f1 from "../../assets/appimages/fh/1.png";
import f2 from "../../assets/appimages/fh/2.png";
import f3 from "../../assets/appimages/fh/3.png";
import f4 from "../../assets/appimages/fh/4.png";
import f5 from "../../assets/appimages/fh/5.png";
import f6 from "../../assets/appimages/fh/6.png";

import aukiss1 from "../../assets/appimages/aukiss/1.webp";
import aukiss2 from "../../assets/appimages/aukiss/2.webp";
import aukiss3 from "../../assets/appimages/aukiss/3.webp";
import aukiss4 from "../../assets/appimages/aukiss/4.webp";
import aukiss5 from "../../assets/appimages/aukiss/5.webp";

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
    images: [f1, f2, f3, f4, f5, f6],
    google_play_link:
      "https://play.google.com/store/apps/details?id=com.farmhousemovies.app",
    apple_appstore_link:
      "https://apps.apple.com/us/app/farmhouse-movies/id1541154245",
  },
  {
    title: "Aukiss TV",
    description:
      "Your favourite online African and Diaspora based content is now" +
      "conveniently available with Aukiss TV on Android. Watch Videos" +
      "On Demand ranging from movies, series, documentaries, live TV" +
      "and more! Cut the cable cord and enjoy real entertainment at" +
      "your finger tips on your terms.",
    images: [aukiss1, aukiss2, aukiss3, aukiss4, aukiss5],
    google_play_link:
      "https://play.google.com/store/apps/details?id=com.farmhousemovies.app",
    apple_appstore_link:
      "https://apps.apple.com/us/app/farmhouse-movies/id1541154245",
  },
];

function Projects() {
  return (
    <div className="min-h-screen  md:mx-auto md:container px-4 py-16 ">
      {projectModels.map((item, index) => {
        return <ProjectTile projectModel={item} key={index} index={index} />;
      })}

     
    </div>
  );
}

export default Projects;
