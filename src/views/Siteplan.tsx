import Image from "next/image";

const ProductFacilities = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pb-20 bg-snow">
      <div className="flex flex-col w-full h-full max-w-[1440px] px-10 space-y-10">
        <h2 className="font-lato font-bold text-[48px] text-shadow text-center">
          Siteplan
        </h2>

        <div className="relative w-full h-full min-h-[400px] items-center justify-center">
          <Image
            src={"/siteplan.png"}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Siteplan Sakinah Residence"
            className="object-contain w-full h-full min-h-[400px] rounded-lg drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductFacilities;
