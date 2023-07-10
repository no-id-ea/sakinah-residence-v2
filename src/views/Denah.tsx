import Image from "next/image";

const Denah = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pb-20 bg-snow">
      <div className="flex flex-col w-full h-full max-w-[1440px] px-10 space-y-5">
        <h2 className="font-lato font-bold text-[48px] text-shadow text-center">
          Denah Rumah
        </h2>

        <div className="flex flex-row w-full h-full max-w-[1440px] gap-20 min-h-[400px]">
          <div className="relative w-full h-full min-h-[400px] items-center justify-center">
            <Image
              src={"/rumah.png"}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Rumah Sakinah Residence"
              className="object-cover w-full h-full min-h-[400px] rounded-lg drop-shadow-xl"
            />
          </div>

          <div className="relative w-full h-full min-h-[400px] items-center justify-center">
            <Image
              src={"/denah.png"}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Denah Sakinah Residence"
              className="object-cover w-full h-full min-h-[400px] rounded-lg drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Denah;
