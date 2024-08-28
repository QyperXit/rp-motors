"use client";

import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Image
              src={"/icons/servicesIcons/suspension.svg"}
              width={60}
              height={60}
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
