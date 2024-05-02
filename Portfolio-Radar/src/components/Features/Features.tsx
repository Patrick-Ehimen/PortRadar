import {
  FeatureImg,
  FeatureImgThree,
  FeatureImgFour,
  Arrow,
} from "../../assets";

import { styles } from "./features.styles";

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

export default function Features() {
  return (
    <section className="font-inter">
      <div>
        <div className={`${styles.sectionMainDiv}`}>
          <div>
            <span className="text-white">Port</span>
            <span className="text-[#0CAF60]">Radar</span>{" "}
          </div>
          <div className="text-white md:ml-[7px]"> Amazing Features</div>
        </div>
        <div className={`${styles.featureText}`}>
          Explore sensational features to prepare your best investment in
          cryptocurrency
        </div>

        <div className={`${styles.featureMapDiv}`}>
          {featuresArr.map((feature, index) => (
            <div key={feature.id} className={`${styles.featureMapDivChild}`}>
              <img src={feature.img} alt={feature.title} className="w-1/4" />
              <h3 className={`${styles.featureH3}`}>{feature.title}</h3>
              <p className={`${styles.featurePara}`}>{feature.para}</p>
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
}
