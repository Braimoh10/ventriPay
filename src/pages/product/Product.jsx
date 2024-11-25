import {
  apple,
  googlePlay,
  RegisterIcon,
  StarIcon,
  transactIcon,
} from "../../assets/icons";
import {
  DashboardImg,
  MobileImg,
  OnboardingImg,
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  ProductBackground,
} from "../../assets/images";
import { Link } from "react-router-dom";
import { trustedIcons } from "../../data";
import PartnersCard from "../../components/PartnersCard";

const Product = () => {
  return (
    <>
      <section
        className="pt-24 bg-cover bg-center  lg:h-[699px] py-5  "
        style={{ backgroundImage: `url(${ProductBackground})` }}
      >
        <div className="max-container w-full">
          <article className="flex flex-col space-y-9 lg:space-y-20 mx-8 lg:mx-32  md:w-4/6 lg:w-2/4">
            <div className="flex flex-col space-y-4">
              <h1 className="text-md md:text-2xl lg:text-4xl font-bold">
                Shaping the future of cross border
                <br /> payment in africa
              </h1>
              <h4 className="text-sm lg:text-lg">
                Introducing VENTRIPAY, The ultimate financial solutions for
                businesses and households. with our user-friendly platforms, you
                can effortlessly pay for your utility bills and convert
                currencies at competitive rates. With ventripay you can never go
                wrong with all your financial transactions because we’ve got you
                covered.{" "}
              </h4>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="uppercase text-sm lg:text-md font-bold">
                download and install our app to perform your transactions
              </p>
              <div className="flex flex-col md:flex-row space-y-3 md:space-x-3 md:space-y-0 ">
                <div className="flex space-x-2 w-52  px-4 py-3 rounded-lg bg-[#003366] capitalize text-white">
                  <img src={googlePlay} alt="goggle-play" className="" />
                  <p>
                    get it on
                    <br /> google play
                  </p>
                </div>
                <div className="flex space-x-2 w-64 px-4 py-3  rounded-lg bg-[#003366] capitalize items-center text-white">
                  <img src={apple} alt="" />
                  <p className="capitalize">
                    download on the
                    <br /> app store
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <p className="xl:mt-10 capitalize text-md lg:text-lg">
                fully licensed by the <span className="uppercase">cbn</span>
              </p>
              <p className="xl:mt-10 capitalize text-md lg:text-lg">
                deposits insured by{" "}
                <span className="inline-block uppercase text-[#003366] font-bold ">
                  ndic
                </span>
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#008080] h-24 py-5">
        <div className="max-container mx-8 lg:mx-32">
          <div className="flex text-white">
            {trustedIcons.map((items) => (
              <PartnersCard key={items.name} {...items} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="max-container mx-8 lg:mx-32">
          <div className="flex justify-between md:space-x-24 ">
            <div className="relative w-2/5 lg:w-2/6 ">
              <img
                src={OnboardingImg}
                alt=""
                className="relative lg:right-0 lg:left-28"
              />
              <div className="bg-slate-50 rounded-lg p-3 lg:-mt-12 lg:h-40 lg:shadow-md">
                <img
                  src={RegisterIcon}
                  alt=""
                  className="w-10 hidden lg:block"
                />
                <h5 className="mt-5">simple account registration</h5>
                <p>quick setup of an account and fantastic benefits</p>
              </div>
            </div>
            <div className="relative w-2/5 lg:w-2/6">
              <img
                src={DashboardImg}
                alt=""
                className="relative lg:right-0 lg:left-28"
              />
              <div className="bg-slate-50 rounded-lg p-3 lg:-mt-10 lg:h-40 lg:shadow-lg">
                <img
                  src={transactIcon}
                  alt=""
                  className="w-10 hidden lg:block"
                />
                <h5 className="mt-3">internal transfer</h5>
                <p>
                  instantaneous transfer to any bank worldwide at any time with
                  a 100% success rate{" "}
                </p>
              </div>
            </div>
            <div className="relative lg:w-2/6 hidden md:block">
              <img
                src={MobileImg}
                alt=""
                className="relative lg:right-0 lg:left-28"
              />
              <div className="bg-slate-50 p-3 rounded-lg lg:-mt-10 lg:h-40 lg:shadow-lg">
                <img src={StarIcon} alt="" className="w-10 hidden lg:block" />
                <h5 className="mt-5">airtime/data top-up</h5>
                <p>airtime/data top-up anytime anyday</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="max-container mx-8 lg:mx-32">
          <div>
            <h1 className="text-2xl font-bold text-center mb-8">
              our features and services
            </h1>
            <div className="bg-[#008080] flex flex-col md:flex-row space-y-3 md:space-y-0  md:space-x-5 p-4 md:py-10 md:px-14">
              <div className="md:w-2/4 lg:pt-16 lg:pr-20 ">
                <h2 className="uppercase font-bold text-md lg:text-lg">
                  FUND YOUR ACCOUNT, MAKE TRANSFERS,
                  PAY BILLS WITH VENTRIPAY
                </h2>
                <p className="text-md lg:text-lg">
                  Transfer funds Quickly, easily, and confidently with our seamless and reliable feature. You can pay for your utility bills as well 
                </p>
               
              </div>

              <div className="md:w-2/4">
                <img src={Product1} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="max-container mx-8 lg:mx-32">
          <div className=" flex flex-col-reverse md:flex-row space-y-3 md:space-y-0  md:space-x-5 p-4 md:py-10 md:px-14">
            <div className="md:w-2/4">
              <img src={Product2} alt="" className="" />
            </div>
            <div className="md:w-2/4 lg:pt-16 lg:pl-20">
              <h2 className="uppercase font-bold">
                GET A VIRTUAL CARD WITH VENTRIPAY
                
              </h2>
              <p className="mb-4"> 
              Introducing virtual card for your online payments Enjoy convenience and control. Compatible with popular online platforms.
              </p>
             
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-5">
        <div className="max-container mx-8 lg:mx-32">
          <div className=" flex flex-col space-y-3 md:space-y-0  md:flex-row md:space-x-5 p-4 md:py-10 md:px-14">
            <div className="md:w-2/4 lg:pr-20 lg:pt-14" >
              <h2 className="uppercase font-bold">
                CURRENCY EXCHANGE
                
              </h2>
              <p>
              Convert your money from one currency to anothet with our  currency exchang feature. Also, you can save your money in foreign currencies with this same feature.
              </p>
              
            </div>
            <div className="md:w-2/4">
              <img src={Product3} alt="" className="" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-[#008080]">
        <div className="max-container mx-8 lg:mx-32">
          <div className=" flex flex-col space-y-3 md:space-y-0  md:flex-row md:space-x-5 p-4 md:py-10 md:px-14">
            <div className="md:w-2/4">
              <h2 className="uppercase font-bold">
                DATA SECURITY AND PRIVACY
              </h2>
              <p>
              Your security is our top priority. we use bank -grade encryption, two-factor authentication, and strict data protection policies tosafeguard your information. 
              </p>
            
            </div>
            <div className="md:w-2/4">
              <img src={Product4} alt="" className="" />
            </div>
          </div>
          <div className=" flex flex-col space-y-3 md:space-y-0  md:flex-row md:space-x-5 p-4 md:py-10 md:px-14">
            <div className="md:w-2/4">
              <h2 className="uppercase font-bold">
                CUSTOMER SERVICE

              </h2>
              <p>
              Expert support, always available. reach us 24/7 via phone, email, or chat for prompt assistance.
              </p>
             
            </div>
            <div className="md:w-2/4">
              <img src={Product5} alt="" className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Product;
