import React, { useState } from "react";
import WorkContent from "./WorkContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const workData = [
  {
    place: "FARMHOUSE",
    title: "Frontend Developer",
    duration: "May 2018 - Present",
    content: [
      "Write modern, performant, maintainable code for a " +
        "diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks," +
        "and content management systems such as JavaScript, TypeScript," +
        "Gatsby, React, Craft, WordPress, Prismic, and Netlify ",
      "Communicate with multi-disciplinary teams of engineers, designers," +
        "producers, and clients on a daily basis",
    ],
  },
  {
    place: "GODLIVES",
    title: "Mobile Developer & BackEnd Engineer",
    duration: "May 2019 - Present",
    content: [
      "Write modern, performant, maintainable code for a " +
        "diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks," +
        "and content management systems such as JavaScript, TypeScript," +
        "Gatsby, React, Craft, WordPress, Prismic, and Netlify ",
      "Communicate with multi-disciplinary teams of engineers, designers," +
        "producers, and clients on a daily basis",

      "Communicate with multi-disciplinary teams of engineers, designers," +
        "producers, and clients on a daily basis",
    ],
  },
  {
    place: "DYNAMMITE",
    title: "Mobile Developer & Engineering Manager",
    duration: "May 2020 - Present",
    content: [
      "Write modern, performant, maintainable code for a " +
        "diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks," +
        "and content management systems such as JavaScript, TypeScript," +
        "Gatsby, React, Craft, WordPress, Prismic, and Netlify ",
      "Communicate with multi-disciplinary teams of engineers, designers," +
        "producers, and clients on a daily basis",
    ],
  },
];

function getWorkPosition(index) {
  switch (index) {
    case 0:
      return;

      break;

    default:
      break;
  }
}

const WorkExperience = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  console.log(currentIndex);
  return (
    <div className="flex flex-col h-4/6 items-center justify-start">
      {/* Work Experience Header */}
      <div className="flex flex-row items-center my-10">
        <div className="w-40 h-0.5 bg-gray-300 opacity-30"></div>
        <h1 className="text-4xl font-medium opacity-80 mx-3">
          My Work Experience
        </h1>
        <div className="w-40 h-0.5 bg-gray-300 opacity-30"></div>
      </div>

      <div className="flex flex-row w-4/5">
        <FontAwesomeIcon
          icon={faArrowRight}
          size="2x"
          color="green"
          className={` transition-all mr-3 relative ${
            currentIndex === 0
              ? "top-8"
              : currentIndex === 1
              ? "top-24"
              : "top-44"
          } `}
        />

        {/*Job Tabs Component */}
        <ul className="flex flex-col h-64 w-96 justify-evenly border-green-500  mr-5">
          {workData.map((value, index) => {
            const isSelected = index === currentIndex;
            return (
              <div
                onClick={() => {
                  setcurrentIndex(index);
                }}
                className={`flex-1 h-20 ${
                  isSelected ? "bg-gray-800 text-green-500" : "bg-none"
                }  px-20  mb-1 flex items-center justify-center hover:bg-gray-800 rounded-md`}
              >
                <h1 className="font-medium opacity-80">{value.place}</h1>
              </div>
            );
          })}
        </ul>
        <WorkContent
          index={currentIndex}
          title={workData[currentIndex].title}
          duration={workData[currentIndex].duration}
          contentList={workData[currentIndex].content}
        />
      </div>
    </div>
  );
};
export default WorkExperience;
