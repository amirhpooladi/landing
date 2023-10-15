"use client";
import React, { useState } from "react";
import { VideoPlayButton } from "./VideoPlayButton";
import { useRef } from "react";

export const Video = () => {
  const [opacity, setOpacity] = useState("opacity-60");
  const [videoControl, setVideoControl] = useState(false);

  const vidRef: any = useRef();

  const playVideoHandler = () => {
    setOpacity("opacity-100");
    setVideoControl(true);
    vidRef.current.play();
    vidRef.current.play();
  };
  const pauseVideoHandler = () => {
    setOpacity("opacity-60");
    setVideoControl(true);
    vidRef.current.pause();
  };

  return (
    <div className=" md:flex flex-col  md:items-center  ">
      <div className=" font-bold text-3xl text-landing-title pt-12 lg:text-4xl  ">
        How it works?!
      </div>
      <div className="text-landing-text font-normal text-sm leading-5 md:text-center md:pt-4 pt-2  md:w-2/3 lg:text-base  ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
        tortor eros.Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
      </div>
      <img
        src="/img/Vector (1).svg"
        alt="vector"
        className=" absolute mt-56  px-[15%] opacity-50  max-md:hidden "
      />
      <div className=" mt-6 relative  md:mx-auto  ">
        <video
          onPause={pauseVideoHandler}
          onPlay={playVideoHandler}
          controls={videoControl}
          className={`rounded-xl  ${opacity}`}
          ref={vidRef}
        >
          <source src="/img/sampleVideo2.mp4" type="video/mp4" />
        </video>

        {!videoControl && (
          <button
            onClick={() => {
              playVideoHandler();
            }}
          >
            <VideoPlayButton />
          </button>
        )}
        {!videoControl && (
          <img
            className=" absolute bottom-0 -right-2 max-lg:hidden    "
            src={"/img/iphone14.png"}
            alt="car image"
          />
        )}
      </div>
    </div>
  );
};
