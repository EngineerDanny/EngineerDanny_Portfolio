import React, { useState } from "react";

const workData = [
  {
    place: "Farmhouse",
    title: "Engineer",
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
    place: "Godlives",
    title: "Engineer",
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
    place: "Dynammite",
    title: "Engineer",
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
];

const WorkExperience = () => {
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
          <li className="flex-1 bg-gray-800 text-green-500 px-20  mb-1 flex items-center justify-center">
            <h1>FarmHouse</h1>
          </li>
          <li className="flex-1 bg-gray-800 text-green-500 px-20  mb-1 flex items-center justify-center">
            <h1>Godlives</h1>
          </li>
          <li className="flex-1 bg-gray-800 text-green-500 px-20  flex items-center justify-center ">
            <h1>Dynammite</h1>
          </li>
        </ul>

        {/* Job Content */}
        <div className="flex flex-col">
          {/* Job title */}
          <h3>
            <span>Engineer</span>
            <span className="">
              &nbsp;@&nbsp;
              <a href="https://www.farmhouse.com/" rel="noopener noreferrer">
                Farmhouse
              </a>
            </span>
          </h3>
          {/* Job duration */}
          <p className="">May 2018 - Present</p>
          <ul>
            <li>
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects
            </li>
            <li>
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </li>
            <li>
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const WorkTile = ({ title, duration, contentList }) => {
  const [workContent, setworkContent] = useState(0);
  return <div></div>;
};

export default WorkExperience;
