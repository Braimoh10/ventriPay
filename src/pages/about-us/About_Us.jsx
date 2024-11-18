import { coreStrength, Mission } from "../../data";

const About_Us = () => {
  return (
    <>
      <section className="pt-24 pb-5 flex flex-col items-center justify-center px-8 lg:px-32 ">
        <div className="max-container bg-[#CCD6E0] rounded-lg px-3 md:px-8 py-10">
          <article className="flex flex-col text-center space-y-4">
            <h1 className="text-md md:text-2xl font-bold">
              Drive financial freedom with VentriPay—Africa’s most innovative
              fintech
              <br />
              <span className="lg:mt-3 block">
                solution for seamless, affordable international payments.
              </span>
            </h1>
            <h4 className="text-sm md:text-lg leading-8 md:mx-7">
              VentriPay is a cutting-edge fintech solution focused on making
              international payments within Africa seamless, affordable, and
              efficient. This brand identity guide outlines the visual elements
              that define VentriPay’s brand and ensures consistency across all
              platforms and media. With VentriPay, you can pay utility bills ,
              Create virtual cards for secure and seamless transactions. Join
              the evolution and discover a smarter way to manage your finances
              in Africa. Sign up now and start enjoying the benefits of fast,
              secure and affordable transactions!
            </h4>
          </article>
        </div>
      </section>

      {/* our  mission section */}
      <section className="px-8 lg:px-32 py-4">
        <div className="max-container">
          <article className="flex flex-col items-center justify-center space-y-3">
            <h1 className="text-md md:text-2xl font-bold">
              Empowering Your Success,
            </h1>
            <h1 className="text-sm md:text-xl font-bold text-[#008080]">
              Our Mission, Vision and Goal
            </h1>
            <p className="text-md md:text-lg  md:mx-10 text-center">
              At VentriPay, our user-centric approach ensures that every
              solution is designed to enhance your financial freedom, driving
              seamless transactions and efficiency at every step. We’re
              committed to delivering services that add value to your financial
              life, empowering growth and success in every transaction.
            </p>
          </article>

          <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0  py-8 ">
            {Mission.map(({ name, icon, desc, titleColor }) => (
              <article
                key={name}
                className="w-full md:w-1/3 bg-[#CCD6E0] px-4 py-4 rounded-lg"
              >
                <div className="flex flex-col space-y-2">
                  <img src={icon} alt={name} className="w-12" />
                  <h4 className={`uppercase font-bold ${titleColor}`}>
                    {name}
                  </h4>
                </div>
                <p className="mt-1">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* core values section */}
      <section className="px-8 lg:px-32 ">
        <div className="max-container">
          <article className="flex flex-col justify-center items-center ">
            <h1 className="text-2xl font-bold mb-6">
              our<span className="text-vision-color">core strengths</span>
            </h1>
            <div className="text-center w-full md:w-4/5">
              <p className="text-md md:text-lg leading-7">
                At VentriPay, we take pride in the core strengths that define
                our commitment to seamless financial solutions and customer
                satisfaction. Our innovative approach is backed by continuous
                research and technological advancement, ensuring that we deliver
                tailored payment solutions designed to meet your specific needs.
              </p>
              <p className="text-md md:text-lg text-mission-color mt-2">
                Join VentriPay today to unlock new financial possibilities. Your
                success, our mission.
              </p>
            </div>
          </article>
          <article className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 text-white py-5">
            {coreStrength.map(({ icon, title, desc }, index) => (
              <div
                key={title}
                className={`
                  ${index === 0 || index === coreStrength.length - 1
                    ? "col-span-1 xl:col-span-2"
                    : "col-span-1 md:col-span-1"
                  }  bg-gradient-to-b from-[#09111A] to-[#376CA0] rounded-xl p-4 `}
              >
                <img src={icon} alt={title} className="w-10" />
                <h3 className="my-2 font-semibold">{title}</h3>
                <p className="text-sm leading-6 mb-2">{desc}</p>
                <p className="text-mission-color font-semibold">start with us</p>
              </div>
            ))}
          </article>
         
        </div>
      </section>
    </>
  );
};
export default About_Us;
