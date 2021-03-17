import React from "react";

const TechTile = ({ title }) => {
  return (
    <tr className="flex flex-row m-3 h-12">
      <td className="w-1/12">{title}</td>
      <td className="w-9/12 flex rounded-md bg-white">
        <div className="rounded-l-md w-11/12 bg-green-500"></div>
      </td>
      <td className="w-1/12">
        <span>55.2%</span>
      </td>
    </tr>
  );
};

export default TechTile;
