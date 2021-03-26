import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="h-screen w-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col h-4/6 items-center justify-start"
      >
        {/* Work Experience Header */}
        <div className="flex flex-row items-center my-10">
          <div className="w-40 h-0.5 bg-gray-300 opacity-30"></div>
          <h1 className="text-4xl font-medium opacity-80 mx-3">My Projects</h1>
          <div className="w-40 h-0.5 bg-gray-300 opacity-30"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
