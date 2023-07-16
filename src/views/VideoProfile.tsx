import Link from "next/link";

import { whatsapp, youtubeURL } from "@/constants";

const VideoProfile = () => {
  return (
    <section className="flex items-center justify-center w-full h-full py-20 md:py-28 lg:py-32 bg-wood">
      <div className="flex flex-col w-full h-full items-center justify-center max-w-[1440px] px-14">
        <div className="flex flex-col-reverse items-center justify-center w-full h-full gap-10 md:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full space-y-5">
            <h2 className="text-2xl font-bold font-lato md:text-3xl lg:text-4xl text-shadow">
              Siap untuk meningkatkan kualitas hidup Anda?
            </h2>
            <p className="text-base font-normal font-lato md:text-lg lg:text-xl text-grey">
              Jangan sia-siakan momen ini. Hubungi kami sekarang dan mari
              wujudkan rumah impian Anda.
            </p>

            <button className="flex flex-row items-center justify-center space-x-1 cursor-pointer bg-orange rounded-[5px] py-[12px] hover:bg-orange-2 duration-150 transition-all ease-in-out">
              <Link href={whatsapp}>
                <span className="px-5 text-base font-semibold font-montserrat md:text-lg text-snow ">
                  Hubungi Kami
                </span>
              </Link>
            </button>
          </div>
            <iframe
              src={youtubeURL}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
              className="w-full h-full min-h-[200px] lg:min-h-[300px] aspect-video rounded-lg drop-shadow-lg"
            />
        </div>
      </div>
    </section>
  );
};

export default VideoProfile;
