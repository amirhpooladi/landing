import React from "react";
import { FituresCard } from "./FituresCard";




export const Fitures = () => {
  return (
    <div className="  md:flex flex-col  md:items-center">
      <div className=" font-bold text-3xl text-landing-title pt-12  ">
        Our Software's Core Features
      </div>
      <div className="text-landing-text font-normal text-sm leading-5 md:text-center md:w-2/3 md:pt-4 pt-2 lg:text-base ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
        tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
        maximus.
      </div>
      <div >
        <FituresCard  />
      </div>
    </div>
  );
};
