"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { SearchContext } from "./context/search";
import Search from "./Search";

const Hero = () => {
  const { searchActive } = useContext(SearchContext);

  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container h-full mx-auto xl:pt-10">
        {/*  */}
        <div className="flex flex-col items-center justify-center h-full xl:flex-row xl:justify-start">
          <div className="mt-16 text-center xl:max-w-xl xl:text-left xl:mt-0">
            <h1 className="h1">
              Explore the Finest <span className=" text-accent">Global</span>{" "}
              Offers
            </h1>
            <p className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10">
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable cars rentals.
            </p>
            <div className="flex justify-center gap-x-3 xl:justify-start">
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/app-store.svg"}
                  width={132}
                  height={36}
                  alt=""
                />
              </button>
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/google-play.svg"}
                  width={132}
                  height={36}
                  alt=""
                />
              </button>
            </div>
          </div>
          <div>image</div>
        </div>
      </div>
      {searchActive ? (
        <div className="fixed top-[80px] z-10  w-full max-w-[1920px]">
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
