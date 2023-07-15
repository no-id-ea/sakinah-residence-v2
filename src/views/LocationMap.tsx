import { LocationDetail } from "@/components";

import { location, locations } from "@/constants";

const LocationMap = () => {
  return (
    <section className="flex flex-col items-center justify-start w-full h-full py-20 md:py-28 lg:py-32 gradient-product">
      <div className="flex flex-col w-full max-w-[1440px] items-center px-14">
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="font-lato font-bold text-3xl md:text-4xl lg:text-[48px] text-shadow text-center pb-10">
            {location.title}
          </h2>
          <p className="font-lato font-medium text-[18px] md:text-[20px] lg:text-[24px] text-gandalf text-center">
            {location.description}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full">
          {locations.map((item, idx) => (
            <LocationDetail
              key={idx}
              title={item.title}
              address={item.address}
              gmaps={item.gmaps}
              reverse={item.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
