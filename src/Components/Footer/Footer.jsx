import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center">
        <h4 className="text-md text-slate-700 capitalize">
          All right &copy; reserved by{" "}
          <span className="hover:text-red-500">John Doe</span> 2024
        </h4>
      </div>
    </div>
  );
};

export default Footer;
