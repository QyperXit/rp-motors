import Brands from "./Brands";
import CarSlider from "./CarSlider";

const Cars = () => {
  return (
    <section className="flex items-center h-screen " id="cars">
      <div className="container mx-auto">
        <Brands />
        <CarSlider />
      </div>
    </section>
  );
};

export default Cars;
