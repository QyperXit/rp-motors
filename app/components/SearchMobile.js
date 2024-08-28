import DateSelection from "./DateSelection";
import EngineTuning from "./EngineTuning";
import HourSelection from "./HourSelection";
import LocationSelection from "./LocationSelection";
const SearchMobile = () => {
  return (
    <div className="font-medium xl:hidden">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          <LocationSelection />
          <DateSelection />
          <HourSelection />
          <EngineTuning />
          {/* <div className="flex items-center px-6 ">
            <button className="btn btn-sm btn-accent w-[164px] mx-auto">
              Search
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
