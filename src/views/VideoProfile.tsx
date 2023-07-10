import Link from "next/link";
import { YellowButton } from "@/components";

import { whatsapp } from "@/constants";

const VideoProfile = () => {
  return (
    <section className="flex items-center justify-center w-full h-full py-20 bg-wood">
      <div className="flex flex-col w-full h-full items-center justify-center max-w-[1440px] px-10">
        <div className="flex flex-row items-center justify-center w-full h-full min-h-[300px] gap-20">
          <div className="flex flex-col items-start justify-center w-full h-full space-y-5">
            <h2 className="font-lato font-bold text-[36px] text-shadow">
              Siap untuk meningkatkan kualitas hidup Anda?
            </h2>
            <p className="font-lato font-normal text-[24px] text-grey">
              Jangan sia-siakan momen ini. Hubungi kami sekarang dan mari
              wujudkan rumah impian Anda.
            </p>
            <YellowButton>
              <Link href={whatsapp}>
                <span className="font-montserrat font-semibold text-[18px] text-snow px-5 ">
                  Hubungi Kami
                </span>
              </Link>
            </YellowButton>
          </div>
          <iframe
            src="https://www.youtube.com/embed/dtV39_DKauo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
            className="w-full h-full min-h-[300px] rounded-2xl drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoProfile;
