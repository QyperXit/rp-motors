"use client";

import { TbEngine } from "react-icons/tb";

const EngineTuning = () => {
  return (
    <div className="flex w-full h-full xl:flex-1">
      <div className="flex flex-col items-center justify-center w-full h-full gap-3 xl:flex-row ">
        <TbEngine className="text-xl text-accent" />

        <h2 className="text-[15px] xl:text-[20px] uppercase font-bold">
          Engine Tuning
        </h2>
      </div>
    </div>
  );
};

export default EngineTuning;
