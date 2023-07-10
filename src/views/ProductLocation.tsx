const ProductLocation = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-20 bg-furniture">
      <div className="flex flex-col w-full h-full max-w-[1440px] px-10 space-y-10">
        <h2 className="font-lato font-bold text-[48px] text-snow text-center">
          Lokasi
        </h2>

        <iframe
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.6960209608606!2d113.51602677431313!3d-7.715729092302189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7038484881b23%3A0x481b10811d2e42c7!2sSakinah%20Residence!5e0!3m2!1sen!2sid!4v1688873361538!5m2!1sen!2sid"
          }
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
