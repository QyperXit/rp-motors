"use client";

import React, { useState } from "react";

import { Menu, MenuButton, MenuItems } from "@headlessui/react";

import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";

import { addDays, format } from "date-fns";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

const DateSelection = () => {
  // const [date, setDate] = useState([
  //   { startDate: new Date(), endDate: null, key: "selection" },
  // ]);

  return (
    <div className="flex w-full h-full xl:flex-1">
      <div className="flex flex-col items-center justify-center w-full h-full gap-3 xl:flex-row ">
        <GrServices className="text-xl text-accent" />

        <h2 className="text-[15px] xl:text-[20px] uppercase font-bold">
          Servicing
        </h2>
      </div>
    </div>
  );
};

export default DateSelection;
