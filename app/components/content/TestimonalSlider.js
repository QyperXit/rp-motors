"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { FaQuoteLeft } from "react-icons/fa";
import { Pagination } from "swiper/modules";

import { motion } from "framer-motion";

import dynamic from "next/dynamic";
import { FadeIn } from "../../util/variants";

const testimonialData = [
  {
    message:
      "Josh and Roy are both great guys.  They're very helpful and provide a great quality service.  I would, and do, recommend them to others looking for trustworthy and reliable mechanics.",
    avatar: "/icons/testimonial/review.png",
    name: "Lee Nash",
    job: "Google Reviews",
  },
  {
    message:
      "Took my Abarth 595 here for a service and it’s first cambelt change alongside the water pump. Excellent prices and well informed throughout the process. Highly recommend",
    avatar: "/icons/testimonial/review.png",
    name: "Isaac Hussain",
    job: "Google Reviews",
  },
  {
    message:
      "It's all about the personal touch and that goes a long way, Roy the owner and Josh the mechanic will sort you out and see you right.One to one with the person fixing your car, priceless.",
    avatar: "/icons/testimonial/review.png",
    name: "John Townsend",
    job: "Google Reviews",
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
                <div className="text-xl xl:text-4xl max-w-[874px] mb-12 font-medium">
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
