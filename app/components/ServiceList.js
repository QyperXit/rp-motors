"use client";

import { useContext } from "react";
import { SearchContext } from "./context/search";
import DateSelection from "./DateSelection";
import EngineTuning from "./EngineTuning";
import HourSelection from "./HourSelection";
import LocationSelection from "./LocationSelection";
const Search = () => {
  const { searchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px]"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"
      } hidden xl:block w-full relative shadow-lg`}
    >
      <div className={`flex h-full ${searchActive && "container mx-auto"}`}>
        <LocationSelection />
        <DateSelection />
        <HourSelection />
        <EngineTuning />
      </div>
    </div>
  );
};

export default Search;
