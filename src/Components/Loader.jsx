import React from "react";
import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-start min-h-screen mt-20">
      <BarLoader></BarLoader>
    </div>
  );
};

export default Loader;
