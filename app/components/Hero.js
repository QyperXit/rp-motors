"use client";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import React, { useContext } from "react";
import { FadeIn } from "../util/variants";
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
            {/* text */}
            <motion.h1
              variants={FadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Explore the Finest <span className=" text-accent">Global</span>{" "}
              Offers
            </motion.h1>
            <motion.p
              variants={FadeIn("down", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable cars rentals.
            </motion.p>
            <motion.div
              variants={FadeIn("down", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
              className="flex justify-center gap-x-3 xl:justify-start"
            >
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
            </motion.div>
          </div>
          <motion.div
            variants={FadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48"
          >
            <Image
              src={"/images/hero/car.svg"}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="fixed top-[80px] z-10  w-full max-w-[1920px]"
        >
          <Search />
        </motion.div>
      ) : (
        <div className="mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div
            variants={FadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="mt-12 w-full max-w-[1300px] mx-auto"
          >
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
