const About = () => {
  return (
    <section className=" container p-5 mx-auto flex flex-col items-center justify-center  lg:flex-row lg:justify-between lg:p-12 gap-6 lg:gap-0 mb-16">
      {/* Image */}
      <div className="w-full mb-6 lg:mb-0 lg:w-1/2 lg:order-2">
        <img
          src="src\assets\shared\mobile\image-best-gear.jpg"
          alt="Audio Gear"
          className="w-full h-auto object-cover sm:hidden rounded-lg"
        />
        <img
          src="src\assets\shared\tablet\image-best-gear.jpg"
          alt="Audio Gear"
          className="w-full h-auto object-cover hidden sm:block lg:hidden rounded-lg"
        />
        <img
          src="src\assets\shared\desktop\image-best-gear.jpg"
          alt="Audio Gear"
          className="w-full h-[600px] object-cover hidden lg:block rounded-lg "
        />
      </div>

      {/* Text Content */}
      <div className="w-full flex flex-col lg:items-start lg:text-start  justify-center items-center lg:w-2/5 lg:h-full text-center lg:order-1 gap-6 mb-12 ">
        <h2 className="text-3xl md:text-6xl font-semibold mb-4 lg:text-5xl uppercase  ">
          Bringing you the <span className="text-orange-500">best</span> audio
          gear
        </h2>
        <p className="md:text-xl text-gray-500 ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default About;
