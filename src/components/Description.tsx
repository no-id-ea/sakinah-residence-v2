import { DescriptionProps } from "@/types";

const Description = ({ title, description }: DescriptionProps) => {
  return (
    <div className="flex flex-col w-full h-full space-y-5">
      <h3 className="font-lato font-bold text-[36px]">{title}</h3>
      <p className="font-lato font-normal text-[24px] text-justify">
        {description}
      </p>
    </div>
  );
};

export default Description;
