"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { SearchContext } from "../context/search";
import businessData from "@/public/schema/local-business.json";

const Header = () => {
  const { setSearchActive } = useContext(SearchContext);
  const businessSchema = businessData


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

      // search
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
      if (!DesktopMode && window.scrollY > 0 && nav) {
        setNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
      <header
          className={`${
              header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
          } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
          itemScope
          itemType="https://schema.org/AutoRepair"
      >
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(businessSchema)}}
        />
        <div className="flex flex-col mx-auto xl:container xl:flex-row xl:justify-between xl:items-center">
          <div
              onClick={() => setNav(!nav)}
              className="flex items-center justify-between px-4"
          >
            {/* logo */}
            <Link
                to="home"
                smooth="true"
                spy="true"
                className="cursor-pointer"
                itemProp="url"
                title="R P MotorServices Logo"
            >
              <Image src={"/icons/rp.png"} width={194} height={64} alt={"R P MotorServices Logo"}
                     priority
                     itemProp="logo"
              />
            </Link>
            {/* nav open */}
            <div className="cursor-pointer xl:hidden"
                 aria-label="Toggle navigation menu"
                 aria-expanded={nav}
                 aria-controls="main-navigation">
              {nav ? (
                  <BiX className="text-4xl"/>
              ) : (
                  <BiMenuAltRight className="text-4xl"/>
              )}
            </div>
          </div>
          {/* nav  */}
          <nav
              className={`${
                  nav ? "max-h-max py-8 xl:py-0" : "max-h-0 xl:max-h-max"
              } flex flex-col w-full bg-white gap-y-6 overflow-hidden  font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
              aria-label="Main navigation"
          >
            <Link
                className="cursor-pointer"
                to="home"
                activeclass="active"
                smooth="true"
                spy="true"
            >
              Home
            </Link>
            <Link
                className="cursor-pointer"
                to="cars"
                activeclass="active"
                smooth="true"
                spy="true"
                itemProp="makesOffer"
                title="Car Repair"
            >
              Auto Repair
            </Link>

            <Link
                className="cursor-pointer"
                to="testimonials"
                activeclass="active"
                smooth="true"
                spy="true"
            >
              Testimonials
            </Link>
            <Link
                className="cursor-pointer"
                to="why"
                activeclass="active"
                smooth="true"
                spy="true"
            >
              Why Us
            </Link>
            <Link
                className="cursor-pointer"
                to="about"
                activeclass="active"
                smooth="true"
                spy="true"
            >
              About
            </Link>
            <Link
                className="cursor-pointer"
                to="contact"
                activeclass="active"
                smooth="true"
                spy="true"
            >
              Contact
            </Link>
            <a
                href="tel:01214546590"
                className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
                to="/"
                activeclass="active"
                smooth="true"
                spy="true"
                itemProp="telephone"
                aria-label="Call R P Motors"
            >
              Call Us
            </a>
          </nav>
        </div>
      </header>
  );
};

export default Header;
