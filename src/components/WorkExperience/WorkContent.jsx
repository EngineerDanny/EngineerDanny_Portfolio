import React from "react";

const WorkContent = ({ title, duration, contentList }) => {
  return (
    <div className="flex flex-col">
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
          Work with a variety of different languages, platforms, frameworks, and
          content management systems such as JavaScript, TypeScript, Gatsby,
          React, Craft, WordPress, Prismic, and Netlify
        </li>
        <li>
          Communicate with multi-disciplinary teams of engineers, designers,
          producers, and clients on a daily basis
        </li>
      </ul>
    </div>
  );
};

export default WorkContent;
