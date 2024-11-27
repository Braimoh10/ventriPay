import { Link } from "react-router-dom";


const AboutUs = () => {
  return (
    <section className="px-8  py-8">
      <div className="max-container w-full flex flex-col justify-center items-center">
        <h1 className="text-center text-md md:text-2xl font-bold uppercase mb-6">about us</h1>
        <p className="text-center text-sm md:text-md mb-8 leading-6 sm:leading-8 px-4 sm:px-32 xl:px-48 uppercase">
          With VentriPay, you can pay utility bills, Create virtual cards for
          secure and seamless transactions. Join the evolution and discover a
          smarter way to manage your finances in Africa. Sign up now and start
          enjoying the benefits of fast, secure and affordable transactions!
        </p>
        <div>
          <Link
            to="/about-us"
            className="bg-[#003366] border-2 border-[#003366] 
          hover:border-[#FF6600] rounded-lg text-sm
           text-white py-5 px-10 uppercase hover:bg-transparent
            hover:text-[#008080] font-semibold"
          >
            learn more
          </Link>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
