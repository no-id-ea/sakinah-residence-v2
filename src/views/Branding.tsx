import Image from "next/image";
import Link from "next/link"

import { whatsapp } from "@/constants";

const Branding = () => {
  return (
    <section className="flex items-center justify-center w-full h-full bg-furniture text-snow">
      <div className="flex flex-col md:flex-row items-center max-w-[1440px] justify-between w-full h-full">
        <div className="flex flex-col items-start justify-start w-full h-full py-10 space-y-5 bg-center bg-cover px-14 bg-branding lg:bg-none">
          <h2 className="text-3xl font-bold md:text-4xl font-lato">
            Siap untuk meningkatkan kualitas hidup Anda?
          </h2>
          <p className="text-lg font-medium font-lato md:text-xl">
            Jangan sia-siakan momen ini. Hubungi kami sekarang dan mari wujudkan
            rumah impian Anda.
          </p>
          <Link href={whatsapp}  className="py-[20px] px-[16px] bg-orange rounded-[5px] font-montserrat font-semibold text-[16px] md:text-[20px] lg:text-[24px] hover:bg-orange-2 duration-150 transition-all ease-in-out cursor-pointer">
            Hubungi Kami
          </Link>
        </div>

        <div className="relative items-center justify-center hidden w-full h-full lg:flex unset-img">
          <Image
            src={"/images/branding-3.jpg"}
            alt="Branding Perumahan Sakinah Residence"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center w-full h-full custom-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Branding;
