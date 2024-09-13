"use client";

import { useContext } from "react";
import { SearchContext } from "./context/search";
import Diagnostics from "./Diagnostics";
import Mot from "./Mot";
import Repairs from "./Repairs";
import Servicing from "./Servicing";
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
        <Mot />
        <Servicing />
        <Repairs />
        <Diagnostics />
      </div>
    </div>
  );
};

export default Search;
