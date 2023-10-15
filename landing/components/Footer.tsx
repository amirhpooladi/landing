import React from "react";
import { ContactUs } from "./ContactUs";
import { FindUs } from "./FindUs";

export const Footer = () => {
  return (
    <div className=" lg:flex pt-16 w-full mt-16 rounded-lg bg-gradient-to-br  from-landing-footer-first via-landing-footer-second to-landing-footer-third">
      <ContactUs />
      <FindUs />
    </div>
  );
};
