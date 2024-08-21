"use client";

import React, { useState } from "react";

import { Menu, MenuButton, MenuItems } from "@headlessui/react";

import { FaArrowRight } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const hours = ["10:00 AM", "12:00 AM", "14:00 PM", "16:00 PM"];

const HourSelection = () => {
  const [hour, setHour] = useState("10:00 AM");
  return (
    <Menu as="div" className="flex w-full h-full xl:flex-1">
      <div className="relative flex-1">
        <MenuButton className="flex flex-col items-center justify-center w-full h-full dropdown-btn xl:items-start xl:p-8">
          <div className="flex flex-col items-center xl:flex-row xl:gap-x-2 gap-y-2 xl:gap-y-0">
            <FaClock className="text-accent" />
            <div className="text-[15px] uppercase font-bold">Select Hours</div>
            <div className="flex items-center justify-center gap-x-3">
              <div className="font-medium text-[13px] text-secondary  xl:ml-6 ">
                {hour}
              </div>
              <FaArrowRight className="text-accent text-[12px]" />

              <div className="font-medium text-[13px] text-secondary  xl:ml-6 ">
                {hour}
              </div>
            </div>
          </div>
        </MenuButton>
        <MenuItems className="dropdown-menu shadow-lg absolute -top-72 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:translate-x-0 text-sm  w-full bg-white max-w-[332px] py-6 rounded-[10px]">
          {hours.map((hour, index) => {
            return (
              <div
                onClick={() => setHour(hour)}
                className="py-4 text-center cursor-pointer hover:bg-gray-50"
                key={index}
              >
                {hour}
              </div>
            );
          })}
        </MenuItems>
      </div>
    </Menu>
  );
};

export default HourSelection;
