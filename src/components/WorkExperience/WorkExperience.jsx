import React, { useState } from "react";
import WorkContent from "./WorkContent";

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
        {/*Job Tabs Component */}
        <ul className="flex flex-col justify-evenly border-green-500 border-l-2 mr-5">
          {workData.map((value, index) => {
            return (
              <button
                onClick={() => {
                  setcurrentIndex(index);
                }}
                key={index}
                className="h-20 bg-gray-800 text-green-500 px-20  mb-1 flex items-center justify-center transition-transform ease-in-out"
              >
                <h1 className="font-medium opacity-80">{value.place}</h1>
              </button>
            );
          })}
        </ul>
        <WorkContent
          title={workData[currentIndex].title}
          duration={workData[currentIndex].duration}
          contentList={workData[currentIndex].content}
        />
      </div>
    </div>
  );
};
export default WorkExperience;
