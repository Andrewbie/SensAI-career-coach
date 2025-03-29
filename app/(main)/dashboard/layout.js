import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

const layout = ({ children }) => {
  return (
    <div className="px-32">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title pb-5">Industry Insights</h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="grey" />}
      >
        {children}
      </Suspense>
    </div>
  );
};

export default layout;
