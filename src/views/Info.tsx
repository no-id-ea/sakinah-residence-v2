import { informations } from "@/constants";

import { InfoSide } from "@/components";

const Info = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-40 py-20 bg-gradient-to-r from-gray-100 to-gray-300 text-shadow">
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


