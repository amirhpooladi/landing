import React from "react";
import Image from "next/image";

export const PlatformPic = () => {
  return (
    <div className=" md:mr-5   md:pl-20  ">
    <div className=" relative max-md:-right-16 pt-8    ">
      <img className="  min-w-max lg:w-80 2xl:w-96  " src={"/img/happy man.png"} alt="happy man image" />
     
      <img
        className="  lg:w-44 2xl:w-56 2xl:-left-36 lg:-left-28 w-32 absolute top-10 -left-16 pt-8  "
        src={"/img/image7.png"}
        alt="car image"
      />
      <img
        className="  lg:w-20 2xl:w-28  lg:top-36 2xl:top-48 2xl:-left-20  min-w-max  absolute  top-32 -left-16 pt-8 "
        src={"/img/image.png"}
        alt="mobile image"
      />
      <img
        className="lg:w-44 2xl:w-48  lg:left-40 lg:top-72 2xl:top-80  min-w-max absolute  top-52  left-40 pt-8"
        src={"/img/image 9.png"}
        alt="distance image"
      />
    </div>
    </div>
  );
};
