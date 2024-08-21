"use client";

import { useContext } from "react";
import { SearchContext } from "./context/search";
import DateSelection from "./DateSelection";
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
        <div className="flex items-center px-6 xl:h-full xl:px-0">
          <button
            className={`${
              searchActive
                ? "btn btn-sm btn-accent w-[164px]"
                : "btn btn-lg btn-accent w-[184px]"
            } `}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
