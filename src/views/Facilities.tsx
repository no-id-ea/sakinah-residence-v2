import Image from "next/image";
import { FacilitiesCard } from "@/components";

import { facilities } from "@/constants";

const Facilities = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full max-h-[1000px] py-20 bg-white text-shadow">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-[1440px] px-10 gap-10 bg-transparent">
        <div className="grid w-full h-full gap-5 auto-rows-auto md:grid-cols-4">
          {facilities.map((item, idx) => (
            <FacilitiesCard key={idx} image={item.src} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
