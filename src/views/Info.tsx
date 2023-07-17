import { informations } from "@/constants";

import { InfoSide } from "@/components";

const Info = () => {
  return (
    <section id="get-started" className="flex flex-col items-center justify-center w-full h-full py-20 md:py-28 lg:py-32 gradient-info text-shadow">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-[1440px] px-14 gap-10 bg-transparent">
        {informations.map((info, idx) => (
          <InfoSide
            key={idx}
            description={info.description}
            title={info.title}
            image={info.image}
            reverse={info.reverse}
          />
        ))}
      </div>
    </section>
  );
};

export default Info;
