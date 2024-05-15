import { FaTwitter, FaDiscord } from "react-icons/fa";

import { faq } from "../constants";

const Faq = () => {
  return (
    <section className="font-inter mt-[50px] ">
      <div className="text-white text-[30px] mx-[20px] lg:mx-[80px] mb-[20px] md:mx-[80px]">
        Frequently Asked Questions
      </div>
      <div className="flex flex-col lg:flex-row mx-[20px] md:mx-[80px]">
        <div className="lg:w-6/12">
          {faq.map((item, index) => (
            <div key={item.id}>
              <h3 className="text-[25px] text-white mt-[50px]">
                {item.question}
              </h3>
              <p className="text-[16px] text-[#A4A8AB] mb-[15px]">
                {item.answer}
              </p>
              <p
                className={`text-[16px] text-[#A4A8AB] border-b-2 border-[#A4A8AB] pb-[20px] ${
                  index === 2 ? "border-b-0 " : ""
                }`}
              >
                {item.answer2}
              </p>
            </div>
          ))}
        </div>
        <div className="lg:ml-[200px]">
          <div className="flex border rounded-xl hover:bg-gray-800 p-[20px] mb-[15px] pr-[40px] cursor-pointer">
            <FaDiscord size={36} color={"#A4A8AB"} />
            <div className="text-white text-[20px] mt-[3px] ml-[10px]">
              Discord
            </div>
          </div>
          <div className="flex border rounded-xl hover:bg-gray-800 p-[20px] pr-[40px] cursor-pointer">
            <FaTwitter size={36} color={"#A4A8AB"} />
            <div className="text-white text-[20px] mt-[3px] ml-[10px]">
              Twitter
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
