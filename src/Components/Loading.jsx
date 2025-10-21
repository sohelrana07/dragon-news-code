import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <HashLoader></HashLoader>
    </div>
  );
};

export default Loading;
