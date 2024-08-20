"use client";
import React, { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "./context/search";

const Hero = () => {
  const { searchActive } = useContext(SearchContext);

  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container h-full mx-auto xl:pt-10">hero container</div>
      {searchActive ? (
        <div className="fixed top-[80px] z-10 wf max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <div className="mt-12 w-full max-w-[1300px] mx-auto">
          <Search />
        </div>
      )}
    </section>
  );
};

export default Hero;
