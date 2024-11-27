import './benefits.css'
import { Service1, Service2, Service3, Service4, Service5, Service6, Service7, Service8 } from "../../assets/images";

const Benefits = () => {
  return (
    <section className="pt-24 ">
    <div className="max-container mx-8 lg:mx-32">
      <h1 className=" text-center pb-5 text-default text-md md:text-2xl font-bold">BENEFITS OF VIRTUAL CARD</h1>
      <div className="py-5 bg-[#008080] text-white md:flex space-y-5 md:space-y-0  md:space-x-5 p-4 md:py-10 md:px-14 mb-4 ">
        <div className="md:w-2/4 lg:pt-16 lg:pr-20">
          <h2 className="uppercase font-bold text-md lg:text-lg ">
          EASE OF CANCELLATION
          </h2>
          <p className=" text-md lg:text-lg">
          If Virtual Card is compromised it can be easily cancelled 
          And Replaced without Affecting The User's Primary Account
          </p>
        </div>
        <div className="md:w-2/4">
          <img src={Service1} alt="" className="w-full"/>
        </div>
      </div>

      <div className="py-5 text-default flex flex-col-reverse md:flex-row space-y-5 md:space-y-0  md:space-x-5 p-4 md:py-10 md:px-14 mb-4">
      <div className="md:w-2/4">
          <img src={Service2} alt="" className="w-full"/>
        </div>
        <div className="md:w-2/4 lg:pl-24 lg:pt-16 ">
          <h2 className="uppercase font-bold text-md lg:text- mb-4 ">
          ENHANCE SECURITY
          </h2>
          <p className=" text-md lg:text-lg mb-5 ">
          Virtual Card Reduce The Risk Of Fraud By Generating A Unique Card Number For Each Transaction, Which Can Help Prevent Unauthorized Use.
          </p>
        </div>
       
      </div>

      <div className="bg-[#008080] py-5 text-white md:flex space-y-5 lg:space-y-0  md:space-x-5 p-4 md:py-10 md:px-14 mb-4">
        <div className="md:w-2/4 lg:pt-16 lg:pr-24">
          <h2 className="uppercase font-bold text-md lg:text- mb-4 ">
          FLEXIBILITY
          </h2>
          <p className=" text-md lg:text-lg ">
          If Virtual Card is compromised ,it can be easily cancelled And Replaced without Affecting The User's Primary Account
          </p>
        </div>
        <div className="md:w-2/4">
          <img src={Service3} alt="" className="w-full"/>
        </div>
      </div>

      <div className="py-5 text-default flex flex-col-reverse md:flex md:flex-row  space-y-5 lg:space-y-0  md:space-x-5 p-4 md:py-10 md:px-14 mb-4">
      <div className="md:w-2/4">
          <img src={Service4} alt="" className="w-full"/>
        </div>
        <div className="md:w-2/4 lg:pl-24 lg:pt-16 ">
          <h2 className="uppercase font-bold text-md lg:text- mb-4 ">
          IMPROVE ACCOUNTABILITY
          </h2>
          <p className=" text-md lg:text-lg mb-4">
          Virtual Card refers To The Increased Transparency And Control These Cards offer In Financial Transactions
          </p>
        </div>
       
      </div>
     
      <div className="py-5 bg-[#008080] text-white md:flex space-y-5 lg:space-y-0  md:space-x-5 p-4 md:py-10 md:px-14 mb-4">
        <div className="md:w-2/4 lg:pt-14 lg:pr-24 ">
          <h2 className="uppercase font-bold text-md lg:text- mb-4 ">
          FRAUD PROTECTION
          </h2>
          <p className=" text-md lg:text-lg ">
          Fraud protection Is A Key feature Of Virtual Cards, Designed To Enhance Security for Online Transactions
          </p>
        </div>
        <div className="md:w-2/4">
          <img src={Service5} alt="" className="w-full"/>
        </div>
      </div>
     
      <div className="py-5 text-default flex flex-col-reverse md:flex-row space-y-3 lg:space-y-0  md:space-x-5 p-4 md:py-10 md:px-14 mb-4">
      <div className="md:w-2/4">
          <img src={Service6} alt="" className="w-full"/>
        </div>
        <div className="md:w-2/4 lg:pl-24 lg:pt-10 ">
          <h2 className="uppercase font-bold text-md lg:text- mb-4 ">
          GLOBAL ACCEPTANCE
          </h2>
          <p className=" text-md lg:text-lg mb-4">
          Virtual Cards Are Typically Accepted Anywhere That Accepts Major Credit Cards, Providing Users With FLexibility In International Transactions.
          </p>
        </div>
       
      </div>

      <div className="py-5 bg-[#008080] text-white md:flex space-y-5 lg:space-y-0  md:space-x-5 p-4 md:py-10 md:px-14 mb-4">
        <div className="md:w-2/4 lg:pt-14 lg:pr-20">
          <h2 className="uppercase font-bold text-md lg:text- mb-4 ">
          EASE OF ONLINE PURCHANCE
          </h2>
          <p className=" text-md lg:text-lg ">
          Users Can Set Up Virtual Cards For Subscription Services, Helping To Mange Recurring Payments Without Exposing Primary Card Information
          And Replaced without Affecting The User's Primary Account
          </p>
        </div>
        <div className="md:w-2/4">
          <img src={Service7} alt="" className="w-full"/>
        </div>
      </div>

      <div className="text-default flex flex-col-reverse md:flex-row space-y-3 lg:space-y-0  md:space-x-5 p-4 md:py-10 md:px-14 mb-4">
      <div className="md:w-2/4">
          <img src={Service8} alt="" className="w-full"/>
        </div>
        <div className="md:w-2/4 lg:pl-24 lg:pt-10 ">
          <h2 className="uppercase font-bold text-md lg:text- mb-4 ">
          BUDGETING TOOLS
          </h2>
          <p className=" text-md lg:text-lg mb-4">
          Many virtual Card Services Offer Budgeting And Trading Users Manage Their Finances More Effectively
          </p>
        </div>
       
      </div>
    </div>
  </section>
  )
}
export default Benefits