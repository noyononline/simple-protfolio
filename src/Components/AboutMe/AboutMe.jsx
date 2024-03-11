import React from "react";
import { FaAward } from "react-icons/fa6";
const AboutMe = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="text-center mb-20">
        <h4 className="text-sm text-slate-700">get to know more</h4>
        <h2 className="text-5xl font-bold capitalize">about me</h2>
      </div>
      <div className="flex gap-10 justify-between">
        <img
          className="w-[500px]"
          src="https://static.vecteezy.com/system/resources/previews/011/975/608/original/kid-happy-learning-codding-in-computer-web-coding-for-kids-illustration-coding-its-fun-can-be-used-for-web-banner-poster-social-media-promotion-etc-vector.jpg"
          alt=""
        />
        <div>
          <div className="flex mb-7 gap-16 justify-start items-center">
            <div className="border-2 text-center py-10 px-9 border-black rounded-2xl">
              <FaAward className="mx-auto" />
              <h3 className="font-bold text-2xl capitalize">experience</h3>
              <p>2+ years</p>
              <h6 className="capitalize">frontend development</h6>
            </div>
            <div className="border-2 text-center py-10 px-9 border-black rounded-2xl">
              <FaAward className="mx-auto" />
              <h3 className="font-bold text-2xl capitalize">experience</h3>
              <p>2+ years</p>
              <h6 className="capitalize">frontend development</h6>
            </div>
          </div>
          <p className="text-lg text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            laborum harum voluptas! Illum, architecto quae facilis error
            officiis impedit, nisi adipisci dolor expedita quam sapiente
            commodi. Alias laudantium vero dicta. Ratione laboriosam recusandae,
            ut tempore officiis vel distinctio amet nesciunt est officia
            expedita dicta magnam. Nisi ratione praesentium, distinctio
            assumenda laborum veniam dolores perferendis ad sapiente!
            Perspiciatis ullam aperiam blanditiis. Possimus expedita quos
            ratione eos optio incidunt fugit laborum architecto ad assumenda
            aliquid repellendus repudiandae qui cumque, impedit omnis cum
            inventore eius fuga quas nam dolor tempora? Iure, quod in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
