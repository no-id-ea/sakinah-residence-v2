import Image from "next/image";
import { Description } from "@/components";

import { about } from "@/constants";

const AboutUs = () => {
  return (
    <section className="flex items-center justify-center w-full h-full py-20 md:py-28 lg:py-32 gradient-about">
      <div className="flex flex-col space-y-10 h-full w-full max-w-[1440px] px-10">
        <h2 className="font-lato font-bold text-3xl md:text-4xl lg:text-[48px] text-center">
          {about.title}
        </h2>

        <div className="flex flex-col items-center justify-center w-full h-full gap-10 md:flex-row">
          <div className="relative flex items-center justify-center w-full h-full unset-img">
            <Image
              src="/images/sakinah-4.jpg"
              fill={true}
              alt="Tentang Sakinah Residence"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg custom-img drop-shadow-lg"
            />
          </div>
          <Description title={about.subtitle} description={about.description} />
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full gap-10 md:flex-row">
          <Description title="Visi Kami" description={about.visi} />
          <Description title="Misi Kami" description={about.misi} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
