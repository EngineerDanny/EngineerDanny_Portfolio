import React from "react";


const TechTile = ({ title, percentage }) => {
  return (
    <tr className="flex flex-row mb-6 h-5">
      <td className="w-1/12 mr-3 self-center text-xs font-bold opacity-80">
        {title}
      </td>
      <td className="flex rounded-lg bg-white w-full">
        <div
          className="rounded-l-lg origin-left bg-gradient-to-br from-green-200 to-green-900 transition-all w-0 focus:border-opacity-30"
          style={{ width: percentage }}
        ></div>
      </td>
    </tr>
  );
};

export default TechTile;
