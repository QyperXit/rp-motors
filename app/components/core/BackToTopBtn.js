"use client";

import React, { useEffect, useState } from "react";

import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";

const BackToTopBtn = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Link
      to="home"
      smooth={true}
      className={`${
        !isActive && "hidden"
      } fixed flex items-center justify-center w-12 h-12 text-white border-2 border-white cursor-pointer bg-accent hover:bg-accent-hover z-10 right-16 bottom-11`}
    >
      <FaChevronUp className="text-xl" />
    </Link>
  );
};

export default BackToTopBtn;
