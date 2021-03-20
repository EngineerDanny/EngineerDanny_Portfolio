import React from "react";
import { motion } from "framer-motion";

const TechTile = ({ title, percentage }) => {
  return (
    <tr className="flex flex-row mb-6 h-5">
      <td className="w-1/12 mr-3 self-center text-xs font-bold opacity-80">
        {title}
      </td>
      <td className="flex rounded-lg bg-white w-full">
        <motion.div
          animate={{width: percentage}}
          transition={{ ease: "easeOut", duration: 1 }}
          className="rounded-l-lg origin-left bg-gradient-to-br from-green-200 to-green-900"
        ></motion.div>
      </td>
    </tr>
  );
};

export default TechTile;
