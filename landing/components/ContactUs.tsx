import React from "react";
import { SendMassageButton } from "./SendMassageButton";

export const ContactUs = () => {
  return (
    <div className=" bg-white mx-[6%]  lg:w-2/3 ">
      <div className=" text-landing-title font-semibold text-4xl p-[6%] ">
        Contact us
      </div>

      <form className="    rounded px-8 pt-6 pb-8 mb-4">
        <div className=" lg:flex lg:justify-between">
        <div className="mb-4">
          <label className=" text-landing-footer-contactUs text-base font-medium mb-3">
            Full Name
          </label>
          <input
            className="  border border-solid rounded-md w-full py-2 px-3 text-landing-footer-contactUs  focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-6 justify-end items-end">
          <label className=" text-landing-footer-contactUs text-base font-medium mb-3">
            Email
          </label>
          <input
            className="  border border-solid rounded-md w-full py-2 px-3 text-landing-footer-contactUs  focus:outline-none focus:shadow-outline"
            id="Email"
            type="email"
            placeholder="email"
          />
        </div>
        </div>
        <div className="mb-6">
          <label className="block text-landing-footer-contactUs text-base font-medium mb-3">
            Message
          </label>
          <input
            className=" pb-56  border border-solid rounded-md w-full py-2 px-3 text-landing-footer-contactUs  focus:outline-none focus:shadow-outline"
            id="Message"
            type="text"
            placeholder="Message... "
          />
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <SendMassageButton />
        </div>
      </form>
    </div>
  );
};
