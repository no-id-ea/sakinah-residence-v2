import { FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";

import { contacts } from "@/constants";

const Contact = () => {
  const formatPhoneNumber = (phoneNumber: string): string => {
    const countryCode = phoneNumber.slice(0, 3);
    const areaCode = phoneNumber.slice(3, 5);
    const firstPart = phoneNumber.slice(5, 9);
    const secondPart = phoneNumber.slice(9);

    return `${countryCode} ${areaCode}-${firstPart}-${secondPart}`;
  };
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
                  {contacts.alamat}
                </p>
              </div>

              <div className="flex flex-row items-center justify-start space-x-2">
                <BsFillTelephoneFill className="text-xl md:text-2xl lg:text-3xl text-grey" />
                <a
                  href={`tel:${contacts.telp}`}
                  className="text-lg font-normal font-lato md:text-xl lg:text-2xl"
                >
                  {formatPhoneNumber(contacts.telp)}
                </a>
              </div>
              <div className="flex flex-row items-center justify-start space-x-2">
                <TbMailFilled className="text-[24px]text-xl md:text-2xl lg:text-3xl text-grey" />
                <a
                  href={`mailto:${contacts.email}`}
                  className="text-lg font-normal font-lato md:text-xl lg:text-2xl"
                >
                  {contacts.email}
                </a>
              </div>
            </div>
          </div>

          <iframe
            src={contacts.maps}
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
