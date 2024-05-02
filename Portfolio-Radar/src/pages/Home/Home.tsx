import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import { HomeImg, PlankImgOne, PlankImgTwo } from "../../assets";

import { Features } from "../../components";
import { styles } from "./home.styles";

export default function Home() {
  const [twitterColor, setTwitterColor] = useState("white");
  const [githubColor, setGithubColor] = useState("white");
  const [discordColor, setDiscordColor] = useState("white");

  const handleTwitterHover = (hover: boolean) => {
    setTwitterColor(hover ? "#A4A8AB" : "white");
  };

  const handleGithubHover = (hover: boolean) => {
    setGithubColor(hover ? "#A4A8AB" : "white");
  };

  const handleDiscordbHover = (hover: boolean) => {
    setDiscordColor(hover ? "#A4A8AB" : "white");
  };

  return (
    <main>
      <section className={`${styles.section}`}>
        <div className="flex-col flex">
          <div className="text-[50px] text-white">
            Start Building <br className="hidden md:flex lg:hidden" /> Your
            Crypto Portfolio Here
          </div>
          <div className={`${styles.text}`}>
            Explore sensational features to <br className="lg:hidden flex" />{" "}
            prepare your best investment in cryptocurrency
          </div>
          <div className="flex mt-[5px] ">
            <FaTwitter
              size={36}
              className={`${styles.icons}`}
              color={twitterColor}
              onMouseEnter={() => handleTwitterHover(true)}
              onMouseLeave={() => handleTwitterHover(false)}
            />
            <FaGithub
              size={36}
              className={`${styles.icons}`}
              color={githubColor}
              onMouseEnter={() => handleGithubHover(true)}
              onMouseLeave={() => handleGithubHover(false)}
            />
            <FaDiscord
              size={36}
              className={`${styles.icons}`}
              color={discordColor}
              onMouseEnter={() => handleDiscordbHover(true)}
              onMouseLeave={() => handleDiscordbHover(false)}
            />
            <button className={`${styles.button}`}>
              <NavLink to="/app-dashboard" className="text-white px-[10px]">
                Launch App
              </NavLink>
            </button>
          </div>
        </div>
        <div className="lg:-mt-[100px]">
          <img src={HomeImg} className="animate-bounce" />
          <img src={PlankImgOne} className={`${styles.img1}`} />
          <img src={PlankImgTwo} className={`${styles.img2}`} />
        </div>
      </section>
      <Features />
    </main>
  );
}
