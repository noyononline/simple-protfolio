import React from "react";

const Projects = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="text-center mb-20">
        <h4 className="text-sm text-slate-700 capitalize">Browse My Recent</h4>
        <h2 className="text-5xl font-bold capitalize">Projects</h2>
      </div>
      <div className="flex sm:flex-col lg:flex-row gap-12 justify-center items-center">
        <div className="px-28 py-36 text-center rounded-3xl bg-slate-300">
          <img
            className="rounded-3xl h-[300px]"
            src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/project-1.png"
            alt=""
          />
          <h3 className="p-3 font-bold text-2xl">Project One</h3>
          <div className="flex gap-5 items-center justify-center mt-4">
            <a
              href=""
              className="border border-black py-2 hover:bg-black hover:text-white ease-in-out duration-200 rounded-full px-8"
            >
              Github
            </a>
            <a
              href=""
              className="border border-black py-2 hover:bg-black hover:text-white ease-in-out duration-200 rounded-full px-4"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="px-28 py-36 text-center rounded-3xl bg-slate-300">
          <img
            className="rounded-3xl h-[300px]"
            src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/project-1.png"
            alt=""
          />
          <h3 className="p-3 font-bold text-2xl">Project One</h3>
          <div className="flex gap-5 items-center justify-center mt-4">
            <a
              href=""
              className="border border-black py-2 hover:bg-black hover:text-white ease-in-out duration-200 rounded-full px-8"
            >
              Github
            </a>
            <a
              href=""
              className="border border-black py-2 hover:bg-black hover:text-white ease-in-out duration-200 rounded-full px-4"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="px-28 py-36 text-center rounded-3xl bg-slate-300">
          <img
            className="rounded-3xl h-[300px]"
            src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/project-1.png"
            alt=""
          />
          <h3 className="p-3 font-bold text-2xl">Project One</h3>
          <div className="flex gap-5 items-center justify-center mt-4">
            <a
              href=""
              className="border border-black py-2 hover:bg-black hover:text-white ease-in-out duration-200 rounded-full px-8"
            >
              Github
            </a>
            <a
              href=""
              className="border border-black py-2 hover:bg-black hover:text-white ease-in-out duration-200 rounded-full px-4"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
