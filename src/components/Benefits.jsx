import { benefits, steps } from "../data";
import BenefitsCard from "./BenefitsCard";
import Steps from "./Steps";


const Benefits = () => {
  return (
    <section className="px-8 py-12 sm:px-40 bg-[#008080]">
      <div className="max-container w-full flex flex-col justify-center items-center ">
        <h1 className="uppercase mb-8 text-sm md:text-2xl font-bold px-8 text-white text-center">
          benefits of choosing ventripay
        </h1>
        <div className=" grid grid-cols lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-8  ">
          {benefits.map((benefit) => (
            <BenefitsCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
      <div className="max-container w-full flex flex-col items-center mt-8 ">
        <h1 className="text-white text-sm md:text-2xl font-bold uppercase text-center px-12 mb-8">
          getting your virtual card
          <span className="block">
          <hr className="w-20  mx-auto border-white " />
          </span>
        </h1>
       
        <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 place-items-center gap-10">
          {
            steps.map((step,index)=>(
              <Steps key={index} 
              {...step} 
              
              />
              
            ))
            
          }
          
        </div>

      </div>
    </section>
  );
};
export default Benefits;