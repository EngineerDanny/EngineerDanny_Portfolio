import React from "react";

const WorkContent = ({ title, duration, contentList }) => {
  return (
    <div className="flex flex-col">
      <h1>{title}</h1>
      {/* Job duration */}
      <p className="">{duration}</p>
      <ul>
        {contentList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkContent;
