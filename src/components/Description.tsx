import { DescriptionProps } from "@/types";

const Description = ({ title, description }: DescriptionProps) => {
  return (
    <div className="flex flex-col w-full h-full space-y-5">
      <h3 className="text-2xl font-bold font-lato md:text-3xl lg:text-4xl">{title}</h3>
      <p className="text-base font-normal text-justify font-lato md:text-lg lg:text-xl">
        {description}
      </p>
    </div>
  );
};

export default Description;
