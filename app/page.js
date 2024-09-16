import Cars from "./components/content/Cars";
import MapLocation from "./components/content/MapLocation";
import Testimonial from "./components/content/Testimonial";
import Why from "./components/content/Why";
import About from "./components/core/About";
import BackToTopBtn from "./components/core/BackToTopBtn";
import Footer from "./components/core/Footer";
import Header from "./components/core/Header";
import Hero from "./components/core/Hero";

export default function Home() {
  return (
    <main className=" max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      {/* <Cta /> */}
      <MapLocation />
      <Footer />
      <BackToTopBtn />
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
