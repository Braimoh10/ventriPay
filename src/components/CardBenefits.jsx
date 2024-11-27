import { cardBenefits } from "../data";
import CardBenefit from "./CardBenefit";
import { sectionImg } from "../assets/images";
import { Link } from "react-router-dom";

const CardBenefits = () => {
  return (
    <section
      className="px-8  py-8 bg-cover sm:bg-middle md:bg-center xl:bg-right-top"
      style={{ backgroundImage: `url(${sectionImg})` }}
    >
      <div className="max-container w-full flex flex-col justify-center items-center">
        <h1 className="text-md md:text-2xl font-bold mb-8 xl:mb-12 uppercase text-center text-white">
          virtual card benefits
          <span className="block">
            <hr className="w-44 mx-auto border-white " />
          </span>
        </h1>

        <div className=" grid grid-cols lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-8 mb-8">
          {cardBenefits.map((card) => (
            <CardBenefit key={card.label} {...card} />
          ))}
        </div>
        <Link
          to="/benefits"
          className=" bg-[#003366] border-2 border-[#003366] 
          hover:border-[#FF6600] rounded-lg text-sm
           text-white py-5 px-10 uppercase hover:bg-transparent
            hover:text-[#008080] font-semibold"
        >
          learn more
        </Link>
      </div>
    </section>
  );
};
export default CardBenefits;
