import Link from "next/link";

import { Qna } from "@/components";
import { faqs } from "@/constants";

const Faq = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full py-4 space-y-5 md:py-6 lg:py-10 px-14 gradient-product">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-[1440px]">
        <h2 className="font-lato font-bold text-3xl md:text-4xl lg:text-[48px] text-shadow text-center">
          Pertanyaan yang Sering Diajukan
        </h2>

        <div className="flex flex-col items-center justify-center w-full h-full space-y-5">
          {faqs.map((item, index) => (
            <Qna key={index} question={item.question} answer={item.answer} />
          ))}

          <div className="bg-transparent collapse collapse-arrow text-shadow">
            <input type="checkbox" />
            <div className="collapse-title">
              <p className="text-xl font-normal md:text-2xl font-lato">
                Bank apa saja yang berkerja sama dengan Karya Cipta Sakinah?
              </p>
            </div>
            <div className="collapse-content">
              <p className="text-base font-normal font-lato md:text-lg">
                Bank yang sudah berkerja sama dengan Karya Cipta Sakinah adalah{" "}
                <span className="font-bold">BCA</span>,{" "}
                <span className="font-bold">Mandiri</span>,{" "}
                <span className="font-bold">BNI</span>,{" "}
                <span className="font-bold">CIMB Niaga</span>, dan{" "}
                <span className="font-bold">DANAMON</span>.
              </p>
            </div>

            <div className="mx-4 border-b-2 border-shadow" />
          </div>

          <div className="bg-transparent collapse collapse-arrow text-shadow">
            <input type="checkbox" />
            <div className="collapse-title">
              <p className="text-xl font-normal md:text-2xl font-lato">
                Apa ada promo yang sedang berlangsung di Karya Cipta Sakinah?
              </p>
            </div>
            <div className="collapse-content">
              <p className="text-base font-normal font-lato md:text-lg">
                Untuk melihat promo yang sedang berlangsung, Anda bisa
                mengunjungi halam promo{" "}
                <Link href="/promos" className="font-bold">
                  di sini
                </Link>
                .
              </p>
            </div>

            <div className="mx-4 border-b-2 border-shadow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
