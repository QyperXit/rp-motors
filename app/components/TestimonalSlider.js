"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { FaQuoteLeft } from "react-icons/fa";
import { Pagination } from "swiper/modules";

import { motion } from "framer-motion";

import dynamic from "next/dynamic";
import { FadeIn } from "../util/variants";

const testimonialData = [
  {
    message:
      "They truly exceeded my expectations and made my car rental experience a delay",
    avatar: "/images/testimonial/avatar.png",
    name: "Ravi Kumar",
    job: "Business Owner",
  },
  {
    message:
      "They truly exceeded my expectations and  rental experience a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Kelly Clarke",
    job: "Software Developer",
  },
];

const TestimonalSlider = () => {
  return (
    <motion.div
      variants={FadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px]"
      >
        {testimonialData.map((review, index) => {
          const { message, avatar, name, job } = review;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center text-center">
                <FaQuoteLeft className="mb-6 text-7xl text-accent" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                  {message}
                </div>
                <Image src={avatar} width={64} height={64} alt="" />
              </div>
              <div>
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default TestimonalSlider;
