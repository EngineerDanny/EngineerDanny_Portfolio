import React from "react";

const WorkContent = ({ title, duration, contentList }) => {
  return (
    <div className="flex flex-col">
      <h1>{title}</h1>
      {/* Job duration */}
      <p className=" py-2">{duration}</p>
      <ul>
        {contentList.map((item, index) => (
          <li key={index} className="pb-2 text-base font-light opacity-80">✅ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkContent;
