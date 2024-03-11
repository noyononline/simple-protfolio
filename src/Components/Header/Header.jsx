import React from "react";

const Header = () => {
  return (
    <div className="w-full py-8">
      <div className="container mx-auto flex sm:flex-col lg:flex-row justify-between items-center">
        <div className="text-5xl font-bold capitalize">John doe</div>
        <ul className="flex gap-5 font-bold capitalize text-xl">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
