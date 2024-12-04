import { Link } from "react-router-dom";
import { Blog1, Blog2, Blog3, Blog4, Blog5, Blog6, Blog7 } from "../../assets/images";

const Blog = () => {
  return (
    <section className="py-24 px-8 ">
      <div className="max-container md:mx-16 xl:mx-32">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" mb-4 text-center text-md md:text-xl lg:text-3xl uppercase text-[#008080] font-bold">
            stay informed with the latest updates
          </h1>
          <h4 className=" lg:px-20 text-center text-md md:text-lg">
            on VentriPay blog will present you exciting news & trends,
            resources, career opportunities and different aspect you can explore
            in order to stay updated with fintech
          </h4>
        </div>

        <div>
          <h3 className="my-6 font-semibold">recent blog posts</h3>
          <div className="flex flex-col lg:flex-row  lg:space-x-6">
            <div className="lg:w-2/6">
              <article>
                <img src={Blog1} alt="" width={400} className="mb-4" />
                <a
                  href="#"
                  className="border border-[#008080]  text-[#008080] font-bold px-3 py-1 rounded-lg mb-4 capitalize"
                >
                  blockchain
                </a>
                <h2 className="mb-3 mt-3 font-semibold capitalize">
                  this is the headline of the article that is being discussed
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos eius voluptatem deleniti vitae libero sed velit
                  facilis accusamus maiores dolore!
                </p>
                <div className="mt-6 mb-6 text-gray-600 flex space-x-8">
                  <p className="capitalize">muslimah solihu</p>
                  <p>8/11/2024</p>

                </div>
              </article>
            </div>
            <div className="lg:w-4/6">
              <div className="grid md:grid-cols-2 gap-6 md:gap-4">
              <article>
                <img src={Blog2} alt="" width={400} className="mb-4" />
                <a
                  href="#"
                  className="border border-[#008080]  text-[#008080] font-bold px-3 py-1 rounded-lg mb-4 capitalize"
                >
                  career
                </a>
                <h2 className="mb-3 mt-3 font-semibold capitalize">
                  this is the headline of the article that is being discussed
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos eius voluptatem deleniti vitae libero sed velit
                  facilis accusamus maiores dolore!
                </p>
                <div className="mt-6 text-gray-600 flex space-x-8">
                  <p className="capitalize">muslimah solihu</p>
                  <p>8/11/2024</p>

                </div>
              </article>

              <article>
                <img src={Blog3} alt="" width={400} className="mb-4" />
                <a
                  href="#"
                  className="border border-[#008080]  text-[#008080] font-bold px-3 py-1 rounded-lg mb-4 capitalize"
                >
                  Transaction
                </a>
                <h2 className="mb-3 mt-3 font-semibold capitalize">
                  this is the headline of the article that is being discussed
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos eius voluptatem deleniti vitae libero sed velit
                  facilis accusamus maiores dolore!
                </p>
                <div className="mt-6 text-gray-600 flex space-x-8">
                  <p className="capitalize">muslimah solihu</p>
                  <p>8/11/2024</p>

                </div>
              </article>

              <article>
                <img src={Blog6} alt="" width={400} className="mb-4" />
                <a
                  href="#"
                  className="border border-[#008080]  text-[#008080] font-bold px-3 py-1 rounded-lg mb-4 capitalize"
                >
                  ai
                </a>
                <h2 className="mb-3 mt-3 font-semibold capitalize">
                  this is the headline of the article that is being discussed
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos eius voluptatem deleniti vitae libero sed velit
                  facilis accusamus maiores dolore!
                </p>
                <div className="mt-6 text-gray-600 flex space-x-8">
                  <p className="capitalize">muslimah solihu</p>
                  <p>8/11/2024</p>

                </div>
              </article>

              <article>
                <img src={Blog5} alt="" width={400} className="mb-4" />
                <a
                  href="#"
                  className="border border-[#008080]  text-[#008080] font-bold px-3 py-1 rounded-lg mb-4 capitalize"
                >
                  infographics
                </a>
                <h2 className="mb-3 mt-3 font-semibold capitalize">
                  this is the headline of the article that is being discussed
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos eius voluptatem deleniti vitae libero sed velit
                  facilis accusamus maiores dolore!
                </p>
                <div className="mt-6 text-gray-600 flex space-x-8">
                  <p className="capitalize">muslimah solihu</p>
                  <p>8/11/2024</p>

                </div>
              </article>

              <article>
                <img src={Blog7} alt="" width={400} className="mb-4" />
                <a
                  href="#"
                  className="border border-[#008080]  text-[#008080] font-bold px-3 py-1 rounded-lg mb-4 capitalize"
                >
                  investment
                </a>
                <h2 className="mb-3 mt-3 font-semibold capitalize">
                  this is the headline of the article that is being discussed
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos eius voluptatem deleniti vitae libero sed velit
                  facilis accusamus maiores dolore!
                </p>
                <div className="mt-6 text-gray-600 flex space-x-8">
                  <p className="capitalize">muslimah solihu</p>
                  <p>8/11/2024</p>

                </div>
              </article>

              <article>
                <img src={Blog4} alt="" width={400} className="mb-4" />
                <a
                  href="#"
                  className="border border-[#008080]  text-[#008080] font-bold px-3 py-1 rounded-lg mb-4 capitalize"
                >
                  cybersecurity
                </a>
                <h2 className="mb-3 mt-3 font-semibold capitalize">
                  this is the headline of the article that is being discussed
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos eius voluptatem deleniti vitae libero sed velit
                  facilis accusamus maiores dolore!
                </p>
                <div className="mt-6 text-gray-600 flex space-x-8">
                  <p className="capitalize">muslimah solihu</p>
                  <p>8/11/2024</p>

                </div>
              </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
