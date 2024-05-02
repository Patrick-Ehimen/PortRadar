import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo, closeMenu, Menu } from "../../assets";
import { styles } from "./navbar.styles";

// Define navigation links for the navbar
const navlinks = [
  { id: "defi", nav: "DeFi Ecosystem", link: "/defi-ecosystem" },
  { id: "buy", nav: "Buy Crypto", link: "/buy-crypto" },
  { id: "blog", nav: "Our Blog", link: "/blog" },
  { id: "faq", nav: "FAQ", link: "/faq" },
  // { id: "dashboard", nav: "Launch App", link: "/app-dashboard" },
];

export default function Nabar() {
  const [toggle, setToggle] = useState(false); // Manage mobile menu toggle state

  return (
    <nav className={`${styles.navbar}`}>
      {/* Logo and application name */}
      <NavLink to="/">
        <div className={`${styles.logoMainDiv}`}>
          <img src={Logo} />
          <div className={`${styles.logoTextMainDiv}`}>
            <div className="my-[20px]">
              <span className="text-white">PORT</span>
              <span className="text-[#0CAF60]"> RADAR</span>
            </div>
          </div>
        </div>
      </NavLink>

      {/* Desktop navigation */}
      <div className={`${styles.desktopMainDiv}`}>
        <ul className="flex">
          {navlinks.map((link) => (
            <li key={link.id} className="flex mx-[20px]">
              <NavLink to={link.link}>
                <div>
                  <span className={`${styles.desktopSpanDiv}`}>{link.nav}</span>
                </div>
              </NavLink>
            </li>
          ))}
          <button className={`${styles.desktopButton}`}>
            <NavLink
              target="blank"
              to="/app-dashboard"
              className={`${styles.desktopNavLinks}`}
            >
              Launch App
            </NavLink>
          </button>
        </ul>
      </div>

      {/* Responsive navigation items (for smaller screens) */}
      <div className={`${styles.smallScreenMainDiv}`}>
        <div
          className={`${styles.smallScreenBlur} ${
            toggle ? "-x-0" : "translate-x-full"
          } `}
        >
          <div className={`${styles.smallScreenMenuDiv}`}>
            {navlinks.map((link) => (
              <NavLink
                to={link.link}
                onClick={() => {
                  setToggle(false); // Close the mobile menu when a link is clicked
                }}
                key={link.id}
              >
                <div className="flex">
                  <span className={`${styles.smallScreenSpanDiv}`}>
                    {link.nav}{" "}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <img
          src={toggle ? closeMenu : Menu}
          alt="menu"
          className={`${styles.toggleMenuImgDiv}`}
          onClick={() => setToggle((prev) => !prev)} // Toggle the mobile menu
        />
      </div>
    </nav>
  );
}
