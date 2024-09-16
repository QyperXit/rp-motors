import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const FloatingItems = () => {
  // Animation variants
  const styleWithTransform = (additionalTransform) => ({
    transform: `translate(${additionalTransform})`,
    animation: "float 4s ease-in-out infinite",
  });

  return (
    <div>
      <div
        className="absolute animate-floatWithTranslate "
        style={{
          "--tw-translate-x": "60%",
          "--tw-translate-y": "115%",
          animationDelay: "1s",
        }}
      >
        <Image
          src={"/icons/FloatingIcons/brakeDisc.png"}
          width={132}
          height={36}
          alt=""
        />
      </div>
      <div
        className="absolute animate-floatWithTranslate "
        style={{ "--tw-translate-x": "-60%", "--tw-translate-y": "150%" }}
      >
        <Image
          src={"/icons/FloatingIcons/drill.png"}
          width={132}
          height={36}
          alt=""
          className="-rotate-45 "
        />
      </div>
      <div
        className="rotate-90 -z-30 animate-floatWithTranslate "
        style={{
          "--tw-translate-x": "490%",
          "--tw-translate-y": "100%",
          animationDelay: "2s",
        }}
      >
        <Image
          src={"/icons/FloatingIcons/wrench.png"}
          width={132}
          height={36}
          alt=""
        />
      </div>
      <div
        className="z-20 rotate-90 fl animate-floatWithTranslate "
        style={{
          "--tw-translate-x": "510%",
          "--tw-translate-y": "130%",
          animationDelay: "1s",
        }}
      >
        <Image
          src={"/icons/FloatingIcons/shocksAbs.png"}
          width={132}
          height={36}
          alt=""
          className="scale-x-[-1]"
        />
      </div>
    </div>
  );
};

export default FloatingItems;
