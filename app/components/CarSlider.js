"use client";

import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import { FaRegStar, FaStar, FaStarHalktAlt } from "react-icons/fa";
import { FadeIn } from "../util/variants";

const cars = {
  car1: {
    type: "Hatchback",
    name: "Ford Focus",
    price: 29,
    stars: 3.5,
    image: "/images/carSlider/car01.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "front",
      },
    ],
  },
  car2: {
    type: "Sedan",
    name: "Toyoya Corolla",
    price: 25,
    stars: 5,
    image: "/images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "front",
      },
    ],
  },
  car3: {
    type: "SUV",
    name: "Honda CR-V",
    price: 25,
    stars: 4.7,
    image: "/images/carSlider/car03.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "front",
      },
    ],
  },
  car4: {
    type: "Convertible",
    name: "Mazda MX-5",
    price: 32,
    stars: 4.9,
    image: "/images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "front",
      },
    ],
  },
};

const CarSlider = () => {
  return (
    <motion.div
      variants={FadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {Object.values(cars).map((car, index) => (
          <SwiperSlide key={index}>
            {/* <h3>{car.name}</h3> */}
            <div className="max-w-[385px] mx-auto sm:mx-0 ">
              <Image src={car.image} alt="" width={380} height={284} />
              <div className="flex justify-between">
                <div>
                  <div className="text-[13px] text-secondary uppercase">
                    {car.type}
                  </div>
                  <h3 className="text-lg font-bold uppercase">{car.name}</h3>
                  <div className="mb-10 font-semibold uppercase text-accent">
                    ${car.price}/day
                  </div>
                </div>
                <div className="flex gap-x-2 text-accent h-max">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="flex mb-10 gap-x-3 xl:gap-x-4 w-max">
                {car.info.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-12 h-12 mb-2 rounded-full bg-primary">
                        <Image width={24} height={24} alt="" src={item.icon} />
                      </div>
                      <div className="text=[12px] uppercase">{item.text}</div>
                    </div>
                  );
                })}
              </div>
              <button className="btn btn-accent btn-lg">See details</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default CarSlider;
