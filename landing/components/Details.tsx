import React from "react";

export const Details = () => {
  return (
    <div className=" lg:flex mt-12 ">
      <img
        className="  lg:w-1/2 w-full  "
        src={"/img/details image.png"}
        alt="car image"
      />
      <div className=" lg:pl-14 h-full ">
        <div className="font-bold text-3xl text-landing-title pt-12 ">
          Know More About Our Vehicle Details.
        </div>
        <div className="text-landing-text font-normal text-sm leading-5  pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
          maximus.
        </div>
        <div className=" flex  mt-4">
          <div className=" text-xl font-semibold my-auto mr-3">01</div>
          <div>
            <div className=" font-normal text-base">Lorem ipsum dolor.</div>
            <div className="text-landing-text font-normal text-sm leading-5   pt-2">
              Ut ultricies lacus non fermentum ultrices.
            </div>
          </div>
        </div>
        <div className=" flex  mt-4">
          <div className=" text-xl font-semibold my-auto mr-3">02</div>
          <div>
            <div className=" font-normal text-base">Lorem ipsum dolor.</div>
            <div className="text-landing-text font-normal text-sm leading-5  pt-2">
              Ut ultricies lacus non fermentum ultrices.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
