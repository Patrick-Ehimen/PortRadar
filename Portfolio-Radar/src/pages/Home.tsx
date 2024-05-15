import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import { HomeImg, PlankImgOne, PlankImgTwo } from "../assets";

import { Features } from "../components";

const Home = () => {
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
      <section className="lg:mt-[150px] mt-[50px] font-inter flex lg:flex-row flex-col md:mx-[80px] mx-[20px]">
        <div className="flex-col flex">
          <div className="text-[50px] text-white">
            Start Building <br className="hidden md:flex lg:hidden" /> Your
            Crypto Portfolio Here
          </div>
          <div className="text-white text-[18px] my-[10px]">
            Explore sensational features to <br className="lg:hidden flex" />{" "}
            prepare your best investment in cryptocurrency
          </div>
          <div className="flex mt-[5px] ">
            <FaTwitter
              size={36}
              className="pr-[10px] cursor-pointer hidden lg:flex"
              color={twitterColor}
              onMouseEnter={() => handleTwitterHover(true)}
              onMouseLeave={() => handleTwitterHover(false)}
            />
            <FaGithub
              size={36}
              className="pr-[10px] cursor-pointer hidden lg:flex"
              color={githubColor}
              onMouseEnter={() => handleGithubHover(true)}
              onMouseLeave={() => handleGithubHover(false)}
            />
            <FaDiscord
              size={36}
              className="pr-[10px] cursor-pointer hidden lg:flex"
              color={discordColor}
              onMouseEnter={() => handleDiscordbHover(true)}
              onMouseLeave={() => handleDiscordbHover(false)}
            />
            <button className="lg:hidden h-[50px] w-auto mt-[10px] transform transition duration-500 ease-in-out hover:scale-110 bg-[#0caf60] rounded-lg">
              <NavLink to="/app-dashboard" className="text-white px-[5px]">
                Launch App
              </NavLink>
            </button>
          </div>
        </div>
        <div className="lg:-mt-[100px]">
          <img src={HomeImg} className="animate-bounce" />
          <img
            src={PlankImgOne}
            className="lg:-mt-[200px] -mt-[180px] md:-mt-[300px] -ml-[200px] lg:-ml-[300px] z-0"
          />
          <img
            src={PlankImgTwo}
            className="lg:-mt-[300px] md:-mt-[300px] md:ml-[80px] -mt-[150px] ml-[20px] lg:ml-[79px] z-0"
          />
        </div>
      </section>
      <Features />
    </main>
  );
};

export default Home;
