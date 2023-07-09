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
    <section className="flex items-center justify-center w-full h-full bg-center bg-no-repeat bg-cover bg-banner-hero text-snow">
      <div className="flex items-center justify-center w-full h-full bg-gradient-to-t from-furniture to-transparent">
        <div className="flex flex-row items-start justify-center w-full h-full max-w-[1440px] py-20 px-10">
          {/* Contact and Location */}
          <div className="flex flex-col items-start justify-center w-2/3 h-full space-y-2">
            <div className="relative w-full h-full max-w-[300px] min-w-[200px] items-center justify-center">
              <Image
                src={"/logo-sakinah.png"}
                alt="Logo Perumahan Sakinah Residence"
                width={200}
                height={200}
                className="object-cover object-center w-full h-full"
              />
            </div>

            <p className="font-lato font-normal text-[20px]">
              Kunjungi Kantor Pemasaran kami sekarang dan temukan informasi
              lebih detail tentang perumahan impian Anda
            </p>

            <div className="flex flex-col items-start justify-start space-y-2">
              <div className="flex flex-row items-center justify-start space-x-2">
                <FaLocationArrow className="text-[24px]" />
                <p className="font-lato font-normal text-[20px]">
                  Perumahan Sakinah Residence No. 01 Sumberanyar, Paiton, Kab.
                  Probolinggo
                </p>
              </div>

              <div className="flex flex-row items-center justify-start space-x-2">
                <BsFillTelephoneFill className="text-[24px]" />
                <a
                  href="tel:+6281234567890"
                  className="font-lato font-normal text-[20px]"
                >
                  +62 812-3456-7890
                </a>
              </div>
            </div>

            <div className="flex flex-row items-center justify-start space-x-2">
              <TbMailFilled className="text-[24px]" />
              <a
                href="mailto:griyakusakinahku16@gmail.com"
                className="font-lato font-normal text-[20px]"
              >
                griyakusakinahku16@gmail.com
              </a>
            </div>
          </div>

          {/* Link and Social Media */}
          <div className="grid w-full h-full grid-cols-2 gap-5 px-5 py-5">
            <div className="flex items-end justify-end w-full h-full">
              <div className="flex flex-col space-y-5">
                <p className="font-lato font-medium text-[24px]">Menu</p>
                {links.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className="font-lato font-normal text-[20px] hover:font-bold duration-150 transition-all text-snow ease-in-out"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-start space-y-5">
              <p className="font-lato font-medium text-[24px]">
                Social Networks
              </p>
              <div className="flex flex-row items-start justify-center w-full h-full space-x-5">
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
      </div>
    </section>
  );
};

export default Footer;
