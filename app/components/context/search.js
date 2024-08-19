"use client";

import { createContext, useContext, useState } from "react";

// create a context
export const SearchContext = createContext();

// create a provider
export function SearchContextProvider({ children }) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearchContext = () => useContext(SearchContext);
