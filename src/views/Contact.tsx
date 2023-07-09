import { FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";

const Contact = () => {
  return (
    <section className="flex items-center justify-center w-full h-full py-20 bg-wood">
      <div className="flex flex-col w-full h-full items-center justify-center max-w-[1440px] px-10">
        <div className="flex flex-row items-center justify-center w-full h-full gap-20">
          <div className="flex flex-col items-start justify-start w-full h-full space-y-5">
            <p className="font-lato font-normal text-[18px] text-grey">
              Anda butuh informasi lebih lengkap?
            </p>
            <h2 className="font-lato font-bold text-[40px] text-shadow">
              Kunjungi Kantor Marketing Kami
            </h2>
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
          </div>

          <iframe
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.6960209608606!2d113.51602677431313!3d-7.715729092302189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7038484881b23%3A0x481b10811d2e42c7!2sSakinah%20Residence!5e0!3m2!1sen!2sid!4v1688873361538!5m2!1sen!2sid"
            }
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[400px] rounded-lg drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
