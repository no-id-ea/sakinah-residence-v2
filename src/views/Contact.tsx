import { FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";

const Contact = () => {
  return (
    <section className="flex items-center justify-center w-full h-full py-20 md:py-28 lg:py-32 bg-wood">
      <div className="flex flex-col w-full h-full items-center justify-center max-w-[1440px] px-14">
        <div className="flex flex-col items-center justify-center w-full h-full gap-10 md:flex-row">
          <div className="flex flex-col items-start justify-start w-full h-full space-y-3">
            <p className="text-base font-normal font-lato md:text-lg lg:text-xl text-grey">
              Anda butuh informasi lebih lengkap?
            </p>
            <h2 className="text-2xl font-bold font-lato md:text-3xl lg:text-4xl text-shadow">
              Kunjungi Kantor Marketing Kami
            </h2>
            <div className="flex flex-col items-start justify-start space-y-2">
              <div className="flex flex-row items-center justify-start space-x-2">
                <FaLocationArrow className="text-xl md:text-2xl lg:text-3xl text-grey" />
                <p className="text-lg font-normal font-lato md:text-xl lg:text-2xl">
                  Perumahan Sakinah Residence No. 01 Sumberanyar, Paiton, Kab.
                  Probolinggo
                </p>
              </div>

              <div className="flex flex-row items-center justify-start space-x-2">
                <BsFillTelephoneFill className="text-xl md:text-2xl lg:text-3xl text-grey" />
                <a
                  href="tel:+6281234567890"
                  className="text-lg font-normal font-lato md:text-xl lg:text-2xl"
                >
                  +62 812-3456-7890
                </a>
              </div>
              <div className="flex flex-row items-center justify-start space-x-2">
                <TbMailFilled className="text-[24px]text-xl md:text-2xl lg:text-3xl text-grey" />
                <a
                  href="mailto:griyakusakinahku16@gmail.com"
                  className="text-lg font-normal font-lato md:text-xl lg:text-2xl"
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
