"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MdBuild, MdPeople, MdStar } from "react-icons/md";
import { FadeIn } from "../../util/variants";

const Why = () => {
  return (
    <section className="flex items-center section" id="why">
      <div className="container mx-auto">
        <motion.h2
          variants={FadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
          className="text-center h2"
        >
          Quality Repairs with a Personal Touch
        </motion.h2>
        <motion.p
          variants={FadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
          className="max-w-[680px] text-center mx-auto mb-2"
        >
          At our shop, we combine top-notch service with affordable prices. Our
          reputation for quality and reliability is built on the trust of our
          loyal customers who keep coming back and recommending us.
        </motion.p>
        <motion.div
          variants={FadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
          className="justify-center hidden mb-6 md:flex xl:mb-2"
        >
          <Image
            src={"/images/why/bluecar.png"}
            width={1060}
            height={420}
            alt={""}
          />
        </motion.div>
        <motion.div
          variants={FadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]"
        >
          {/* item 1 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdBuild className="text-[38px] text-accent mb-4" />
            <h3 className="h3"> Skilled Repairs</h3>
            <p className="hidden xl:flex">
              Our experienced technicians ensure every job is done right the
              first time, providing you with peace of mind.
            </p>
          </div>
          {/* item 2 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdStar className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Top Quality Service</h3>
            <p className="hidden xl:flex">
              We use high-quality parts and the latest techniques to keep your
              vehicle running smoothly.
            </p>
          </div>
          {/* item 3 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdPeople className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Friendly and Reliable</h3>
            <p className="hidden xl:flex">
              Our customers are our priority. We treat you like family, with
              honest advice and a commitment to keeping costs down.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
