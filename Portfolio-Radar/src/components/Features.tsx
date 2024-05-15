import { FeatureImg, FeatureImgThree, FeatureImgFour, Arrow } from "../assets";

const featuresArr = [
  {
    id: 1,
    img: FeatureImg,
    title: "Manage Portfolio",
    para: "Buy and sell popular digital currencies, keep track of them in the one place.",
    link1: "See Explained",
    link2: Arrow,
  },
  {
    id: 2,
    img: FeatureImgThree,
    title: "Cryptocurrency Variety",
    para: "Supports a variety of the most popular digital currencies and always uptodate.",
    link1: "See Explained",
    link2: Arrow,
  },
  {
    id: 3,
    img: FeatureImgFour,
    title: "Learn Best Practice",
    para: "Easy to know how to cryptocurrency works and friendly to newbie.",
    link1: "See Explained",
    link2: Arrow,
  },
];

const Features = () => {
  return (
    <section className="font-inter">
      <div>
        <div className="flex flex-col md:flex-row text-[30px] ml-[20px] md:ml-[80px] lg:justify-center mt-[15px] font-bold">
          <div>
            <span className="text-white">Port</span>
            <span className="text-[#0CAF60]">Radar</span>{" "}
          </div>
          <div className="text-white md:ml-[7px]"> Amazing Features</div>
        </div>
        <div className="flex lg:justify-center mx-[20px] md:mx-[80px] lg:mx-0 text-[20px] text-[white]">
          Explore sensational features to prepare your best investment in
          cryptocurrency
        </div>

        <div className="grid lg:grid-cols-3 gap-4 md:mx-[80px] mx-[30px] mt-[70px]">
          {featuresArr.map((feature, index) => (
            <div
              key={feature.id}
              className="border rounded-lg border-[#8080807e] pl-[30px] p-[20px] h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 cursor-pointer"
            >
              <img src={feature.img} alt={feature.title} className="w-1/4" />
              <h3 className="text-white text-[20px] pt-[10px]">
                {feature.title}
              </h3>
              <p className="text-[#B6B6B6] text-left py-[10px] mr-[50px]">
                {feature.para}
              </p>
              <div
                className={`flex pr-[5px] ${
                  index === 2 ? "lg:mt-[20px] xl:mt-[5px]" : ""
                }`}
              >
                <a href="#" className="text-[#0CAF60]">
                  {feature.link1}
                </a>
                <img src={feature.link2} alt="Arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
