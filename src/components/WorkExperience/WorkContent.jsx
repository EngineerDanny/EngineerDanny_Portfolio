import React from "react";

const WorkContent = ({ title, duration, contentList }) => {
  return (
    <div className="flex flex-col">
      <h1 className=" text-lg font-bold opacity-80">{title}</h1>
      {/* Job duration */}
      <p className="py-2 font-medium opacity-80">{duration}</p>
      <ul>
        {contentList.map((item, index) => (
          <li key={index} className="pb-2 font-light opacity-80 flex flex-row">
            <span className=" mr-2">✅</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkContent;
