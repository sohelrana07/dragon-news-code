import React, { Suspense } from "react";
import Categories from "../Categories";
import Loader from "../Loader";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<Loader></Loader>}>
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
