"use client";

import React, { useState } from "react";

import { MdCarRepair } from "react-icons/md";

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
