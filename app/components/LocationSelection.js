"use client";

import React, { useState } from "react";

import { Menu, MenuButton, MenuItems } from "@headlessui/react";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRoadCircleCheck } from "react-icons/fa6";

// const locations = [
//   "Main Street 123, United States",
//   "Business Avenue 456, Canada",
//   "Park Road 789, United Kingdom",
// ];

const LocationSelection = () => {
  // const [location, setLocation] = useState("Select Location");
  return (
    <div className="flex w-full h-full xl:flex-1">
      {/* <div className="relative flex-1">
        <MenuButton className="flex flex-col items-center justify-center w-full h-full dropdown-btn xl:items-start xl:p-8">
          <div className="flex justify-center w-full h-16 xl:h-full xl:justify-start xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col items-center xl:flex-row xl:gap-x-2 gap-y-2 xl:gap-y-0">
                <FaMapMarkerAlt className="text-accent" />
                <div className="text-[15px] uppercase font-bold">
                  Select Location
                </div>
              </div>
              <div className="uppercase font-medium text-[13px] text-secondary text-center xl:ml-6 xl:text-left">
                {location}
              </div>
            </div>
          </div>
        </MenuButton>
        <MenuItems className="dropdown-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]">
          {locations.map((location, index) => {
            return (
              <div
                onClick={() => setLocation(location)}
                key={index}
                className="cursor-pointer py-4 xl:pl-10 hover:bg-gray-50 text-[13px] uppercase"
              >
                {location}
              </div>
            );
          })}
        </MenuItems>
      </div> */}
      <div className="flex flex-col items-center justify-center w-full h-full gap-3 xl:flex-row ">
        <FaRoadCircleCheck className="text-xl text-accent" />

        <h2 className="text-[15px] xl:text-[20px] uppercase font-bold">
          MOT TESTING
        </h2>
      </div>
    </div>
  );
};

export default LocationSelection;
