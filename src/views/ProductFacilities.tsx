import { FacilitiesCard } from "@/components";

import { facilities } from "@/constants";

const ProductFacilities = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pb-20 bg-snow">
      <div className="flex flex-col w-full h-full max-w-[1440px] px-10 space-y-10">
        <h2 className="font-lato font-bold text-[48px] text-shadow text-center">
          Fasilitias
        </h2>

        <div className="grid w-full h-full gap-5 auto-rows-auto md:grid-cols-4">
          {facilities.map((item, idx) => (
            <FacilitiesCard key={idx} image={item.src} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFacilities;
