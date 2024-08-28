"use client";

import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import { FaRegStar, FaStar, FaStarHalktAlt } from "react-icons/fa";
import { FadeIn } from "../util/variants";

const addCheck = {
  add1: {
    title: "Free Inspection",
    description:
      "Bring your car to RP Motors today & let us take care of the rest...",
    image: "/images/carfixing/inspection.jpg",
  },
  add2: {
    title: "Car Maintainance",
    description:
      "Proper maintainance is essential to keep your car in top condition.",
    image: "/images/carfixing/oilcheck.jpg",
  },
  add3: {
    title: "General Repair",
    description: "Engine repair, brake repair, steeriing & suspension repair.",
    image: "/images/carfixing/carfix.jpg",
  },
  // add4: {
  //   title: "Ford Focus",
  //   description:
  //     "A reliable hatchback with a 5-door design and a comfortable interior.",
  //   image: "/images/carSlider/car02.svg",
  // },
};

const CarSlider = () => {
  return (
    <motion.div
      variants={FadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto mt-10"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {Object.values(addCheck).map((car, index) => (
          <SwiperSlide key={index}>
            {/* <h3>{car.name}</h3> */}
            <div className="max-w-[385px] mx-auto sm:mx-0 ">
              <Image src={car.image} alt="" width={380} height={284} />
              <h2 className="mt-6 text-xl font-semibold text-center text-accent">
                {car.title}
                {/* <h3 className="font-bold uppercase text-md">{car.name}</h3> */}
                {/* <div className="mb-10 font-semibold uppercase text-accent">
                    ${car.price}/day
                  </div> */}
                {/* <div className="flex gap-x-2 text-accent h-max">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div> */}
              </h2>
              <p className="mt-6 text-center ">{car.description}</p>
              <button className="mt-6 btn btn-accent btn-lg">
                Get Directions
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default CarSlider;
