"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "../util/variants";

const Cta = () => {
  return (
    <section
      className="pt-24 xl:pt-48 flex items-end pb-0 bg-[#b2b7c2]/10"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          <div className="flex-1 mb-12 text-center xl:ml-24 md:text-left md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2
                variants={FadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Download our App now and hit the round with ease
              </motion.h2>
              <motion.p
                variants={FadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.6 }}
                className="mb-10"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita quam corrupti similique placeat tenetur itaque
                molestias nam, at in alias.
              </motion.p>
              <motion.div
                variants={FadeIn("right", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.6 }}
                className="flex justify-center gap-x-3 md:justify-start"
              >
                <button className="btn-cta">
                  {" "}
                  <Image
                    src={"/icons/buttons/google-play.svg"}
                    alt=""
                    width={132}
                    height={36}
                  />
                </button>
                <button className="btn-cta">
                  {" "}
                  <Image
                    src={"/icons/buttons/app-store.svg"}
                    alt=""
                    width={132}
                    height={36}
                  />
                </button>
              </motion.div>
            </div>
          </div>
          {/*  */}
          <motion.div
            variants={FadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex justify-center flex-1 order-1 md:order-none"
          >
            <Image
              src="/images/cta/phone.svg"
              alt=""
              width={320}
              height={640}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
