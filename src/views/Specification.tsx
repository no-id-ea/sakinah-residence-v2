import Link from "next/link";
import { YellowButton } from "@/components";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

import { specifications } from "@/constants";

const Download = () => {
  return (
    <YellowButton>
      <Link
        href={"/"}
        className="flex flex-row items-center justify-center gap-3 px-2"
      >
        <BsFileEarmarkPdfFill className="text-[20px] text-snow" />
        <span className="font-montserrat font-semibold text-[18px] text-snow">
          Download Brosur
        </span>
      </Link>
    </YellowButton>
  );
};

const Specification = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-20 bg-snow">
      <div className="flex flex-row w-full h-full max-w-[1440px] px-10 gap-20">
        <div className="flex flex-col items-start justify-start w-full h-full space-y-2">
          <h1 className="font-general font-semibold text-[64px] border-b-8 rounded-lg border-orange text-shadow">
            Sakinah Residence
          </h1>
          <p className="font-lato font-medium text-[24px] text-grey">
            Selamat datang di &quot;Sakinah Residence&quot; - perumahan yang
            dirancang dengan spesifikasi luar biasa untuk memenuhi segala
            kebutuhan dan gaya hidup modern Anda. Kami bangga mempersembahkan
            rumah-rumah berkualitas tinggi yang menawarkan kenyamanan,
            fungsionalitas, dan keindahan yang tak tertandingi.
          </p>
          <p className="font-lato font-medium text-[24px] text-grey"> 
            Setiap rumah di Sakinah Residence didesain dengan teliti untuk
            memberikan ruang yang luas dan fungsional bagi Anda dan keluarga.
            Tersedia berbagai pilihan tata letak yang cerdas, termasuk ruang
            keluarga yang nyaman, kamar tidur yang luas, ruang kerja yang
            produktif, dan area bersantai yang menenangkan. Kami memastikan
            bahwa setiap bagian dari rumah ini dapat memenuhi kebutuhan
            sehari-hari Anda.
          </p>
        </div>

        <div className="flex flex-col items-start justify-start w-full h-full space-y-2">
          <h3 className="font-lato font-semibold text-[36px] text-shadow">
            Spesifikasi Rumah:
          </h3>

          <ul className="list-disc">
            {specifications.map((item, idx) => (
              <li key={idx}>
                <span className="font-lato font-semibold text-[24px] text-shadow pr-1">
                  {item.title}:
                </span>
                <span className="font-lato font-medium text-[24px] text-grey">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
          <Download />
        </div>
      </div>
    </div>
  );
};

export default Specification;
