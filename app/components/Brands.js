"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { FadeIn } from "../util/variants";

const Brands = () => {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <motion.div
        variants={FadeIn("up", 0.45)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          <div className="flex flex-col items-center gap-y-4">
            <Image
              src={"/icons/servicesIcons/suspension.svg"}
              width={60}
              height={60}
              alt=""
            />
            <span className="font-semibold text-secondary">Suspension</span>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <Image
              src={"/icons/servicesIcons/batteries.svg"}
              width={70}
              height={70}
              alt=""
            />
            <span className="font-semibold text-secondary">Batteries</span>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <Image
              src={"/icons/servicesIcons/fan.svg"}
              width={60}
              height={60}
              alt=""
            />
            <span className="font-semibold text-secondary">
              Air Conditioning
            </span>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <Image
              src={"/icons/servicesIcons/exhaust.svg"}
              width={60}
              height={60}
              alt=""
            />
            <span className="font-semibold text-secondary">Exhaust</span>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <Image
              src={"/icons/servicesIcons/carChecks.svg"}
              width={60}
              height={60}
              alt=""
            />
            <span className="font-semibold text-secondary">Car Checks</span>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <Image
              src={"/icons/servicesIcons/brakes.svg"}
              width={62}
              height={50}
              alt=""
            />
            <span className="font-semibold text-secondary">Brake Repair</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
