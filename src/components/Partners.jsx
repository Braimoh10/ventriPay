import { Link } from "react-router-dom";
import { trustedIcons } from "../data";
import PartnersCard from "./PartnersCard";

const Partners = () => {
  return (
    <>
      <section className="px-6 sm:py-12 py-16">
        <div className="flex max-lg:flex-col justify-between  gap-10 w-full max-container ">
          <div className="flex flex-col  xl:px-16">
            <h1 className="lg:max-w-lg text-md md:text-2xl font-bold uppercase">
              want to partner with us?
              <br />
              let’s explore the future together
            </h1>
            <div className="my-7 uppercase">
              <Link
                to="/"
                className="bg-[#003366] border-2 border-[#003366] 
                  hover:border-[#FF6600] rounded-lg text-sm
                  text-white py-5 px-10 uppercase hover:bg-transparent
                  hover:text-[#008080] font-semibold"
              >
                get started
              </Link>
            </div>
          </div>
          <div className="max-sm:px-1 text-center px-16 py-10 flex flex-col ">
            <h1 className="lg:max-w-lg text-md md:text-2xl font-bold mb-5 uppercase">
              trusted partners
            </h1>
            <div className="flex items-center ">
              {trustedIcons.map((item) => (
                <PartnersCard key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};
export default Partners;
