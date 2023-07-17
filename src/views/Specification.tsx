"use client";

import { BsFileEarmarkPdfFill } from "react-icons/bs";

import { specifications } from "@/constants";
import useDownloader from "react-use-downloader";
import { DownloadProps, SpecificationProps } from "@/types";

const Download = ({ name, url }: DownloadProps) => {
  const { download } = useDownloader();

  return (
    <button
      className="flex flex-row items-center justify-center space-x-1 cursor-pointer bg-orange rounded-[5px] py-[12px] hover:bg-orange-2 duration-150 transition-all ease-in-out"
      onClick={() => download(url, name)}
    >
      <div className="flex flex-row items-center justify-center gap-2 px-5">
        <BsFileEarmarkPdfFill className="text-xl md:text-2xl lg:text-3xl text-snow" />
        <span className="text-lg font-semibold font-montserrat md:text-xl lg:text-2xl text-snow">
          Download Brosur
        </span>
      </div>
    </button>
  );
};

const Specification = ({ name, brochure }: SpecificationProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-20 md:py-28 lg:py-32 bg-snow">
      <div className="flex flex-col md:flex-row w-full h-full max-w-[1440px] px-14 gap-10 lg:gap-20">
        <div className="flex flex-col items-start justify-start w-full h-full space-y-4">
          <h1 className="text-3xl font-bold border-b-8 font-general md:text-4xl lg:text-5xl border-orange text-shadow whitespace-nowrap">
            {name}
          </h1>
          <p className="text-lg font-normal font-lato md:text-xl lg:text-2xl text-grey">
            Selamat datang di &quot;Sakinah Residence&quot; - perumahan yang
            dirancang dengan spesifikasi luar biasa untuk memenuhi segala
            kebutuhan dan gaya hidup modern Anda. Kami bangga mempersembahkan
            rumah-rumah berkualitas tinggi yang menawarkan kenyamanan,
            fungsionalitas, dan keindahan yang tak tertandingi.
          </p>
          <p className="text-lg font-normal font-lato md:text-xl lg:text-2xl text-grey">
            Setiap rumah di Sakinah Residence didesain dengan teliti untuk
            memberikan ruang yang luas dan fungsional bagi Anda dan keluarga.
            Tersedia berbagai pilihan tata letak yang cerdas, termasuk ruang
            keluarga yang nyaman, kamar tidur yang luas, ruang kerja yang
            produktif, dan area bersantai yang menenangkan. Kami memastikan
            bahwa setiap bagian dari rumah ini dapat memenuhi kebutuhan
            sehari-hari Anda.
          </p>
        </div>

        <div className="flex flex-col items-start justify-start w-full h-full space-y-4">
          <h3 className="text-xl font-bold font-lato md:text-2xl lg:text-2xl text-shadow">
            Spesifikasi Rumah:
          </h3>

          <ul className="px-5 list-disc">
            {specifications.map((item, idx) => (
              <li key={idx}>
                <span className="pr-1 font-semibold font-lato texl-lg md:text-xl lg:text-2xl text-shadow">
                  {item.title}:
                </span>
                <span className="font-medium font-lato texl-lg md:text-xl lg:text-2xl text-grey">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
          <Download {...brochure} />
        </div>
      </div>
    </div>
  );
};

export default Specification;
