import React from "react";

const WorkContent = ({ title, duration, contentList }) => {
  return (
    <div className=" h-80 max-h-80 flex flex-col">
      <h1 className="text-lg font-bold opacity-80">{title}</h1>
      {/* Job duration */}
      <p className="py-3 font-medium opacity-80">{duration}</p>
      <ul>
        {contentList.map((item, index) => (
          <li key={index} className="pb-4 font-light opacity-80 flex flex-row">
            <span className="mr-3">✅</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkContent;
