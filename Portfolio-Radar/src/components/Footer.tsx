import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";

const navlinks = [
  { id: "defi", nav: "DeFi Ecosystem", link: "/defi-ecosystem" },
  { id: "buy", nav: "Buy Crypto", link: "/buy-crypto" },
  { id: "blog", nav: "Our Blog", link: "/blog" },
  { id: "faq", nav: "FAQ", link: "/faq" },
];

const Footer = () => {
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
    <section className="pb-[50px] font-inter">
      <div className="grid md:grid-cols-4 gap-1 mx-[40px] lg:mx-[70px] mt-[100px] border-t-2 border-gray-800">
        {navlinks.map((link) => (
          <li key={link.id}>
            <NavLink to={link.link}>
              <div>
                <span className="text-lg text-[#A4A8AB] hover:text-white">
                  {link.nav}
                </span>
              </div>
            </NavLink>
          </li>
        ))}
      </div>

      <div className="lg:mx-[70px]  mx-[40px]">
        <div className="text-[18px] mt-[20px] text-[#a4a8abc5]">
          Get Started With PortRadar
        </div>
        <div className="flex lg:justify-end my-[10px] lg:my-0 ">
          <FaTwitter
            size={36}
            className="pr-[10px] cursor-pointer flex"
            color={twitterColor}
            onMouseEnter={() => handleTwitterHover(true)}
            onMouseLeave={() => handleTwitterHover(false)}
          />
          <FaGithub
            size={36}
            className="pr-[10px] cursor-pointer flex"
            color={githubColor}
            onMouseEnter={() => handleGithubHover(true)}
            onMouseLeave={() => handleGithubHover(false)}
          />
          <FaDiscord
            size={36}
            className="pr-[10px] cursor-pointer flex"
            color={discordColor}
            onMouseEnter={() => handleDiscordbHover(true)}
            onMouseLeave={() => handleDiscordbHover(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
