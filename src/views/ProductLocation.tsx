import { ProductLocationProps } from "@/types";

const ProductLocation = ({ location }: ProductLocationProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-4 md:py-6 lg:py-10 bg-furniture">
      <div className="flex flex-col w-full h-full max-w-[1440px] px-14 space-y-10">
        <h2 className="text-3xl font-bold text-center font-lato md:text-4xl lg:text-5xl text-snow">
          Lokasi
        </h2>

        <iframe
          src={location}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full min-h-[400px] rounded-lg drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default ProductLocation;
