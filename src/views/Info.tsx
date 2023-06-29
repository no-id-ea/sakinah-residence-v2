import { informations } from "@/constants";

import { InfoSide } from "@/components";

const Info = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-20 py-32 bg-gradient-to-br from-wood to-wood-2 text-shadow">
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
  );
};

export default Info;


