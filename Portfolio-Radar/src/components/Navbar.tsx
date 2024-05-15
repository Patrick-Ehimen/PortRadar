import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo, closeMenu, Menu } from "../assets";

// Define navigation links for the navbar
const navlinks = [
  { id: "defi", nav: "DeFi Ecosystem", link: "/defi-ecosystem" },
  { id: "buy", nav: "Buy Crypto", link: "/buy-crypto" },
  { id: "blog", nav: "Our Blog", link: "/blog" },
  { id: "faq", nav: "FAQ", link: "/faq" },
  // { id: "dashboard", nav: "Launch App", link: "/app-dashboard" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false); // Manage mobile menu toggle state

  return (
    <nav className="flex items-center justify-between">
      {/* Logo and application name */}
      <NavLink to="/">
        <div className="flex m-[20px] ml-[20px] md:ml-[80px]">
          <img src={Logo} />
          <div className="font-poppins font-black text-xl pt-[10px] px-[10px]">
            <div className="my-[20px]">
              <span className="text-white">PORT</span>
              <span className="text-[#0CAF60]"> RADAR</span>
            </div>
          </div>
        </div>
      </NavLink>

      {/* Desktop navigation */}
      <div className="lg:flex hidden font-inter items-center justify-between mr-[80px]">
        <ul className="flex">
          {navlinks.map((link) => (
            <li key={link.id} className="flex mx-[20px]">
              <NavLink to={link.link}>
                <div>
                  <span className="text-lg text-[#A4A8AB] hover:text-white hover:border-b-2 border-[#0caf60]">
                    {link.nav}
                  </span>
                </div>
              </NavLink>
            </li>
          ))}
          <button className="bg-[#0caf60] p-2 rounded-lg -mt-2">
            <NavLink
              target="blank"
              to="/app-dashboard"
              className="text-white hover:text-[#e8eaec]"
            >
              Launch App
            </NavLink>
          </button>
        </ul>
      </div>

      {/* Responsive navigation items (for smaller screens) */}
      <div className="lg:hidden flex items-center flex-1 font-inter justify-end px-[20px] mr-[10px]">
        <div
          className={`fixed top-0 left-0 w-full h-full backdrop-blur-xl bg-primary-2/30 bg-opacity-75 z-20 transform ${
            toggle ? "-x-0" : "translate-x-full"
          } transition-transform duration-700 ease-in-out lg:hidden`}
        >
          <div className="flex flex-col justify-center items-center h-full space-y-4 border-b-4">
            {navlinks.map((link) => (
              <NavLink
                to={link.link}
                onClick={() => {
                  setToggle(false); // Close the mobile menu when a link is clicked
                }}
                key={link.id}
              >
                <div className="flex">
                  <span className="text-lg text-[#A4A8AB] hover:text-white hover:border-b-2 border-[#0caf60]">
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
          className="w-[28px] h-[28px] object-contain z-50 mt-2 cursor-pointer"
          onClick={() => setToggle((prev) => !prev)} // Toggle the mobile menu
        />
      </div>
    </nav>
  );
};

export default Navbar;
