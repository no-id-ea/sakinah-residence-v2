import { informations } from "@/constants";

import { InfoSide } from "@/components";

const Info = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full max-h-[1000px] pt-20 bg-gradient-to-br from-wood to-wood-2 text-shadow">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-[1440px] px-10 gap-10 bg-transparent">
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
