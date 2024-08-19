"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const DesktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    //add the event listener header-
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    //remmove the event listener
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:justify-between xl:items-center">
        <div
          onClick={() => setNav(!nav)}
          className="flex justify-between items-center px-4"
        >
          {/* logo */}
          <Link
            href={"home"}
            smooth={DesktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image
              src={"/icons/logo.svg"}
              width={194}
              height={64}
              alt={"logo"}
            />
          </Link>
          {/* nav open */}
          <div className="xl:hidden cursor-pointer">
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* nav  */}
        <nav
          className={`${
            nav ? "max-h-max py-8 xl:py-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden  font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={DesktopMode}
            spy={true}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="cars"
            activeClass="active"
            smooth={DesktopMode}
            spy={true}
          >
            Cars
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={DesktopMode}
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="testimonials"
            activeClass="active"
            smooth={DesktopMode}
            spy={true}
          >
            Testimonals
          </Link>
          <Link
            className="cursor-pointer"
            to="why"
            activeClass="active"
            smooth={DesktopMode}
            spy={true}
          >
            Why Us
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={DesktopMode}
            spy={true}
          >
            Contact
          </Link>
          <Link
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            to="/"
            activeClass="active"
            smooth={DesktopMode}
            spy={true}
          >
            See all cars
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
