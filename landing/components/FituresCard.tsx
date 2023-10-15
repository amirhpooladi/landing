import React from "react";

export const FituresCard = ({

}) => {
  return (
    <div className=" grid  xl:grid-cols-3 xl:gap-4">
    <div className="  bg-white rounded-lg mt-16 p-[6%]  mx-auto">
      <img  src="/img/fiture1.png" alt="fiture1"/>
      <div className=" pt-[4%] text-landing-title text-2xl font-semibold ">Dashboard</div>
      <div className=" pt-[4%] text-landing-text font-normal text-sm leading-5 " >                
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
        tortor eros.Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
      </div>
    </div>
    <div className="  bg-white rounded-lg mt-16 p-[6%]  mx-auto">
      <img  src="/img/fiture2.png" alt="fiture2"/>
      <div className=" pt-[4%] text-landing-title text-2xl font-semibold ">Maintenance Records</div>
      <div className=" pt-[4%] text-landing-text font-normal text-sm leading-5 " >                
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
        tortor eros.Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
      </div>
    </div>
      <div className="  bg-white rounded-lg mt-16 p-[6%]  mx-auto">
      <img  src="/img/fiture3.png" alt="fiture3"/>
      <div className=" pt-[4%] text-landing-title text-2xl font-semibold ">Fuel Consumption</div>
      <div className=" pt-[4%] text-landing-text font-normal text-sm leading-5 " >                
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
        tortor eros.Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
      </div>
    </div>
    </div>
  
  );
};
