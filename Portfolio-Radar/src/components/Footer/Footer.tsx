import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";

import { styles } from "./foooter.styles";

const navlinks = [
  { id: "defi", nav: "DeFi Ecosystem", link: "/defi-ecosystem" },
  { id: "buy", nav: "Buy Crypto", link: "/buy-crypto" },
  { id: "blog", nav: "Our Blog", link: "/blog" },
  { id: "faq", nav: "FAQ", link: "/faq" },
];

export default function Footer() {
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
    <section className={`${styles.section}`}>
      <div className={`${styles.navLinkMainDiv}`}>
        {navlinks.map((link) => (
          <li key={link.id}>
            <NavLink to={link.link}>
              <div>
                <span className={`${styles.navLinkSpan}`}>{link.nav}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </div>

      <div className="lg:mx-[70px]  mx-[40px]">
        <div className={`${styles.footerText}`}>Get Started With PortRadar</div>
        <div className={`${styles.iconDiv}`}>
          <FaTwitter
            size={36}
            className={`${styles.icon}`}
            color={twitterColor}
            onMouseEnter={() => handleTwitterHover(true)}
            onMouseLeave={() => handleTwitterHover(false)}
          />
          <FaGithub
            size={36}
            className={`${styles.icon}`}
            color={githubColor}
            onMouseEnter={() => handleGithubHover(true)}
            onMouseLeave={() => handleGithubHover(false)}
          />
          <FaDiscord
            size={36}
            className={`${styles.icon}`}
            color={discordColor}
            onMouseEnter={() => handleDiscordbHover(true)}
            onMouseLeave={() => handleDiscordbHover(false)}
          />
        </div>
      </div>
    </section>
  );
}
