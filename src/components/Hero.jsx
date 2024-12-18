import { heroImg, backgroundImg1 } from "../assets/images";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center  xl:h-[699px] xl:px-8 px-6 "
      style={{ backgroundImage: `url(${backgroundImg1})` }}
    >
      <div className=" max-container w-full flex xl:flex-row flex-col pt-20 justify-between gap-12">
        <div className="max-sm:px-0 px-16 max-xl:px-8">
          <h1 className="text-[47px] text-white max-sm:text-3xl font-bold max-sm:leading-[46px] sm:pt-24 pt-14 uppercase ">
            shaping the future of
            <br />
            cross border <br />
            <span className=" text-green-300 inline-block">payment</span> in
            africa
          </h1>
          <p className="text-white text-sm leading-7 pt-6 mb-10 uppercase">
            fast, secure, and low-cost currency exchange solutions <br />
            pay utility bills effortlessly, anytime, anywhere. create <br />
            virtual cards for secure and seamless transactions
          </p>

          <a href="#" className="bg-[#003366] border-2 border-[#003366] hover:border-[#FF6600] rounded-lg text-sm text-white py-5 px-10 uppercase hover:bg-transparent hover:text-white font-semibold">get started</a>
        </div>
        <div className="flex xl:justify-center xl:items-center">
          <img
            src={heroImg}
            alt="image"
            height={500}
            width={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
