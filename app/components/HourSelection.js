"use client";

import React, { useState } from "react";

import { Menu, MenuButton, MenuItems } from "@headlessui/react";

import { FaClock } from "react-icons/fa6";
import { MdCarRepair } from "react-icons/md";

// const hours = ["10:00 AM", "12:00 AM", "14:00 PM", "16:00 PM"];

const HourSelection = () => {
  // const [hour, setHour] = useState("10:00 AM");
  return (
    <div className="flex w-full h-full xl:flex-1">
      <div className="flex flex-col items-center justify-center w-full h-full gap-3 xl:flex-row ">
        <MdCarRepair className="text-xl text-accent" />

        <h2 className="text-[15px] xl:text-[20px] uppercase font-bold">
          Repairs
        </h2>
      </div>
    </div>
  );
};

export default HourSelection;
