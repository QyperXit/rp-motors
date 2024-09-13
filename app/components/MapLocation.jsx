"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "../util/variants";

const MapLocation = () => {
  return (
    <section className="overflow-hidden bg-gray-50 md:block">
      <div className="container mx-auto sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <motion.div
            variants={FadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="max-w-xl mx-auto text-center ltr:sm:text-left rtl:sm:text-right"
          >
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              R P Motor Services
            </h2>
            <p className="hidden text-gray-500 md:mt-4 md:block">
              3, City Trading Estate, Icknield <br /> Square Birmingham b16 0PP
              <br />
            </p>
            <div className="mt-4 md:mt-8">
              <a
                href="https://maps.app.goo.gl/3Cdbgwa28oa4Sm2H7"
                className="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-accent hover:bg-accent-hover focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
        <motion.iframe
          variants={FadeIn("left", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4859.710099744883!2d-1.9285841868795777!3d52.48176013894241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bcfc8ab142cf%3A0x902426f15a6edd6c!2sR%20P%20Motor%20Services!5e0!3m2!1sen!2suk!4v1725753031392!5m2!1sen!2suk"
          height="450"
          className=" border-[8px] border-white object-contain w-full h-56 sm:h-full mb-8 md:mb-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></motion.iframe>
      </div>
    </section>
  );
};

export default MapLocation;
