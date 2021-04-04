import React, { useState } from "react";
import WorkContent from "./WorkContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const workData = [
  {
    place: "FARMHOUSE",
    title: "Frontend Developer",
    duration: "March 2021 - Present",
    content: [
      "Suggest various ways of improving the Farmhouse Movies App",
      "Work with UI/UX designer",
     
    ],
  },
  {
    place: "GODLIVES",
    title: "FullStack Developer",
    duration: "April 2020 - Present",
    content: [
      "Write modern, performant and maintainable code for the company",
      "Develop Godlives delivery userapp with flutter",
      "Work with a variety of languages and frameworks" +
        " such as JavaScript, Dart, Flutter and Node js",
      "Use Git and Gitlab as the main version control platform",
      "Converse with other engineers and the tech lead regularly",
    ],
  },
  {
    place: "DYNAMMITE",
    title: "Mobile Developer & Engineering Manager",
    duration: "May 2019 - November 2019",
    content: [
      "Write modern, performant, maintainable code for the mobile app",
      "Utilize Java programming language for android development",
      "Use firebase as the main backend",
      "Integrate wordpress API with mobile app",
      "Communicate with creative designer to improve upon the app",
    ],
  },
];

const WorkExperience = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  console.log(currentIndex);
  return (
    <section className="h-screen w-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col h-4/6 items-center justify-start"
      >
        {/* Work Experience Header */}
        <div className="flex flex-row items-center my-10 ">
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
            color=""
            className="transition-all mr-5 relative"
            style={
              currentIndex === 0
                ? {
                    top: "2rem",
                  }
                : currentIndex === 1
                ? {
                    top: "9rem",
                  }
                : {
                    top: "15rem",
                  }
            }
          />

          {/*Job Tabs Component */}
          <ul className="flex flex-col h-80 justify-evenly border-green-500  mr-5">
            {workData.map((value, index) => {
              const isSelected = index === currentIndex;
              return (
                <div
                  onClick={() => {
                    setcurrentIndex(index);
                  }}
                  className={`flex-1 h-20 w-64  ${
                    isSelected ? "bg-green-800 text-white" : "bg-none"
                  } bg-gray-800 px-20  mb-1 flex items-center cursor-pointer
                   justify-center hover:bg-green-900 rounded-md`}
                >
                  <h1>{value.place}</h1>
                </div>
              );
            })}
          </ul>
          <WorkContent
            title={workData[currentIndex].title}
            duration={workData[currentIndex].duration}
            contentList={workData[currentIndex].content}
          />
        </div>
      </motion.div>
    </section>
  );
};
export default WorkExperience;
