"use client";

import Image from "next/image";

import {
  MdOutlineDirectionsCar,
  MdOutlineRateReview,
  MdOutlineShare,
} from "react-icons/md";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import { FadeIn } from "../../util/variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="flex items-center section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <motion.div
            variants={FadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ oncee: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              className="rounded-[20px]"
              src={"/images/carfixing/repair.jpg"}
              width={600}
              height={448}
              alt=""
            />
          </motion.div>
          <div className="flex items-center flex-1 xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={FadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ oncee: false, amount: 0.6 }}
                className="h2"
              >
                Trusted Car Repair Expertise
              </motion.h2>
              <motion.p
                variants={FadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ oncee: false, amount: 0.6 }}
                classname="mb-[42px] max-w-md"
              >
                {/* Our experienced technicians provide top-quality repairs with a
                personal touch, ensuring your vehicle receives the best care
                possible. */}
                Get honest, expert care from experienced technicians who offer
                great advice and quality repairs at affordable prices.
              </motion.p>
              {/*  */}
              <motion.div
                variants={FadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ oncee: false, amount: 0.2 }}
                className="flex items-center mt-6 mb-12 gap-x-8"
              >
                {/*  */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent" />
                  <div className="mb-2 text-3xl font-black">
                    {inView ? (
                      <CountUp start={0} end={40} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Trusted <br /> Since
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineShare className="text-5xl text-accent" />
                  <div className="mb-2 text-3xl font-black">
                    {inView ? (
                      <CountUp start={0} end={25} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Referral <br /> Rate
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineRateReview className="text-5xl text-accent" />
                  <div className="mb-2 text-3xl font-black">
                    {inView ? (
                      <CountUp start={0} end={98} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Happy <br /> customers
                  </div>
                </div>
                {/*  */}
                <motion.a
                  href="tel:+01214546590"
                  variants={FadeIn("up", 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ oncee: false, amount: 0.6 }}
                  className="hidden xl:flex bg-accent hover:bg-accent-hover rounded-[10px] w-full  justify-center items-center h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
                >
                  Call Us
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
