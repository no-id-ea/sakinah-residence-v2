import { FacilitiesCard } from "@/components";

import { facilities } from "@/constants";

const ProductFacilities = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-4 md:py-6 lg:py-10 bg-snow">
      <div className="flex flex-col w-full h-full max-w-[1440px] px-14 space-y-10">
        <h2 className="text-3xl font-bold text-center font-lato md:text-4xl lg:text-5xl text-shadow">
          Fasilitias
        </h2>

        <div className="grid w-full h-full gap-5 auto-rows-auto md:grid-cols-3 lg:grid-cols-4">
          {facilities.map((item, idx) => (
            <FacilitiesCard key={idx} image={item.src} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFacilities;
