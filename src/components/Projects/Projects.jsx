import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
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

import shaq1 from "../../assets/appimages/shaq/1.webp";
import shaq2 from "../../assets/appimages/shaq/2.webp";
import shaq3 from "../../assets/appimages/shaq/3.webp";
import shaq4 from "../../assets/appimages/shaq/4.webp";

import hearts1 from "../../assets/appimages/hearts/1.webp";
import hearts2 from "../../assets/appimages/hearts/2.webp";
import hearts3 from "../../assets/appimages/hearts/3.webp";
import hearts4 from "../../assets/appimages/hearts/4.webp";

import lystn1 from "../../assets/appimages/lystn/1.webp";
import lystn2 from "../../assets/appimages/lystn/2.webp";
import lystn3 from "../../assets/appimages/lystn/3.webp";
import lystn4 from "../../assets/appimages/lystn/4.webp";

import godlives1 from "../../assets/appimages/godlives/1.webp";
import godlives2 from "../../assets/appimages/godlives/2.webp";
import godlives3 from "../../assets/appimages/godlives/3.webp";
import godlives4 from "../../assets/appimages/godlives/4.webp";

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
      "https://play.google.com/store/apps/details?id=com.aukiss.aukiss_app",
    apple_appstore_link: "https://apps.apple.com/tt/app/aukiss-tv/id1534585800",
  },
  {
    title: "ShaQ Express",
    description:
      "You can now do a whole lot more with your ShaQ Express App- do you want to order food? Deliver a package or shop online ?" +
      "Whatever you’re in the mood for, we’ll make sure it gets delivered right to your doorstep. Just pick a restaurant or shop, choose what you want, swipe to order and let us do the rest!" +
      "Track your delivery in real-time, with minute-by-minute updates. If staring at a clock isn’t your thing, don’t worry – we'll also send you notifications so you know exactly when your order is about to arrive." +
      "When we say customer support, we mean customer support. Our wonderful team of professionals are just a chat away and respond in seconds." +
      "We made paying for your food/packages as simple as possible. That’s why you can pay conveniently and securely with your mobile money or credit card. Whatever works for you.",
    images: [shaq1, shaq2, shaq3, shaq4],
    google_play_link:
      "https://play.google.com/store/apps/details?id=com.shaqexpress.app",
    apple_appstore_link:
      "https://apps.apple.com/gh/app/shaq-express/id1533502582",
  },

  {
    title: "Accra Hearts of Oak",
    description:
      "The App will serve as the official app for the Accra Hearts of Oak Sporting Club and serve the fans with news updates, video streams of training sessions and live matches, as well as manage supporter union memberships data.",
    images: [hearts1, hearts2, hearts3, hearts4],
    google_play_link:
      "https://play.google.com/store/apps/details?id=com.heartsofoak.app",
    apple_appstore_link:
      "https://apps.apple.com/us/app/accra-hearts-of-oak/id1588680795",
  },
  {
    title: "Lystn (Beta)",
    description:
      "Lystn brings personality back into online dating, allowing you to listen to people’s voices before you see their pictures." +
      "Enter Lystn, a new relationship app which brings personality and happiness back into online dating. We have built the Lystn experience around voice," +
      " because we believe that the best way of making real connections is by speaking up. Create your own audio recording and introduce yourself like you would on a real first date." +
      " Spark your curiosity by listening to others" +
      "By the way; we know that looks matter, too, so don’t worry – you’ll get to see pictures as well. You just need to listen first. Because love might just be in the ear.  ",
    images: [lystn1, lystn2, lystn3, lystn4],
    google_play_link:
      "https://play.google.com/store/apps/details?id=com.jubelapp.lystn",
    apple_appstore_link: "https://apps.apple.com/gh/app/lystn/id1527800470",
  },
  {
    title: "Godlives (Internal Beta)",
    description:
      "With Godlives, you are covered with delivery of your favourite dishes right to your door step. Check out menu from restaurants near you, order and pay right from the comfort of you home or office." +
      " We deliver food at lightening speed with a smile.",
    images: [godlives1, godlives2, godlives3, godlives4],
    google_play_link:
      "https://play.google.com/store/apps/details?id=com.godlivesdelivery.userapp",
    apple_appstore_link: null,
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
