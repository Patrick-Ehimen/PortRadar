import { defi } from "../constants";

const DeFiEcosystem = () => {
  return (
    <section className="mt-[50px] font-inter">
      <div className="mx-[20px] lg:mx-[80px] ">
        <h3 className="text-white text-[30px] ">
          Explore a variety of DeFi Protocols
        </h3>
        <p className="mt-[10px] text-[#A4A8AB]">
          Swap, earn, vote, and more with hundreds of DeFi apps, integrations,
          and tools built in the DeFi Ecosystem.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
          {defi.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 p-4 rounded-xl cursor-pointer "
            >
              <div className="flex">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-4/12 h- object-cover rounded-lg mb-2"
                />
                <div className="bg-black text-white h-fit p-[10px] rounded-lg ml-[150px]">
                  {item.tag}
                </div>
              </div>
              <h4 className="text-white text-lg font-semibold">{item.title}</h4>
              <p className="text-gray-400">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeFiEcosystem;
