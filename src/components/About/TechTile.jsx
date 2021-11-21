import React from "react";
import { motion } from "framer-motion";

const TechTile = ({ title, percentage }) => {
  return (
    <tr className="flex flex-row mb-4 h-2">
    
      <td className="flex rounded-lg bg-white w-full">
        <motion.div
          animate={{width: percentage}}
          transition={{ ease: "easeOut", duration: 1 }}
          className="rounded-l-lg origin-left bg-gradient-to-br  from-indigo-300 to-indigo-500"
        ></motion.div>
      </td>
    </tr>
  );
};

export default TechTile;
