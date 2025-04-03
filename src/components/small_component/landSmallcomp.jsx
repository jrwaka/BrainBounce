import React from "react";

const LandSmallcomp = ({ dataObjects }) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-xl p-6 text-left md:hover:scale-105 transition-all duration-300  ">
        <div className="text-4xl text-blue-800 mb-4">{dataObjects.icon}</div>
        <h3 className="text-xl font-semibold">{dataObjects.title}</h3>
        <p className="mt-2 text-gray-600">{dataObjects.subTitle}</p>
      </div>
    </>
  );
};

export default LandSmallcomp;
