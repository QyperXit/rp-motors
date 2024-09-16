import Brands from "./Brands";
import CarSlider from "./CarSlider";
import Services from "./Services";

const Cars = () => {
  return (
    <section className="flex items-center h-screen " id="cars">
      <div className="container mx-auto">
        <Brands />
        <CarSlider />
        {/* <Services /> */}
      </div>
    </section>
  );
};

export default Cars;
