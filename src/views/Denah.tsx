import Image from "next/image";

const Denah = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-4 md:py-6 lg:py-10 bg-snow">
      <div className="flex flex-col w-full h-full max-w-[1440px] px-14 space-y-10">
        <h2 className="text-3xl font-bold text-center font-lato md:text-4xl lg:text-5xl text-shadow">
          Denah Rumah
        </h2>

        <div className="flex flex-col w-full h-full gap-10 md:flex-row">
          <div className="relative items-center justify-center w-full h-full unset-img">
            <Image
              src={"/images/Model.jpg"}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Rumah Sakinah Residence"
              className="object-contain w-full h-full rounded-lg custom-img drop-shadow-lg"
            />
          </div>

          <div className="relative items-center justify-center w-full h-full unset-img">
            <Image
              src={"/images/denah.jpg"}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Denah Sakinah Residence"
              className="object-contain w-full h-full rounded-lg custom-img drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Denah;
