"use client";

import Image from "next/image";

import {
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
  MdOutlineMapsHomeWork,
} from "react-icons/md";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import { FadeIn } from "../util/variants";

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
              src={"/images/about/car01.png"}
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
                Car services simplified
              </motion.h2>
              <motion.p
                variants={FadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ oncee: false, amount: 0.6 }}
                classname="mb-[42px] max-w-md"
              >
                Rent, choose and repair with ease. Our convenient locations,
                diverse car types, and reliable repair points ensure a seamless
                car experience.
              </motion.p>
              {/*  */}
              <motion.div
                variants={FadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ oncee: false, amount: 0.2 }}
                className="flex items-center mb-12 gap-x-8"
              >
                {/*  */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent" />
                  <div className="mb-2 text-3xl font-black">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    car <br /> types
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent" />
                  <div className="mb-2 text-3xl font-black">
                    {inView ? (
                      <CountUp start={0} end={125} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    rental <br /> outlets
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent" />
                  <div className="mb-2 text-3xl font-black">
                    {inView ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    repair <br /> points
                  </div>
                </div>
                {/*  */}
                <motion.button
                  variants={FadeIn("up", 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ oncee: false, amount: 0.6 }}
                  className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
                >
                  See all cars
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
