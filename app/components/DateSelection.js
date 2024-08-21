"use client";

import React, { useState } from "react";

import { Menu, MenuButton, MenuItems } from "@headlessui/react";

import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import { addDays, format } from "date-fns";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

const DateSelection = () => {
  const [date, setDate] = useState([
    { startDate: new Date(), endDate: null, key: "selection" },
  ]);

  return (
    <Menu as="div" className="flex w-full h-full xl:flex-1">
      <div className="relative flex-1">
        <MenuButton className="flex flex-col items-center justify-center w-full h-full dropdown-btn xl:items-start xl:p-8">
          <div className="flex flex-col items-center xl:flex-row xl:gap-x-2 gap-y-2 xl:gap-y-0">
            <FaCalendarAlt className="text-accent" />
            <div className="text-[15px] uppercase font-bold">Select Date</div>
          </div>
          <div className="flex items-center gap-x-3 xl:ml-6">
            <div className="text-[13px] font-medium text-secondary">
              {format(date[0].startDate, "dd MMM yyyy")}
            </div>
            <FaArrowRightLong className="text-accent text-[12px]" />
            <div className="text-[13px] font-medium text-secondary">
              {date[0].endDate ? (
                <div>{format(date[0].endDate, "dd MMM yyyy")}</div>
              ) : (
                <div>{format(date[0].startDate, "dd MMM yyyy")}</div>
              )}
            </div>
          </div>
        </MenuButton>
        <MenuItems className="dropdown-menu shadow-lg absolute -top-96 xl:top-[90px] left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] rounded-[10px] overflow-hidden">
          <DateRange
            onChange={(item) => setDate([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={["#ed1d24"]}
            minDate={addDays(new Date(), 0)}
          />
        </MenuItems>
      </div>
    </Menu>
  );
};

export default DateSelection;
