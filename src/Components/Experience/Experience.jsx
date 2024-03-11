import React from "react";

const Experience = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="text-center mb-20">
        <h4 className="text-sm text-slate-700 capitalize">Explore my</h4>
        <h2 className="text-5xl font-bold capitalize">Experience</h2>
      </div>
      <div className="flex gap-4 justify-around">
        <div>
          <h2 className="font-bold text-3xl mb-20 capitalize">
            frontend development
          </h2>
        </div>
        <div>
          <h2 className="font-bold text-3xl mb-20 capitalize">
            backend development
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Experience;
