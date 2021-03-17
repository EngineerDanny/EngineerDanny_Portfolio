import React from "react";

const TechTile = ({ title, percentage }) => {
  return (
    <tr className="flex flex-row mb-5 h-5">
      <td className="w-1/12 mr-3 self-center  text-xs font-bold opacity-80">
        {title}
      </td>
      <td className="flex rounded-lg bg-white w-full">
        <div
          className="rounded-l-lg bg-green-500"
          style={{ width: percentage }}
        ></div>
      </td>
      <td className="w-1/12 ml-3 self-center text-xs opacity-80">
        <span>55.2%</span>
      </td>
    </tr>
  );
};

export default TechTile;
