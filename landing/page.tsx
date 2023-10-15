import React from "react";
import { Header } from "./components/Header";
import { DownloadButtons } from "./components/DownloadButtons";
import { PlatformPic } from "./components/PlatformPic";
import { Video } from "./components/Video";
import { Fitures } from "./components/Fitures";
import { Vector } from "./components/Vector";
import { Details } from "./components/Details";
import { DrivingReport } from "./components/DrivingReport";
import { Footer } from "./components/Footer";

const Main = () => {
  return (
    <>
      <img
        src="/img/Vector.svg"
        className=" absolute mt-40 right-0 max-md:hidden"
      />
      <div className=" px-[5%]  ">
        <div className="  pt-7  overflow-hidden ">
          <Header />
          <div className="md:grid md:grid-cols-2 md:justify-items-end  ">
            <div>
              <div className=" text-primary_blue font-semibold pt-5  text-base md:w-2/3 lg:text-lg 2xl:text-xl    ">
                #Fleet Management Software
              </div>
              <div className=" text-landing-darkBlue text-3xl pt-2 font-bold md:w-2/3 lg:text-4xl 2xl:text-5xl   ">
                Your platform for fuel management
              </div>
              <div className=" text-landing-text font-normal text-sm leading-5 pt-4 md:w-2/3 lg:text-base 2xl:text-lg ">
                MetaFleet is the simple alternative to spreadsheets and outdated
                software — designed to help you automate fleet operations and
                keep vehicles and equipment running smoothly.
              </div>
              <DownloadButtons />
            </div>
            <PlatformPic />
          </div>

          <Video />

          <Fitures />
          <Details />
          <DrivingReport />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
