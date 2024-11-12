import Brands from "./Brands";
import GeneralSlider from "./GeneralSlider ";
import Services from "./Services";

const SwipeSlider = () => {
  return (
    <section className="flex items-center h-screen " id="cars">
      <div className="container mx-auto">
        <Brands />
        <GeneralSlider />
        {/* <Services /> */}
      </div>
    </section>
  );
};

export default SwipeSlider;
