import React from "react";

const Experience = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="text-center mb-20">
        <h4 className="text-sm text-slate-700 capitalize">Explore my</h4>
        <h2 className="text-5xl font-bold capitalize">Experience</h2>
      </div>
      <div className="flex sm:flex-col lg:flex-row items-center justify-center gap-[50px]">
        <div className="w-[50%] border-2 border-black/30 bg-gray-100 rounded-3xl">
          <h2 className="font-bold pt-5 text-center text-3xl capitalize">
            frontend development
          </h2>

          <div className="flex justify-center flex-wrap py-[70px]">
            <div className="w-[50%] flex justify-center my-3">
              <img
                className="h-[40px]"
                src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/checkmark.png"
                alt=""
              />
              <div>
                <h4 className="text-xl font-bold">HTML</h4>
                <p>Experienced</p>
              </div>
            </div>
            <div className="w-[50%] flex justify-center my-3">
              <img
                className="h-[40px]"
                src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/checkmark.png"
                alt=""
              />
              <div>
                <h4 className="text-xl font-bold">CSS</h4>
                <p>Experienced</p>
              </div>
            </div>
            <div className="w-[50%] flex justify-center my-3">
              <img
                className="h-[40px]"
                src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/checkmark.png"
                alt=""
              />
              <div>
                <h4 className="text-xl font-bold">SASS</h4>
                <p>Experienced</p>
              </div>
            </div>
            <div className="w-[50%] flex justify-center my-3">
              <img
                className="h-[40px]"
                src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/checkmark.png"
                alt=""
              />
              <div>
                <h4 className="text-xl font-bold">javaScript</h4>
                <p>Experienced</p>
              </div>
            </div>
            <div className="w-[50%] flex justify-center my-3">
              <img
                className="h-[40px]"
                src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/checkmark.png"
                alt=""
              />
              <div>
                <h4 className="text-xl font-bold">TypeScript</h4>
                <p>Experienced</p>
              </div>
            </div>
            <div className="w-[50%] flex justify-center my-3">
              <img
                className="h-[40px]"
                src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/checkmark.png"
                alt=""
              />
              <div>
                <h4 className="text-xl font-bold">Material UI</h4>
                <p>Experienced</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] border-2 border-black/30 bg-gray-100 rounded-3xl">
          <h2 className="font-bold pt-5 text-center text-3xl capitalize">
            backend development
          </h2>

          <div className="flex justify-center flex-wrap py-[70px]">
            <div className="w-[50%] flex justify-center my-3">
              <img
                className="h-[40px]"
                src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/checkmark.png"
                alt=""
              />
              <div>
                <h4 className="text-xl font-bold">PostgreSQL</h4>
                <p>Basic</p>
              </div>
            </div>
            <div className="w-[50%] flex justify-center my-3">
              <img
                className="h-[40px]"
                src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/checkmark.png"
                alt=""
              />
              <div>
                <h4 className="text-xl font-bold">Node JS</h4>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="w-[50%] flex justify-center my-3">
              <img
                className="h-[40px]"
                src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/checkmark.png"
                alt=""
              />
              <div>
                <h4 className="text-xl font-bold">Express</h4>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="w-[50%] flex justify-center my-3">
              <img
                className="h-[40px]"
                src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/checkmark.png"
                alt=""
              />
              <div>
                <h4 className="text-xl font-bold">Git</h4>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="w-[50%] flex justify-center my-3">
              <img
                className="h-[40px]"
                src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/checkmark.png"
                alt=""
              />
              <div>
                <h4 className="text-xl font-bold">MongoDB</h4>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="w-[50%] flex justify-center my-3">
              <img
                className="h-[40px]"
                src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/checkmark.png"
                alt=""
              />
              <div>
                <h4 className="text-xl font-bold">React Js</h4>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
