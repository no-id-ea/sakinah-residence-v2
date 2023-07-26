import { links } from "@/constants";

import Image from "next/image";
import Link from "next/link";
import {
  FaLocationArrow,
  FaTiktok,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <section className="flex items-center justify-center w-full h-full py-4 bg-center bg-no-repeat bg-cover bg-footer md:py-6 lg:py-10 text-snow">
      <div className="flex flex-col md:flex-row items-start justify-start space-y-5 w-full h-full max-w-[1440px] px-14">
        {/* Contact and Location */}
        <div className="flex flex-col items-start justify-start w-full space-y-4">
          <div className="flex items-start justify-start w-44 md:w-52 lg:w-64 unset-img">
            <Image
              src={"/images/logo-sakinah.png"}
              alt="Logo Perumahan Sakinah Residence"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center custom-img"
            />
          </div>

          <p className="text-base font-normal md:text-xl font-lato">
            Kunjungi <span className="font-bold">Kantor Pemasaran</span> kami sekarang dan temukan informasi lebih
            detail tentang perumahan impian Anda
          </p>

          <div className="flex flex-col items-start justify-start space-y-2">
            <div className="flex flex-row items-center justify-center space-x-4">
              <FaLocationArrow className="text-xl md:text-2xl" />
              <p className="text-base font-normal font-lato md:text-xl">
                Perumahan Sakinah Residence No. 01 Sumberanyar, Paiton, Kab.
                Probolinggo
              </p>
            </div>

            <div className="flex flex-row items-center justify-center space-x-4">
              <BsFillTelephoneFill className="text-xl md:text-2xl" />
              <a
                href="https://api.whatsapp.com/send/?phone=6281231994893&text=Hallo%0ASaya+ingin+tahu+informasi+lebih+lanjut+tentang+Sakinah+Residence&type=phone_number&app_absent=0"
                className="text-base font-normal font-lato md:text-xl"
              >
                +62 812-3456-7890
              </a>
            </div>
            <div className="flex flex-row items-center justify-center space-x-4">
              <TbMailFilled className="text-xl md:text-2xl" />
              <a
                href="mailto:griyakusakinahku16@gmail.com"
                className="text-base font-normal font-lato md:text-xl"
              >
                griyakusakinahku16@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Link and Social Media */}
        <div className="grid w-full h-full grid-cols-2 gap-5 md:px-10">
          <div className="flex items-start justify-start w-full h-full">
            <div className="flex flex-col space-y-5">
              <p className="text-2xl font-medium font-lato md:text-3xl">Menu</p>
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-lg font-normal transition-all duration-150 ease-in-out font-lato md:text-xl hover:font-bold text-snow"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-start justify-start space-y-5">
            <p className="font-lato text-center font-medium text-[24px] w-full">Social Networks</p>
            <div className="flex flex-row items-start justify-center w-full space-x-5">
              <Link href="https://www.facebook.com/">
                <FaInstagram className="text-[32px] cursor-pointer" />
              </Link>
              <Link href="https://www.facebook.com/">
                <FaFacebook className="text-[32px] cursor-pointer" />
              </Link>
              <Link href="https://www.facebook.com/">
                <FaTiktok className="text-[32px] cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
