"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa";

import { FadeIn } from "../util/variants";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="z-20 pt-20 bg-white" id="contact">
      <div className="container mx-auto mb-24">
        <motion.div
          variants={FadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            <div className="cursor-pointer">
              <Image src={"/icons/rp.png"} width={200} height={200} alt="" />
            </div>
            <div className="text-secondary">
              Get in touch today for expert car repairs!
            </div>
            <div className="flex flex-col font-semibold gap-y-4">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">( 0121 ) 454-6590</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 xl:items-center">
            <div>
              <h3 className="mb-8 font-bold h3">Company</h3>
              <ul className="flex flex-col font-semibold gap-y-4">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#why">Why Us</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonals</a>
                </li>
                <li>{/* <a href="">How we work</a> */}</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 ">
            <h3 className="mb-8 font-bold h3">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Mon-Fri:</div>
                <div className="font-semibold">09:00AM - 05:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sat:</div>
                <div className="font-semibold">09:00AM - 05:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sun:</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>
          {/* <div className="flex-1 ">
            <h3 className="mb-8 font-bold h3">Newsletter</h3>
            <div className="mb-9 text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa
              aspernatur deleniti, quisquam reprehenderit maiores.
            </div>
            <form className="flex gap-x-2 h-14">
              <input
                type="text"
                placeholder="Email"
                className="h-full pl-4 border rounded-lg outline-none focus:border-accent"
              />
              <button type="submit" className="w-24 btn btn-sm btn-accent">
                Submit
              </button>
            </form>
          </div> */}
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
