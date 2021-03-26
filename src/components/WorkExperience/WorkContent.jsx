import React from "react";
import { motion } from "framer-motion";

const WorkContent = ({ title, duration, contentList }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}   
      transition={{ ease: "easeOut", duration: 2 }}
      className="flex flex-col"
    >
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
    </motion.div>
  );
};

export default WorkContent;
