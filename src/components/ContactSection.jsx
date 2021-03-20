import React from "react";

const ContactSection = () => {
  return (
    <div className="flex flex-col h-4/6 items-center justify-start">
      {/* Work Experience Header */}
      <div className="flex flex-row items-center my-10">
        <div className="w-40 h-0.5 bg-gray-300 opacity-30"></div>
        <h1 className="text-4xl font-medium opacity-80 mx-3">
          My Contacts
        </h1>
        <div className="w-40 h-0.5 bg-gray-300 opacity-30"></div>
      </div>
      <h1>I am always open for new opportunities. Contact me and say hello!</h1>
    </div>
  );
};

export default ContactSection;
